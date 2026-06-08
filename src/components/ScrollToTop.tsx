"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 left-8 z-50 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white border border-border-color text-text-mid shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
}
