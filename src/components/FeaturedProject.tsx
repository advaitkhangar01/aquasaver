"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo, Buildings, Drop, Cpu, Stack, Gear, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { motion, Variants } from "framer-motion";
import { WA_PROJECT } from "@/lib/constants";

const PROJECT_DETAILS = [
  { label: "Project", value: "Sing Saab Restaurant Water Automation", icon: Buildings },
  { label: "Scope", value: "Kitchen + Dining Floors + Storage", icon: Buildings },
  { label: "Wells", value: "2 Sources (Open Well + Borewell)", icon: Drop },
  { label: "Pump House", value: "Dual Pump Automation System", icon: Cpu },
  { label: "Overhead Tanks", value: "First Floor & Kitchen Tanks", icon: Stack },
  { label: "Valves", value: "Solenoid & Non-Return Valve Control", icon: Gear },
];

export default function FeaturedProject() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="relative bg-[#0b1329] text-white py-24 overflow-hidden border-t border-white/5">
      {/* Background radial blue glow behind the SVG section */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-block bg-primary/10 text-primary border border-primary/25 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(91,184,232,0.15)]"
          >
            Case Study
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary leading-tight mb-6"
          >
            Sing Saab Restaurant — Complete Water Automation
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl text-text-light max-w-4xl font-body leading-relaxed"
          >
            When a premier multi-floor restaurant needed a reliable, automated water system across 
            its kitchen and dining areas — they called Aqua Saver.
          </motion.p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left - Schematic Interactive SVG Image (7/12 width) */}
          <motion.div 
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group bg-white/2 backdrop-blur-md rounded-2xl border border-white/10 p-3 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-primary/30 transition-all duration-500">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <Image
                src="/smart_water_tank_control_system.svg"
                alt="Sing Saab Restaurant Water Automation Schematic"
                width={1200}
                height={820}
                className="w-full h-auto object-contain rounded-lg relative z-10 transition-transform duration-500"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm italic text-text-light mt-5 text-center tracking-wide">
              Water Automation System Schematic (Dual-Source &amp; Multi-Tank Configuration)
            </p>
          </motion.div>

          {/* Right - Project Details & Narrative (5/12 width) */}
          <motion.div 
            className="lg:col-span-5 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Tech Details Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {PROJECT_DETAILS.map((detail, idx) => {
                const IconComponent = detail.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white/3 border border-white/5 hover:border-primary/20 rounded-xl p-4 transition-all duration-300 hover:bg-white/5 shadow-sm group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-all">
                        <IconComponent size={18} weight="bold" />
                      </div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                        {detail.label}
                      </span>
                    </div>
                    <span className="text-[14px] text-slate-200 font-semibold leading-snug block pl-1">
                      {detail.value}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Narrative text */}
            <motion.div variants={itemVariants} className="space-y-5 text-[15px] sm:text-[16px] text-slate-300 leading-relaxed mb-8 font-body">
              <p>
                The challenge: distribute water reliably across a busy restaurant complex 
                with separate kitchen and floor requirements, utilizing two independent water sources 
                (an open well and a borewell) — all automatically, without manual intervention.
              </p>
              <p>
                Aqua Saver designed and implemented a complete water automation plan with level 
                sensors across the kitchen and overhead tanks, automatic valve switching, and 
                dry run protection for the submersible pumps.
              </p>
              
              {/* Highlight Result Card */}
              <div className="flex items-start gap-3 bg-success/15 border border-success/30 rounded-xl p-4 text-slate-200 shadow-md">
                <CheckCircle size={22} weight="fill" className="text-success shrink-0 mt-0.5" />
                <p className="font-medium text-[14.5px]">
                  <strong>The result:</strong> Zero manual pump operation, zero overflow incidents, and uninterrupted water supply during peak business hours.
                </p>
              </div>
            </motion.div>

            {/* CTA Link */}
            <motion.div variants={itemVariants}>
              <Link
                href={WA_PROJECT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-display font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(123,59,26,0.25)] hover:shadow-[0_8px_30px_rgba(123,59,26,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsappLogo size={22} weight="fill" className="animate-pulse" />
                <span>Plan a Similar Project</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
