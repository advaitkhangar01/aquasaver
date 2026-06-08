#!/bin/bash

# Deployment automation script for Aqua Saver Water Solutions on Ubuntu/Debian
# To run this script: chmod +x scripts/deploy.sh && ./scripts/deploy.sh

# Exit immediately if a command exits with a non-zero status
set -e

# Define Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}===================================================${NC}"
echo -e "${GREEN}   Starting Aqua Saver Deployment Setup on VPS     ${NC}"
echo -e "${GREEN}===================================================${NC}"

# 1. Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Please run this script with sudo or as root:${NC}"
  echo "sudo ./scripts/deploy.sh"
  exit 1
fi

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="$( dirname "$SCRIPT_DIR" )"

echo -e "${YELLOW}[1/6] Updating system packages...${NC}"
apt update -y

echo -e "${YELLOW}[2/6] Checking/Installing Node.js & development tools...${NC}"
# Install curl and build tools if not present
apt install -y curl git build-essential

# Install Node.js v20.x if not already installed or if version is older
if ! command -v node &> /dev/null || [ $(node -v | cut -d'.' -f1 | tr -d 'v') -lt 20 ]; then
  echo -e "${YELLOW}Installing Node.js v20.x LTS...${NC}"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
else
  echo -e "${GREEN}Node.js is already installed ($(node -v)).${NC}"
fi

# Verify installation
echo -e "${GREEN}Node version: $(node -v)${NC}"
echo -e "${GREEN}NPM version:  $(npm -v)${NC}"

echo -e "${YELLOW}[3/6] Checking/Installing PM2 (Process Manager)...${NC}"
if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
else
  echo -e "${GREEN}PM2 is already installed ($(pm2 -v)).${NC}"
fi

echo -e "${YELLOW}[4/6] Checking/Installing Nginx...${NC}"
if ! command -v nginx &> /dev/null; then
  apt install -y nginx
else
  echo -e "${GREEN}Nginx is already installed.${NC}"
fi

# Enable and start Nginx service
systemctl enable nginx
systemctl start nginx

echo -e "${YELLOW}[5/6] Configuring Nginx Reverse Proxy...${NC}"
NGINX_CONF_SOURCE="$SCRIPT_DIR/nginx.conf"
NGINX_CONF_TARGET="/etc/nginx/sites-available/aquasaver"

if [ -f "$NGINX_CONF_SOURCE" ]; then
  cp "$NGINX_CONF_SOURCE" "$NGINX_CONF_TARGET"
  # Enable the site configuration
  ln -sf "$NGINX_CONF_TARGET" /etc/nginx/sites-enabled/
  # Disable default nginx configuration if active
  rm -f /etc/nginx/sites-enabled/default
  
  # Test nginx config and reload
  nginx -t
  systemctl restart nginx
  echo -e "${GREEN}Nginx configured and restarted successfully.${NC}"
else
  echo -e "${RED}Error: nginx.conf template not found at $NGINX_CONF_SOURCE${NC}"
  exit 1
fi

echo -e "${YELLOW}[6/6] Building and starting the Next.js application...${NC}"
cd "$PROJECT_DIR"

# Install project dependencies
echo -e "${YELLOW}Installing project dependencies...${NC}"
npm install

# Build Next.js app
echo -e "${YELLOW}Building the Next.js production site...${NC}"
npm run build

# Start or reload with PM2
echo -e "${YELLOW}Starting Next.js with PM2...${NC}"
# check if "aquasaver" PM2 process is running
if pm2 list | grep -q "aquasaver"; then
  echo -e "${YELLOW}App already running in PM2. Reloading to apply changes...${NC}"
  pm2 reload aquasaver
else
  echo -e "${YELLOW}Starting new PM2 process for Next.js...${NC}"
  pm2 start npm --name "aquasaver" -- start
fi

# Set up PM2 startup behavior
echo -e "${YELLOW}Configuring PM2 to start on system boot...${NC}"
pm2 save

echo -e "${GREEN}===================================================${NC}"
echo -e "${GREEN}   Deployment successful! Application is running.   ${NC}"
echo -e "${GREEN}===================================================${NC}"
echo ""
echo -e "To configure SSL (HTTPS), run the following commands:"
echo -e "${YELLOW}1. sudo apt install -y certbot python3-certbot-nginx${NC}"
echo -e "${YELLOW}2. sudo certbot --nginx -d aquasaversolutions.com -d www.aquasaversolutions.com${NC}"
echo ""
echo -e "PM2 command tips:"
echo -e "- View logs:   ${YELLOW}pm2 logs aquasaver${NC}"
echo -e "- View status: ${YELLOW}pm2 status${NC}"
echo -e "- Restart app: ${YELLOW}pm2 restart aquasaver${NC}"
echo -e "==================================================="
