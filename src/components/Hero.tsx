"use client";

import Link from "next/link";
import { Phone, WhatsappLogo, ShieldCheck, Drop } from "@phosphor-icons/react/dist/ssr";
import { motion, Variants } from "framer-motion";
import { PHONE, WA_GENERAL } from "@/lib/constants";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-bg-dark pt-28 pb-20 overflow-hidden min-h-screen lg:py-24 flex items-center">
      {/* Background Ripple / Tech Accent SVG */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] translate-x-1/3 -translate-y-1/3 opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-current" strokeWidth="0.3">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="50" />
          <circle cx="50" cy="50" r="60" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content (5/12 width on desktop) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
              <Drop size={16} weight="fill" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Smart Water Automation for India</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.15] mb-6">
              Automated Water Management for <span className="text-primary">Homes &amp; Apartments</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-text-light font-body max-w-[520px] mb-8 leading-relaxed">
              Never worry about tank overflows, dry running water motors, or water shortages. 
              Aquasaver monitors your tanks and automates your motor 24/7, keeping your home supply secure.
            </motion.p>

            {/* Key Value Checklist (Senior-friendly and bold) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8 w-full max-w-[520px]">
              <div className="flex items-center gap-2 text-white text-[14px]">
                <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-bold">
                  ✓
                </div>
                <span>100% Fully Automatic System</span>
              </div>
              <div className="flex items-center gap-2 text-white text-[14px]">
                <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-bold">
                  ✓
                </div>
                <span>Prevents Water Wastage</span>
              </div>
              <div className="flex items-center gap-2 text-white text-[14px]">
                <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-bold">
                  ✓
                </div>
                <span>Zero Overhead Tank Overflow</span>
              </div>
              <div className="flex items-center gap-2 text-white text-[14px]">
                <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-bold">
                  ✓
                </div>
                <span>Protects Motor (No Dry Run)</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <Link
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg font-display font-semibold hover:bg-primary-dark transition-all shadow-[0_8px_32px_rgba(91,184,232,0.2)] hover:shadow-[0_8px_32px_rgba(91,184,232,0.4)]"
              >
                <Phone size={20} weight="fill" />
                <span>Call Now</span>
              </Link>
              <Link
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-display font-semibold hover:bg-[#1da851] transition-colors"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>WhatsApp Us</span>
              </Link>
            </motion.div>

            {/* Trust micro-line */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mt-6 text-text-light text-sm font-body">
              <ShieldCheck size={18} weight="fill" className="text-success" />
              <span>ISO 9001:2015 Certified · Trusted by 500+ Indian Families</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Custom Animated SVG centerpiece (7/12 width on desktop) */}
          <motion.div 
            className="lg:col-span-7 relative w-full flex flex-col items-center justify-center pb-12 lg:pb-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Background Blue Aura Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-primary/10 rounded-full blur-[90px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10 w-full max-w-[650px] aspect-[4/3] flex items-center justify-center bg-white/2 backdrop-blur-md rounded-2xl border border-white/5 p-2 sm:p-4 shadow-2xl">
              <svg viewBox="0 0 800 600" className="w-full h-full text-primary fill-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Subtle Blueprint Grid Pattern */}
                  <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(91,184,232,0.03)" strokeWidth="1" />
                  </pattern>
                  
                  {/* Water Gradient */}
                  <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5BB8E8" stopOpacity="0.85"/>
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.95"/>
                  </linearGradient>

                  {/* Controller Face Accent Gradient */}
                  <linearGradient id="controller-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7B3B1A"/>
                    <stop offset="100%" stopColor="#4E220D"/>
                  </linearGradient>
                  
                  {/* Controller Side Accent Gradient (Darker for 3D shadow) */}
                  <linearGradient id="controller-side-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4E220D"/>
                    <stop offset="100%" stopColor="#250F05"/>
                  </linearGradient>

                  {/* Controller Faceplate Gradient */}
                  <linearGradient id="panel-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2D3748"/>
                    <stop offset="100%" stopColor="#1A202C"/>
                  </linearGradient>

                  {/* Building Frame Gradient */}
                  <linearGradient id="building-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)"/>
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.01)"/>
                  </linearGradient>

                  {/* Cylinder Glass Reflection Sheen */}
                  <linearGradient id="glass-reflection" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18"/>
                    <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.03"/>
                    <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.0"/>
                    <stop offset="92%" stopColor="#FFFFFF" stopOpacity="0.08"/>
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.22"/>
                  </linearGradient>

                  {/* Glow Filter for lights/flowing liquid */}
                  <filter id="glow-light" x="-25%" y="-25%" width="150%" height="150%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  
                  {/* Masks for tank interiors to clip wave overflows */}
                  <mask id="oh-tank-mask">
                    <rect x="485" y="45" width="150" height="90" rx="4" fill="#FFFFFF" />
                  </mask>
                  <mask id="sump-tank-mask">
                    <rect x="455" y="485" width="210" height="90" rx="4" fill="#FFFFFF" />
                  </mask>
                </defs>

                <style>{`
                  /* Pipe flow lines */
                  .flow-line {
                    stroke-dasharray: 8, 12;
                    stroke-linecap: round;
                  }

                  /* --- 15-Second Choreographed Keyframes (Optimized to avoid lag) --- */
                  
                  /* Overhead water level: translateY(70px) is low (15%), translateY(0px) is full (85%) */
                  @keyframes rooftop-water-translate {
                    0%, 23.3% { transform: translateY(70px); }
                    60%, 73.3% { transform: translateY(0px); }
                    100% { transform: translateY(70px); }
                  }

                  /* Underground water level: drops slightly when pump active (3.5-9s) */
                  @keyframes underground-water-translate {
                    0%, 23.3% { transform: translateY(0px); }
                    60% { transform: translateY(20px); }
                    73.3%, 100% { transform: translateY(0px); }
                  }

                  /* Water waves horizontal translation */
                  @keyframes wave-scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-80px); }
                  }
                  @keyframes wave-scroll-right {
                    0% { transform: translateX(-80px); }
                    100% { transform: translateX(0); }
                  }
                  .wave-left {
                    animation: wave-scroll-left 5s linear infinite;
                  }
                  .wave-right {
                    animation: wave-scroll-right 4s linear infinite;
                  }

                  /* Upward pipe water flow (only active 3.5s - 9.0s) */
                  @keyframes flow-upward {
                    0%, 23.3% { stroke-dashoffset: 0; opacity: 0; }
                    23.4%, 60% { stroke-dashoffset: -40; opacity: 1; }
                    60.1%, 100% { stroke-dashoffset: 0; opacity: 0; }
                  }

                  /* Downward pipe water flow (active during consumption draining 11s - 15s) */
                  @keyframes flow-downward {
                    0%, 73.3% { stroke-dashoffset: 0; opacity: 0; }
                    73.4%, 100% { stroke-dashoffset: 40; opacity: 0.85; }
                  }

                  /* Signal pulse from rooftop sensor to controller (low at 1.5-2.5s, full at 9-10s) */
                  @keyframes signal-up-to-ctrl {
                    0%, 10% { stroke-dashoffset: 40; opacity: 0; }
                    10.1%, 16.7% { stroke-dashoffset: 0; opacity: 1; }
                    16.8%, 60% { stroke-dashoffset: 40; opacity: 0; }
                    60.1%, 66.7% { stroke-dashoffset: 0; opacity: 1; }
                    66.8%, 100% { stroke-dashoffset: 40; opacity: 0; }
                  }

                  /* Signal pulse from controller to pump (turn on at 2.5-3.5s, turn off at 9.5-10.5s) */
                  @keyframes signal-ctrl-to-pump {
                    0%, 16.7% { stroke-dashoffset: 40; opacity: 0; }
                    16.8%, 23.3% { stroke-dashoffset: 0; opacity: 1; }
                    23.4%, 63.3% { stroke-dashoffset: 40; opacity: 0; }
                    63.4%, 70% { stroke-dashoffset: 0; opacity: 1; }
                    70.1%, 100% { stroke-dashoffset: 40; opacity: 0; }
                  }

                  /* Controller status light color sequence */
                  @keyframes ctrl-status-light {
                    0%, 16.7% { fill: #EAB308; } /* Yellow - sensing */
                    16.8%, 60% { fill: #22C55E; }  /* Green - motor running */
                    60.1%, 73.3% { fill: #3B82F6; } /* Blue - tank full */
                    73.4%, 100% { fill: #3B82F6; }  /* Blue - standby */
                  }

                  /* Pump Motor active status indicator circle pulse */
                  @keyframes motor-pulse {
                    0%, 23.3% { opacity: 0; transform: scale(0.95); }
                    23.4%, 60% { opacity: 0.7; transform: scale(1.15); }
                    60.1%, 100% { opacity: 0; transform: scale(0.95); }
                  }

                  /* Pump Motor text box color change */
                  @keyframes motor-text-color {
                    0%, 23.3% { fill: #64748B; } /* Gray - OFF */
                    23.4%, 60% { fill: #22C55E; } /* Green - ON */
                    60.1%, 100% { fill: #64748B; }
                  }

                  /* Directional arrows glowing: green for upflow, blue for downflow */
                  @keyframes arrow-up-glow {
                    0%, 23.3% { fill: rgba(255, 255, 255, 0.15); }
                    23.4%, 60% { fill: #22C55E; filter: drop-shadow(0 0 4px rgba(34,197,94,0.8)); }
                    60.1%, 100% { fill: rgba(255, 255, 255, 0.15); }
                  }
                  @keyframes arrow-down-glow {
                    0%, 73.3% { fill: rgba(255, 255, 255, 0.15); }
                    73.4%, 100% { fill: #3B82F6; filter: drop-shadow(0 0 4px rgba(59,130,246,0.8)); }
                  }

                  /* Expanding radar wave active state control */
                  @keyframes radar-low-active {
                    0%, 23.3% { opacity: 1; }
                    23.4%, 100% { opacity: 0; }
                  }
                  @keyframes radar-high-active {
                    0%, 60% { opacity: 0; }
                    60.1%, 73.3% { opacity: 1; }
                    73.4%, 100% { opacity: 0; }
                  }
                  @keyframes radar-sump-active {
                    0%, 73.3% { opacity: 0; }
                    73.4%, 100% { opacity: 1; }
                  }

                  /* LCD display text opacity switching */
                  @keyframes text-low {
                    0%, 23.3% { opacity: 1; }
                    23.4%, 100% { opacity: 0; }
                  }
                  @keyframes text-pumping {
                    0%, 23.3% { opacity: 0; }
                    23.4%, 60% { opacity: 1; }
                    60.1%, 100% { opacity: 0; }
                  }
                  @keyframes text-full {
                    0%, 60% { opacity: 0; }
                    60.1%, 73.3% { opacity: 1; }
                    73.4%, 100% { opacity: 0; }
                  }
                  @keyframes text-standby {
                    0%, 73.3% { opacity: 0; }
                    73.4%, 100% { opacity: 1; }
                  }

                  /* Water droplets blinking on active supply taps */
                  @keyframes drop-flash {
                    0%, 73.3% { opacity: 0; }
                    73.4%, 100% { opacity: 0.9; }
                  }

                  /* --- Assignments --- */
                  #rooftop-water-group {
                    animation: rooftop-water-translate 15s infinite ease-in-out;
                  }
                  #underground-water-group {
                    animation: underground-water-translate 15s infinite ease-in-out;
                  }
                  #motor-run-glow-circle {
                    transform-origin: 345px 520px;
                    animation: motor-pulse 15s infinite ease-in-out;
                  }
                  #motor-text-status {
                    animation: motor-text-color 15s infinite step-end;
                  }
                  #pipe-water-up {
                    animation: flow-upward 15s infinite linear;
                  }
                  #pipe-water-down {
                    animation: flow-downward 15s infinite linear;
                  }
                  #signal-up-to-ctrl-line {
                    animation: signal-up-to-ctrl 15s infinite linear;
                  }
                  #signal-ctrl-to-pump-line {
                    animation: signal-ctrl-to-pump 15s infinite linear;
                  }
                  #ctrl-status-light-node {
                    animation: ctrl-status-light 15s infinite step-end;
                  }
                  #text-low-node {
                    animation: text-low 15s infinite step-end;
                  }
                  #text-pumping-node {
                    animation: text-pumping 15s infinite step-end;
                  }
                  #text-full-node {
                    animation: text-full 15s infinite step-end;
                  }
                  #text-standby-node {
                    animation: text-standby 15s infinite step-end;
                  }
                  .arrow-dir-up {
                    animation: arrow-up-glow 15s infinite step-end;
                  }
                  .arrow-dir-down {
                    animation: arrow-down-glow 15s infinite step-end;
                  }
                  #radar-low-group {
                    animation: radar-low-active 15s infinite step-end;
                  }
                  #radar-high-group {
                    animation: radar-high-active 15s infinite step-end;
                  }
                  #radar-sump-group {
                    animation: radar-sump-active 15s infinite step-end;
                  }
                  .water-drop-blink {
                    animation: drop-flash 15s infinite step-end;
                  }
                `}</style>

                {/* Background Grid */}
                <rect width="800" height="600" fill="url(#tech-grid)" rx="16" />

                {/* ================= RESIDENTIAL BUILDING INFRASTRUCTURE ================= */}
                {/* Building Frame */}
                <rect x="450" y="140" width="220" height="320" rx="12" fill="url(#building-grad)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                
                {/* Floors */}
                <line x1="450" y1="200" x2="670" y2="200" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                <line x1="450" y1="260" x2="670" y2="260" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                <line x1="450" y1="320" x2="670" y2="320" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                <line x1="450" y1="380" x2="670" y2="380" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                <line x1="450" y1="440" x2="670" y2="440" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />

                {/* Windows (Flat details) */}
                {/* 5th Floor */}
                <rect x="475" y="160" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="515" y="160" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="590" y="160" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />

                {/* 4th Floor */}
                <rect x="475" y="220" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="515" y="220" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="590" y="220" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />

                {/* 3rd Floor */}
                <rect x="475" y="280" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="515" y="280" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="590" y="280" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />

                {/* 2nd Floor */}
                <rect x="475" y="340" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="515" y="340" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="590" y="340" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />

                {/* 1st Floor */}
                <rect x="475" y="400" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="515" y="400" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />
                <rect x="590" y="400" width="22" height="25" rx="3" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" />


                {/* ================= WATER TANKS ================= */}
                {/* Rooftop Water Tank (O.H. TANK) */}
                <rect x="480" y="40" width="160" height="100" rx="8" fill="rgba(17, 27, 40, 0.95)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2.5" />
                
                {/* Masked group for water waves inside O.H. Tank */}
                <g mask="url(#oh-tank-mask)">
                  <g id="rooftop-water-group">
                    <rect x="480" y="45" width="170" height="110" fill="url(#water-grad)" />
                    {/* Ripple Wave 1 (Front - Lighter Blue) */}
                    <path className="wave-left" d="M 440 45 Q 460 38, 480 45 T 520 45 T 560 45 T 600 45 T 640 45 T 680 45 T 720 45 V 160 H 440 Z" fill="rgba(91, 184, 232, 0.45)" />
                    {/* Ripple Wave 2 (Back - Darker Blue) */}
                    <path className="wave-right" d="M 440 45 Q 460 52, 480 45 T 520 45 T 560 45 T 600 45 T 640 45 T 680 45 T 720 45 V 160 H 440 Z" fill="url(#water-grad)" opacity="0.8" />
                  </g>
                </g>
                
                {/* Glass reflection sheen */}
                <rect x="480" y="40" width="160" height="100" rx="8" fill="url(#glass-reflection)" pointerEvents="none" />

                {/* Level indicators */}
                <line x1="630" y1="65" x2="638" y2="65" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                <text x="643" y="68" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="sans-serif" fontWeight="700">FULL</text>
                <line x1="630" y1="95" x2="638" y2="95" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                <text x="643" y="98" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="sans-serif" fontWeight="700">MID</text>
                <line x1="630" y1="125" x2="638" y2="125" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                <text x="643" y="128" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="sans-serif" fontWeight="700">LOW</text>

                {/* O.H. Tank Label Badge */}
                <g transform="translate(560, 20)">
                  <rect x="-95" y="-12" width="190" height="24" rx="4" fill="#0A0F18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">OVERHEAD TANK (O.H. TANK)</text>
                </g>

                {/* Underground Water Tank (SUMP) */}
                <rect x="450" y="480" width="220" height="100" rx="8" fill="rgba(17, 27, 40, 0.95)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2.5" />
                
                {/* Masked group for water waves inside Sump Tank */}
                <g mask="url(#sump-tank-mask)">
                  <g id="underground-water-group">
                    <rect x="450" y="485" width="220" height="110" fill="url(#water-grad)" />
                    <path className="wave-left" d="M 440 485 Q 460 478, 480 485 T 520 485 T 560 485 T 600 485 T 640 485 T 680 485 T 720 485 V 600 H 440 Z" fill="rgba(91, 184, 232, 0.45)" />
                    <path className="wave-right" d="M 440 485 Q 460 492, 480 485 T 520 485 T 560 485 T 600 485 T 640 485 T 680 485 T 720 485 V 600 H 440 Z" fill="url(#water-grad)" opacity="0.8" />
                  </g>
                </g>

                {/* Glass reflection sheen */}
                <rect x="450" y="480" width="220" height="100" rx="8" fill="url(#glass-reflection)" pointerEvents="none" />
                
                {/* Sump Label Badge */}
                <g transform="translate(560, 530)">
                  <rect x="-115" y="-12" width="230" height="24" rx="4" fill="#0A0F18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">UNDERGROUND SUMP (SOURCE)</text>
                </g>


                {/* ================= WATER MOTOR (PUMP) ================= */}
                <rect x="280" y="480" width="120" height="100" rx="8" fill="rgba(17, 27, 40, 0.7)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
                
                {/* Motor Label Badge */}
                <g transform="translate(340, 445)">
                  <rect x="-80" y="-12" width="160" height="24" rx="4" fill="#0A0F18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">WATER PUMP (MOTOR)</text>
                </g>

                {/* Motor Ring Pulse on Active */}
                <circle id="motor-run-glow-circle" cx="345" cy="525" r="28" stroke="#22C55E" strokeWidth="4" fill="none" opacity="0" filter="url(#glow-light)" />

                {/* Motor Body (Static, no lag) */}
                <rect x="315" y="505" width="60" height="40" rx="3" fill="#475569" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
                <line x1="325" y1="509" x2="325" y2="541" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="333" y1="509" x2="333" y2="541" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="341" y1="509" x2="341" y2="541" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="349" y1="509" x2="349" y2="541" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <circle cx="365" cy="525" r="12" fill="#334155" stroke="rgba(255, 255, 255, 0.2)" />

                {/* Status Indicator text on motor */}
                <rect x="320" y="552" width="50" height="15" rx="3" fill="#1E293B" stroke="rgba(255,255,255,0.1)" />
                <text id="motor-text-status" x="345" y="563" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="monospace">RUNNING</text>


                {/* ================= 2.5D ISOMETRIC AUTOMATIC CONTROLLER ================= */}
                {/* 3D Side extrusion */}
                <path d="M 300 200 L 315 185 V 385 L 300 400 Z" fill="url(#controller-side-grad)" stroke="#4E220D" strokeWidth="1" />
                {/* 3D Top extrusion */}
                <path d="M 80 200 L 95 185 H 315 L 300 200 Z" fill="url(#controller-grad)" opacity="0.85" stroke="#7B3B1A" strokeWidth="1" />
                
                {/* Front panel enclosure */}
                <rect x="80" y="200" width="220" height="200" rx="10" fill="url(#panel-grad)" stroke="url(#controller-grad)" strokeWidth="3" filter="drop-shadow(0 12px 28px rgba(0,0,0,0.65))" />
                
                {/* Header face branding */}
                <path d="M 80 208 A 8 8 0 0 1 88 200 H 292 A 8 8 0 0 1 300 208 V 225 H 80 Z" fill="url(#controller-grad)" />
                <text x="190" y="214" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-display), sans-serif" fontSize="11.5" fontWeight="800" letterSpacing="2">AQUASAVER</text>
                <text x="190" y="222" textAnchor="middle" fill="rgba(255, 255, 255, 0.5)" fontSize="6" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">AUTOMATIC STARTER PANEL</text>
                
                {/* LCD Display Screen (Bigger, senior readable) */}
                <rect x="100" y="238" width="180" height="95" rx="6" fill="#0A0F18" stroke="rgba(91, 184, 232, 0.18)" strokeWidth="2" filter="url(#glow-light)" />
                <path d="M 105 260 H 275 M 105 285 H 275 M 105 310 H 275" stroke="rgba(91, 184, 232, 0.02)" strokeWidth="1" />
                
                {/* Display States (Synchronized) */}
                <g id="text-low-node">
                  <text x="190" y="262" textAnchor="middle" fill="#EF4444" fontSize="12" fontFamily="monospace" fontWeight="800">O.H. TANK: EMPTY</text>
                  <text x="190" y="288" textAnchor="middle" fill="#EAB308" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; SENSING LOW LEVEL</text>
                  <text x="190" y="314" textAnchor="middle" fill="#EAB308" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; STARTING MOTOR...</text>
                </g>
                <g id="text-pumping-node">
                  <text x="190" y="262" textAnchor="middle" fill="#22C55E" fontSize="12" fontFamily="monospace" fontWeight="800">MOTOR IS RUNNING</text>
                  <text x="190" y="288" textAnchor="middle" fill="#5BB8E8" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; WATER GOING UP</text>
                  <text x="190" y="314" textAnchor="middle" fill="#22C55E" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; MOTOR IS PROTECTED</text>
                </g>
                <g id="text-full-node">
                  <text x="190" y="262" textAnchor="middle" fill="#5BB8E8" fontSize="12" fontFamily="monospace" fontWeight="800">O.H. TANK: FULL</text>
                  <text x="190" y="288" textAnchor="middle" fill="#22C55E" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; SENSING HIGH LEVEL</text>
                  <text x="190" y="314" textAnchor="middle" fill="#EF4444" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; MOTOR STOPPED</text>
                </g>
                <g id="text-standby-node">
                  <text x="190" y="262" textAnchor="middle" fill="#3B82F6" fontSize="12" fontFamily="monospace" fontWeight="800">SYSTEM: STANDBY</text>
                  <text x="190" y="288" textAnchor="middle" fill="#64748B" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; MONITORING TANKS</text>
                  <text x="190" y="314" textAnchor="middle" fill="#22C55E" fontSize="10.5" fontFamily="monospace" fontWeight="700">&gt; AUTO MODE ON</text>
                </g>

                {/* Controller screen status indicator */}
                <circle id="ctrl-status-light-node" cx="268" cy="258" r="3.5" fill="#EAB308" />

                {/* Controller Label Badge */}
                <g transform="translate(190, 165)">
                  <rect x="-115" y="-12" width="230" height="24" rx="4" fill="#0A0F18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">AQUASAVER STARTER PANEL</text>
                </g>

                {/* Buttons */}
                <circle cx="125" cy="368" r="8.5" fill="#475569" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="125" cy="368" r="4" fill="#EF4444" />
                <text x="125" y="386" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">OFF</text>
                
                <circle cx="158" cy="368" r="8.5" fill="#475569" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="158" cy="368" r="4" fill="#22C55E" />
                <text x="158" y="386" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">ON</text>

                {/* Auto Starter Label */}
                <text x="235" y="372" textAnchor="middle" fill="#5BB8E8" fontSize="9" fontFamily="sans-serif" fontWeight="800">AUTO ACTIVE</text>


                {/* ================= PLUMBING PIPELINES & DIRECTIONAL FLOW ARROWS ================= */}
                {/* Intake Pipe (Sump to Motor) */}
                <path d="M 480 530 H 345" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="10" strokeLinecap="round" fill="none" />
                {/* Flow Arrow: Sump -> Motor */}
                <polygon points="415,525 405,530 415,535" className="arrow-dir-up" />

                {/* Main Upward Pipe (Motor to O.H. Tank) */}
                <path d="M 345 510 V 470 H 710 V 50 H 620" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="10" strokeLinejoin="round" fill="none" />
                
                {/* Flow Arrow: Vertical run up building (glowing green/upward) */}
                <polygon points="705,285 710,272 715,285" className="arrow-dir-up" />
                {/* Flow Arrow: Horizontal entry to O.H. Tank */}
                <polygon points="650,55 638,50 650,45" className="arrow-dir-up" />

                {/* Downward Pipe (O.H. Tank to House Taps) */}
                <path d="M 560 140 V 450" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="8" fill="none" />
                <path d="M 525 200 H 560 M 560 260 H 595 M 525 320 H 560 M 560 380 H 595 M 525 440 H 560" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="5" strokeLinecap="round" />
                
                {/* Downward Flow Arrows (glowing blue when draining/using water) */}
                <polygon points="555,225 560,237 565,225" className="arrow-dir-down" />
                <polygon points="555,345 560,357 565,345" className="arrow-dir-down" />

                {/* Animated Upward flow (active when pump is green) */}
                <path id="pipe-water-up" d="M 480 530 H 345 V 470 H 710 V 50 H 620" className="flow-line" stroke="#5BB8E8" strokeWidth="4.5" strokeLinejoin="round" fill="none" filter="url(#glow-light)" />
                
                {/* Animated Downward flow (active when system drains to rooms) */}
                <path id="pipe-water-down" d="M 560 140 V 450 M 525 200 H 560 M 560 260 H 595 M 525 320 H 560 M 560 380 H 595 M 525 440 H 560" className="flow-line" stroke="#5BB8E8" strokeWidth="3" fill="none" />

                {/* Home Supply Label Badge */}
                <g transform="translate(560, 290)">
                  <rect x="-95" y="-12" width="190" height="24" rx="4" fill="#0A0F18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">HOME WATER SUPPLY (TAPS)</text>
                </g>


                {/* ================= MICRO-ICONS ON BUILDING OUTLETS ================= */}
                {/* Floor 5: Washing Machine Icon */}
                <g transform="translate(605, 188) scale(0.8)">
                  <rect x="2" y="2" width="14" height="18" rx="2" stroke="#8A9BAD" strokeWidth="1.5" fill="none" />
                  <circle cx="9" cy="11" r="4" stroke="#8A9BAD" strokeWidth="1.2" fill="none" />
                  <line x1="4" y1="5" x2="6" y2="5" stroke="#8A9BAD" strokeWidth="1.2" />
                  <circle cx="13" cy="5" r="1" fill="#8A9BAD" />
                </g>
                
                {/* Floor 4: Shower Icon */}
                <g transform="translate(605, 248) scale(0.8)">
                  <path d="M 2 16 C 2 8 8 8 10 4 H 14" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M 8 16 H 12" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" />
                  <line className="water-drop-blink" x1="9" y1="18" x2="9" y2="21" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
                  <line className="water-drop-blink" x1="11" y1="18" x2="11" y2="21" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
                </g>
                
                {/* Floor 3: Tap Icon */}
                <g transform="translate(605, 308) scale(0.8)">
                  <path d="M 2 10 H 12 C 12 10 12 4 8 4 H 6" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M 6 2 V 6" stroke="#8A9BAD" strokeWidth="1.5" />
                  <path d="M 12 10 V 13" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" />
                  <circle className="water-drop-blink" cx="12" cy="17" r="1.5" fill="#3B82F6" />
                </g>

                {/* Floor 2: Shower Icon */}
                <g transform="translate(605, 368) scale(0.8)">
                  <path d="M 2 16 C 2 8 8 8 10 4 H 14" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M 8 16 H 12" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" />
                  <line className="water-drop-blink" x1="9" y1="18" x2="9" y2="21" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
                  <line className="water-drop-blink" x1="11" y1="18" x2="11" y2="21" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
                </g>

                {/* Floor 1: Tap Icon */}
                <g transform="translate(605, 428) scale(0.8)">
                  <path d="M 2 10 H 12 C 12 10 12 4 8 4 H 6" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M 6 2 V 6" stroke="#8A9BAD" strokeWidth="1.5" />
                  <path d="M 12 10 V 13" stroke="#8A9BAD" strokeWidth="1.5" strokeLinecap="round" />
                  <circle className="water-drop-blink" cx="12" cy="17" r="1.5" fill="#3B82F6" />
                </g>


                {/* ================= SENSOR WIRING & SIGNAL PULSES ================= */}
                {/* Sensor Wire: O.H. Tank to Controller */}
                <path d="M 480 70 H 200 V 225" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <path id="signal-up-to-ctrl-line" d="M 480 70 H 200 V 225" className="flow-line" stroke="#EAB308" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <circle cx="480" cy="70" r="4.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1" />
                
                {/* Sensor Wire: Sump to Controller */}
                <path d="M 450 500 H 170 V 410" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <circle cx="450" cy="500" r="4.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1" />

                {/* Control Starter Wire: Controller to Pump */}
                <path d="M 200 410 V 430 H 330 V 480" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <path id="signal-ctrl-to-pump-line" d="M 200 410 V 430 H 330 V 480" className="flow-line" stroke="#22C55E" strokeWidth="2" strokeLinejoin="round" fill="none" />


                {/* ================= EXPANDING RADAR SONAR WAVES ================= */}
                {/* Overhead Tank Low-Level Radar (Red) */}
                <g id="radar-low-group">
                  <circle cx="480" cy="125" r="2" stroke="#EF4444" strokeWidth="1.5" fill="none">
                    <animate attributeName="r" values="2;24" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="480" cy="125" r="2" stroke="#EF4444" strokeWidth="1.5" fill="none">
                    <animate attributeName="r" values="2;24" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Overhead Tank Full-Level Radar (Blue) */}
                <g id="radar-high-group">
                  <circle cx="480" cy="65" r="2" stroke="#3B82F6" strokeWidth="1.5" fill="none">
                    <animate attributeName="r" values="2;24" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Sump Monitor Radar (Yellow) */}
                <g id="radar-sump-group">
                  <circle cx="450" cy="500" r="2" stroke="#EAB308" strokeWidth="1.5" fill="none">
                    <animate attributeName="r" values="2;18" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>

              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
