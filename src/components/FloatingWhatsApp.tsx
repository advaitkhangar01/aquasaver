"use client";

import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PHONE, WA_GENERAL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 hidden md:flex items-center justify-center transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <Link
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aqua Saver on WhatsApp"
          className="relative group"
        >
          {/* Pulse ring animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          
          <div className="relative bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center">
            <WhatsappLogo size={32} weight="fill" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-text-dark text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-white"></div>
          </div>
        </Link>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-color shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-3 flex gap-3">
        <Link
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-display font-semibold hover:bg-primary-dark transition-colors"
        >
          <Phone size={20} weight="fill" />
          <span>Call Now</span>
        </Link>
        <Link
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-display font-semibold hover:bg-[#1da851] transition-colors"
        >
          <WhatsappLogo size={20} weight="fill" />
          <span>WhatsApp</span>
        </Link>
      </div>
    </>
  );
}
