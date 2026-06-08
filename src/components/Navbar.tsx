"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X, Phone, WhatsappLogo, CaretRight, XCircle } from "@phosphor-icons/react";
import { useState, useEffect, useCallback } from "react";
import { PHONE, WA_QUOTE } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Products", href: "#products", id: "products" },
  { name: "About", href: "#about", id: "about" },
  { name: "Why Us", href: "#why-us", id: "why-us" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "FAQ", href: "#faq", id: "faq" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcement-dismissed");
    if (dismissed) {
      setTimeout(() => {
        setAnnouncementVisible(false);
      }, 0);
    }
  }, []);

  const dismissAnnouncement = () => {
    setAnnouncementVisible(false);
    sessionStorage.setItem("announcement-dismissed", "1");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: update active link based on which section is in view
  const updateActiveLink = useCallback(() => {
    const scrollY = window.scrollY + 100;
    let current = "";
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (el && el.offsetTop <= scrollY) {
        current = link.name;
      }
    }
    setActiveLink(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    const timer = setTimeout(() => {
      updateActiveLink();
    }, 0);
    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      clearTimeout(timer);
    };
  }, [updateActiveLink]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ── Sticky wrapper: announcement + nav together ── */}
      <div className="sticky top-0 left-0 right-0 z-40">

        {/* Announcement Bar */}
        {announcementVisible && (
          <div className="bg-primary text-white text-center text-[13px] font-body font-medium py-2 px-10 relative">
            <span className="opacity-90">🇮🇳 100% Made in India · </span>
            <span>Free Installation Support · </span>
            <Link href="#contact" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
              Get a Free Quote Today →
            </Link>
            <button
              onClick={dismissAnnouncement}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <XCircle size={18} weight="fill" />
            </button>
          </div>
        )}

        {/* ── Main Nav ── */}
        <nav
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(91,184,232,0.15)] border-b border-primary/10"
              : "bg-white border-b border-border-color"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[72px]">

              {/* Logo */}
              <Link href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
                <div className="relative flex items-center">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-white to-neutral-50 p-1.5 border border-primary/10 shadow-[0_2px_10px_rgba(91,184,232,0.08)] group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(91,184,232,0.15)]">
                    <Image
                      src="/images/logo.png"
                      alt="Aqua Saver Logo"
                      width={160}
                      height={44}
                      className="h-[44px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                      priority
                    />
                    {/* Shimmer sweep effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10" />
                  </div>
                  {/* Active status indicator dot */}
                  <span className="relative flex h-2.5 w-2.5 ml-2.5">
                    <span className="animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative px-4 py-2 rounded-lg text-[14.5px] font-medium transition-all duration-200 group
                      ${activeLink === link.name
                        ? "text-primary bg-primary/8"
                        : "text-text-mid hover:text-primary hover:bg-primary/5"
                      }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary rounded-full transition-all duration-300 origin-left
                      ${activeLink === link.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-color text-text-mid hover:border-primary hover:text-primary text-[13.5px] font-medium transition-all duration-200 hover:bg-primary/5"
                >
                  <Phone size={16} weight="fill" />
                  <span>Call Us</span>
                </Link>

                <Link
                  href={WA_QUOTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-[14px] font-display font-semibold shadow-[0_4px_16px_rgba(91,184,232,0.4)] hover:shadow-[0_6px_24px_rgba(91,184,232,0.5)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Free Quote</span>
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border-color text-text-dark hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                aria-label="Open menu"
              >
                <List size={22} weight="bold" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Mobile Full-Screen Drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-[340px] bg-white flex flex-col shadow-2xl transition-transform duration-400 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-color bg-bg-light">
          <div className="relative flex items-center">
            <div className="rounded-lg bg-white p-1 border border-primary/10 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Aqua Saver"
                width={120}
                height={34}
                className="h-[34px] w-auto object-contain"
              />
            </div>
            <span className="relative flex h-2.5 w-2.5 ml-2.5">
              <span className="animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border-color text-text-mid hover:text-primary hover:border-primary transition-all"
            aria-label="Close menu"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-4">
          <p className="text-[11px] font-semibold text-text-light uppercase tracking-widest px-3 mb-3">Navigation</p>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15.5px] font-medium transition-all duration-150 group ${
                  activeLink === link.name
                    ? "bg-primary/10 text-primary"
                    : "text-text-dark hover:bg-primary/8 hover:text-primary"
                }`}
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.name}</span>
                <CaretRight size={16} className="text-text-light group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer Footer CTAs */}
        <div className="p-5 border-t border-border-color space-y-3 bg-bg-light">
          <Link
            href={`tel:${PHONE}`}
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl border-2 border-primary text-primary font-display font-semibold text-[15px] hover:bg-primary hover:text-white transition-all duration-200"
          >
            <Phone size={18} weight="fill" />
            Call Now
          </Link>
          <Link
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-display font-semibold text-[15px] shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <WhatsappLogo size={20} weight="fill" />
            WhatsApp Us
          </Link>

          <p className="text-center text-[11px] text-text-light pt-1">
            🇮🇳 Made in India · Trusted by 500+ Customers
          </p>
        </div>
      </div>
    </>
  );
}
