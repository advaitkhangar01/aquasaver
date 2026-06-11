"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X, Phone, WhatsappLogo, CaretRight, XCircle } from "@phosphor-icons/react";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { PHONE, WA_QUOTE } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/", id: "hero" },
  { name: "Products", href: "/#products", id: "products" },
  { name: "Custom Solutions", href: "/custom-solutions", id: "custom-solutions" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Why Us", href: "/#why-us", id: "why-us" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "FAQ", href: "/#faq", id: "faq" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
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
    if (pathname === "/custom-solutions") {
      setActiveLink("Custom Solutions");
      return;
    }
    const scrollY = window.scrollY + 100;
    let current = "";
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (el && el.offsetTop <= scrollY) {
        current = link.name;
      }
    }
    setActiveLink(current);
  }, [pathname]);

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
        <div className={`transition-all duration-500 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "pt-2" : "pt-4"
        }`}>
          <nav
            className={`transition-all duration-500 rounded-2xl border ${
              isScrolled
                ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(91,184,232,0.14)] border-primary/15 py-1 px-4 sm:px-6"
                : "bg-white border-border-color/60 py-3.5 px-6 sm:px-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
            }`}
          >
            <div className="flex justify-between items-center">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
                <div className="relative flex items-center">
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-tr from-white to-neutral-50 border border-primary/10 shadow-[0_4px_16px_rgba(91,184,232,0.08)] group-hover:border-primary/35 transition-all duration-500 group-hover:shadow-[0_8px_24px_rgba(91,184,232,0.18)] group-hover:scale-[1.03] ${
                    isScrolled ? "p-1.5" : "p-2"
                  }`}>
                    <Image
                      src="/images/logo.png"
                      alt="Aqua Saver Logo"
                      width={240}
                      height={68}
                      className={`w-auto object-contain transition-all duration-500 ${
                        isScrolled ? "h-[44px] md:h-[50px]" : "h-[54px] md:h-[64px]"
                      }`}
                      priority
                    />
                    {/* Shimmer sweep effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10" />
                  </div>
                  {/* Active status indicator dot */}
                  <span className="relative flex h-3 w-3 ml-3">
                    <span className="animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1.5 bg-neutral-50/50 p-1 rounded-xl border border-neutral-100/80">
                {NAV_LINKS.map((link) => {
                  const isActive = activeLink === link.name;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setActiveLink(link.name)}
                      className={`relative px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-300 group flex items-center justify-center
                        ${isActive
                          ? "text-primary bg-white shadow-[0_2px_8px_rgba(91,184,232,0.1)] border border-primary/10 font-bold"
                          : "text-text-mid hover:text-primary hover:bg-white/80 hover:shadow-[0_1px_4px_rgba(0,0,0,0.01)] border border-transparent"
                        }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : ""
                      }`} />
                    </Link>
                  );
                })}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/20 bg-primary/5 text-text-mid hover:border-primary hover:text-primary hover:bg-primary/10 text-[13.5px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone size={16} weight="fill" className="animate-[pulse_2s_infinite]" />
                  <span>Call Us</span>
                </Link>

                <Link
                  href={WA_QUOTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-2 px-5.5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-[14px] font-display font-bold shadow-[0_4px_16px_rgba(91,184,232,0.3)] hover:shadow-[0_6px_24px_rgba(91,184,232,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Free Quote</span>
                  {/* Shimmer sweep effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-primary/15 bg-primary/5 text-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
                aria-label="Open menu"
              >
                <List size={24} weight="bold" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Mobile Full-Screen Drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-[340px] bg-white/95 backdrop-blur-2xl flex flex-col shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-color/85 bg-bg-light/40 backdrop-blur-md">
          <div className="relative flex items-center">
            <div className="rounded-xl bg-white p-1.5 border border-primary/10 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Aqua Saver"
                width={140}
                height={40}
                className="h-[40px] w-auto object-contain"
              />
            </div>
            <span className="relative flex h-2.5 w-2.5 ml-2.5">
              <span className="animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-border-color text-text-mid hover:text-primary hover:border-primary transition-all shadow-sm"
            aria-label="Close menu"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-5">
          <p className="text-[11px] font-bold text-text-light uppercase tracking-widest px-3 mb-4">Navigation</p>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15.5px] font-semibold transition-all duration-200 group ${
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/10 shadow-[0_2px_8px_rgba(91,184,232,0.05)]"
                      : "text-text-dark hover:bg-primary/5 hover:text-primary border border-transparent"
                  }`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span>{link.name}</span>
                  <CaretRight size={16} className={`text-text-light transition-all duration-300 ${
                    isActive ? "text-primary translate-x-1" : "group-hover:text-primary group-hover:translate-x-1"
                  }`} />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Drawer Footer CTAs */}
        <div className="p-6 border-t border-border-color/85 space-y-3 bg-bg-light/40 backdrop-blur-md">
          <Link
            href={`tel:${PHONE}`}
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl border border-primary/20 bg-primary/5 text-primary font-display font-bold text-[15px] hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
          >
            <Phone size={18} weight="fill" className="animate-[pulse_2s_infinite]" />
            Call Now
          </Link>
          <Link
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="group relative overflow-hidden flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-display font-bold text-[15px] shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <WhatsappLogo size={20} weight="fill" />
            <span>WhatsApp Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </Link>

          <p className="text-center text-[11px] text-text-light pt-2">
            🇮🇳 Made in India · Trusted by 500+ Customers
          </p>
        </div>
      </div>
    </>
  );
}
