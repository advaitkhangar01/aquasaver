"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 6, suffix: "+", label: "Product Categories" },
  { value: 1, suffix: "", label: "Stadium Automated" },
  { value: 100, suffix: "%", label: "Made in India" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

export default function TrustBar() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      STATS.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(timer);
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.ceil(start);
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [hasAnimated]);

  return (
    <section className="bg-primary py-10" ref={barRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/20">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4 col-span-1 last:col-span-2 last:md:col-span-1">
              <div className="text-4xl font-display font-extrabold text-white mb-2 tracking-tight">
                {hasAnimated ? counts[index] : 0}
                {stat.suffix}
              </div>
              <div className="text-[13px] font-body font-medium text-white/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
