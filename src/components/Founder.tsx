"use client";

import Image from "next/image";
import { LinkedinLogo, Drop, Quotes } from "@phosphor-icons/react/dist/ssr";
import { motion, Variants } from "framer-motion";

export default function Founder() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="founder" className="bg-bg-light py-20 md:py-28 overflow-hidden relative border-t border-border-color">
      {/* Subtle Background elements */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Founder Image with Ambient Frame */}
          <div className="w-full lg:w-[40%] flex flex-col items-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full max-w-[300px]"
            >
              {/* Outer Blue Glow Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-primary-dark/10 opacity-70 blur-xl z-0 animate-[pulse-led_4s_infinite]"></div>
              
              {/* White outer frame card */}
              <div className="relative z-10 w-full rounded-3xl bg-white border border-border-color p-3 shadow-[0_20px_50px_rgba(91,184,232,0.15)] flex flex-col">
                <div className="relative w-full rounded-2xl overflow-hidden border border-border-color bg-bg-light">
                  <Image
                    src="/images/Jitendra Uikey - Founder.PNG"
                    alt="Jitendra Uikey — Founder, Aqua Saver"
                    width={1536}
                    height={2730}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                
                {/* Visual Label */}
                <div className="mt-3 text-center">
                  <h4 className="font-display font-extrabold text-text-dark text-lg">Jitendra Uikey</h4>
                  <p className="text-xs text-text-light font-semibold uppercase tracking-wider mt-0.5">Founder & CEO</p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-bg-dark text-white rounded-2xl px-4 py-2.5 shadow-lg border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-[pulse-led_2s_infinite]"></div>
                <span className="text-[11px] font-bold font-display uppercase tracking-wider">Nagpur Proud</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Vision and Personal Message */}
          <motion.div
            className="w-full lg:w-[60%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white text-primary border border-border-color px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-[pulse-led_2s_infinite]"></div>
              <span>Meet the Founder</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-dark mb-6 leading-tight"
            >
              Engineering the Future of <span className="text-primary-dark">Water Conservation</span>
            </motion.h2>

            {/* Content Story */}
            <motion.div variants={itemVariants} className="space-y-4 text-text-mid text-base leading-relaxed">
              <p>
                Water is India&apos;s most precious resource, yet millions of liters are wasted every single day due to overflows, dry-running pump damage, and simple manual errors. At Aqua Saver Water Solutions, we set out to change that by building smart, automated systems that are reliable, affordable, and durable.
              </p>
              <p>
                Nagpur is our home, and our systems are designed and engineered specifically to handle local Indian conditions — including extreme voltage fluctuations, irregular municipal water schedules, and deep borewell setups.
              </p>
              <p>
                Whether it is automating a simple residential overhead tank or engineering a complex, multi-pump automated system for a commercial project, our focus is always on bulletproof reliability and customer satisfaction.
              </p>
            </motion.div>

            {/* Quotes block */}
            <motion.div
              variants={itemVariants}
              className="relative mt-8 p-6 bg-white border border-border-color rounded-2xl shadow-sm"
            >
              <span className="absolute right-4 top-4 text-primary/10">
                <Quotes size={48} weight="fill" />
              </span>
              <p className="text-[15px] italic text-text-dark relative z-10 leading-relaxed font-body">
                &quot;To make smart water automation accessible to every Indian home and business — because every drop saved is a step forward.&quot;
              </p>
            </motion.div>

            {/* LinkedIn CTA */}
            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="https://www.linkedin.com/in/jitendar-uikey-2313ba181/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#0A66C2] text-white px-6 py-3 rounded-xl hover:bg-[#0A66C2]/90 transition-all shadow-[0_8px_24px_rgba(10,102,194,0.15)] hover:shadow-[0_8px_32px_rgba(10,102,194,0.25)] font-display font-semibold text-sm hover:-translate-y-0.5 cursor-pointer"
              >
                <LinkedinLogo size={18} weight="fill" />
                <span>Connect with Jitendra on LinkedIn</span>
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
