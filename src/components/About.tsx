"use client";

import Image from "next/image";
import { LinkedinLogo, Drop, Cpu, ShieldCheck, Buildings, Quotes } from "@phosphor-icons/react/dist/ssr";
import { motion, Variants } from "framer-motion";

export default function About() {
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

  const imageCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left - Images (Desktop Overlapping Layout, Mobile Grid/Scroll) */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {/* Mobile View */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-border-color bg-white p-4 flex flex-col items-center">
                <Image
                  src="/images/Single Phase Water Level Controller.jpeg"
                  alt="Single Phase Water Level Controller"
                  width={200}
                  height={150}
                  className="object-contain h-32 w-auto mb-2"
                />
                <span className="text-xs font-semibold text-text-dark text-center">Single Phase Controller</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-border-color bg-white p-4 flex flex-col items-center">
                <Image
                  src="/images/Three Phase Water Level Controller.jpeg"
                  alt="Three Phase Water Level Controller"
                  width={200}
                  height={150}
                  className="object-contain h-32 w-auto mb-2"
                />
                <span className="text-xs font-semibold text-text-dark text-center">Three Phase Controller</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-border-color bg-white p-4 flex flex-col items-center justify-center">
                <Image
                  src="/images/INFORMATIVE.png"
                  alt="Aqua Saver Product Infographic"
                  width={300}
                  height={225}
                  className="w-full h-auto max-h-48 object-contain mb-2"
                />
                <span className="text-xs font-semibold text-text-dark text-center">Automation Wiring Diagram</span>
              </div>
            </div>

            {/* Desktop Overlapping View */}
            <div className="hidden lg:block relative w-full h-[580px] select-none">
              {/* Decorative background pulse ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-primary/10 animate-[pulse-led_4s_infinite] z-0"></div>

              {/* Single Phase Controller Card */}
              <motion.div
                variants={imageCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="absolute top-0 left-0 w-[55%] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border-color bg-white rounded-2xl p-4 cursor-pointer"
              >
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-primary z-30"></div>
                <Image
                  src="/images/Single Phase Water Level Controller.jpeg"
                  alt="Single Phase Water Level Controller"
                  width={350}
                  height={262}
                  className="w-full rounded-lg object-contain bg-white"
                />
                <div className="mt-2 text-xs font-bold text-text-dark font-display text-center">Single Phase Controller</div>
              </motion.div>

              {/* Three Phase Controller Card */}
              <motion.div
                variants={imageCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="absolute top-28 right-0 w-[52%] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-border-color bg-white rounded-2xl p-4 cursor-pointer"
              >
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary-dark z-30"></div>
                <Image
                  src="/images/Three Phase Water Level Controller.jpeg"
                  alt="Three Phase Water Level Controller"
                  width={350}
                  height={262}
                  className="w-full rounded-lg object-contain bg-white"
                />
                <div className="mt-2 text-xs font-bold text-text-dark font-display text-center">Three Phase Controller</div>
              </motion.div>

              {/* Infographic Card */}
              <motion.div
                variants={imageCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="absolute bottom-4 left-6 w-[55%] z-20 shadow-[0_20px_50px_rgba(91,184,232,0.12)] border-2 border-primary/20 bg-white rounded-2xl p-2 cursor-pointer"
              >
                <Image
                  src="/images/INFORMATIVE.png"
                  alt="Aqua Saver Product Infographic"
                  width={350}
                  height={262}
                  className="w-full rounded-lg object-contain bg-white"
                />
              </motion.div>

              {/* Floating Credential Tag */}
              <motion.div
                variants={imageCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute bottom-20 right-4 z-30 bg-bg-dark text-white rounded-2xl p-4 shadow-xl border border-white/10 flex items-center gap-3 backdrop-blur-md bg-opacity-90 max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Drop size={20} weight="fill" />
                </div>
                <div>
                  <p className="text-[10px] text-text-light font-bold uppercase tracking-wider">Nagpur Partner</p>
                  <p className="text-xs font-bold font-display leading-tight">Mankapur Indoor Stadium Setup</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right - Content */}
          <motion.div 
            className="w-full lg:w-[55%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Eyebrow */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 bg-bg-tint text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-[pulse-led_2s_infinite]"></div>
              <span>About Us</span>
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-dark mb-6 leading-tight"
            >
              Built by Engineers.<br />
              <span className="text-primary-dark">Trusted by Thousands.</span>
            </motion.h2>
            
            {/* Structured Text Blocks */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-base text-text-mid leading-relaxed">
                Aqua Saver Water Solutions was founded with a singular mission: to end the daily frustration of manual water management. Whether you&apos;re worried about your overhead tank overflowing, your borewell pump burning out, or electricity bills climbing — we&apos;ve built the solution.
              </p>
            </motion.div>

            {/* Key Value Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col p-5 rounded-2xl border border-border-color bg-bg-light/40 hover:bg-bg-tint/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cpu size={22} weight="fill" />
                </div>
                <h4 className="font-display font-bold text-text-dark text-base">Smart Control</h4>
                <p className="text-xs text-text-mid mt-2 leading-relaxed">
                  Eliminates tank overflows & dry-runs automatically. Set it and forget it.
                </p>
              </div>

              <div className="flex flex-col p-5 rounded-2xl border border-border-color bg-bg-light/40 hover:bg-bg-tint/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={22} weight="fill" />
                </div>
                <h4 className="font-display font-bold text-text-dark text-base">Indian Grid ready</h4>
                <p className="text-xs text-text-mid mt-2 leading-relaxed">
                  Specially built to survive voltage swings, dry borewells & irregular supplies.
                </p>
              </div>

              <div className="flex flex-col p-5 rounded-2xl border border-border-color bg-bg-light/40 hover:bg-bg-tint/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Buildings size={22} weight="fill" />
                </div>
                <h4 className="font-display font-bold text-text-dark text-base">Proven at Scale</h4>
                <p className="text-xs text-text-mid mt-2 leading-relaxed">
                  Trusted by homeowners, high-rises, farms & the Nagpur Mankapur Stadium.
                </p>
              </div>
            </motion.div>

            {/* Vision Block */}
            <motion.div 
              variants={itemVariants}
              className="relative mt-8 p-6 bg-gradient-to-r from-bg-tint/50 to-white border-l-4 border-primary rounded-r-2xl shadow-sm"
            >
              <span className="absolute right-4 top-4 text-primary/10">
                <Quotes size={48} weight="fill" />
              </span>
              <p className="text-[15px] italic text-text-dark relative z-10 leading-relaxed font-body">
                &quot;To make smart water automation accessible to every Indian home and business — because every drop saved is a step forward.&quot;
              </p>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
