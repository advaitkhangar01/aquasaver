"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  WhatsappLogo, 
  Phone, 
  CheckCircle, 
  CaretDown, 
  CaretUp, 
  Buildings, 
  Cpu, 
  Drop, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  User, 
  EnvelopeSimple, 
  MapPin,
  Sparkle
} from "@phosphor-icons/react";
import { WHATSAPP, EMAIL } from "@/lib/constants";

// ─── Capability Areas ────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: Buildings,
    title: "Residential Societies & High-Rises",
    subtitle: "End-to-End Water Transfer Automation",
    description: "Designed for complexes with multi-pump architectures, balancing municipal supplies, sump level thresholds, and multiple overhead tanks.",
    features: [
      "Cyclic pump switching (equal wear & tear)",
      "High/low voltage and dry run trip logic",
      "Automatic booster pump starter panels",
      "Real-time level indicators on panel door",
    ],
    idealFor: "Housing Societies, High-Rise Apartments, Gated Communities",
    color: "from-blue-500/10 to-cyan-500/5 hover:border-blue-400/30",
  },
  {
    icon: Cpu,
    title: "Commercial & Hospitality",
    subtitle: "High-Traffic Demand Management",
    description: "Tailored water management for restaurants, hotels, hospitals, and complexes that require stable water pressure and fail-safe automation.",
    features: [
      "Dual-source automation (Well + Borewell)",
      "Solenoid valve control for selective tank filling",
      "Uninterrupted supply logics for kitchens & dining",
      "Bypass switches for critical override",
    ],
    idealFor: "Restaurants, Hotels, Hospitals, Malls, Offices",
    color: "from-purple-500/10 to-indigo-500/5 hover:border-indigo-400/30",
  },
  {
    icon: Drop,
    title: "Agricultural & Farm Automation",
    subtitle: "Optimized Crop & Irrigation Controls",
    description: "Smart automation panels to regulate water supply, protect submersible pumps from dry runs, and automate schedules.",
    features: [
      "Solar pump controller integration support",
      "Programmable timer-based cyclic irrigation",
      "Soil moisture / sensor-driven triggers",
      "Robust powder-coated weatherproof outdoor panels",
    ],
    idealFor: "Orchards, Farms, Polyhouses, Remote Pump Houses",
    color: "from-emerald-500/10 to-teal-500/5 hover:border-emerald-400/30",
  },
  {
    icon: Wrench,
    title: "Industrial & Process Automation",
    subtitle: "Heavy-Duty Fluid & Level Engineering",
    description: "For factories and chemical plants requiring precise fluid automation, temperature, or high-capacity pump management.",
    features: [
      "High-amp starter panels (up to 50+ HP motors)",
      "Chemical / non-water liquid level sensors",
      "PLC / automation system output dry contacts",
      "Alarm buzzer and emergency stop integrations",
    ],
    idealFor: "Factories, Industrial Plants, Chemical sumps, Food processing",
    color: "from-orange-500/10 to-amber-500/5 hover:border-orange-400/30",
  },
];

// ─── Engineering Process Timeline ───────────────────────────────────────────
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Briefing",
    description: "We discuss your current plumbing, tank capacities, pump horsepowers, and water sources to define the scope.",
  },
  {
    step: "02",
    title: "Site Audit (Free in Nagpur)",
    description: "Our engineering team conducts a physical inspection of your installation site to trace electrical and pipe layouts.",
  },
  {
    step: "03",
    title: "Schematic & Panel Design",
    description: "We engineer a bespoke circuit schematic and select industrial-grade components (relays, contactors, indicators) for your panel.",
  },
  {
    step: "04",
    title: "Precision Assembly & QA",
    description: "The automation panel is wired and assembled in our lab, followed by rigorous testing simulating extreme grid/tank conditions.",
  },
  {
    step: "05",
    title: "Professional Installation",
    description: "Our technicians securely mount the panel, install level sensors, and connect all pump lines, followed by live calibration.",
  },
  {
    step: "06",
    title: "Lifetime Support & Warranty",
    description: "All custom solutions come with a standard warranty, complete wiring diagrams, and direct hotline support.",
  },
];

// ─── Case Studies ───────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    title: "Sing Saab Restaurant, Nagpur",
    badge: "Commercial Water Automation",
    image: "/smart_water_tank_control_system.svg",
    imageType: "schematic",
    problem: "A multi-floor restaurant required automatic water distribution across kitchen tanks, commercial storage, and dining areas. They had two independent water sources (an open well and a deep borewell) and struggled with manual pump monitoring, leading to water overflows and frequent dry runs.",
    solution: "Aqua Saver engineered a custom control panel with level sensors across all tanks and water sources. We integrated solenoid valves to automatically direct water to the specific tank running low, and built a priority switching logic between the open well and borewell.",
    result: "100% automated water distribution. Zero overflows, zero pump dry runs, and uninterrupted water supply during peak business hours.",
  },
];

// ─── Custom FAQs ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: "Do you design custom panels for both single-phase and three-phase pumps?",
    answer: "Yes. We design and build custom automation panels for both single-phase (home, small establishments) and three-phase (commercial, industrial, agricultural) pumps of any horsepower capacity. We can also build panels that manage multiple pumps simultaneously.",
  },
  {
    question: "Can we integrate a custom controller with our existing motor starters?",
    answer: "Absolutely. Our custom controllers are designed with auxiliary contacts that can easily interface with your existing DOL (Direct On-Line) starters, Star-Delta starters, or variable frequency drives (VFDs), adding smart automation without discarding your current switchgear.",
  },
  {
    question: "How long does it take from site audit to final installation?",
    answer: "For standard residential society or commercial setups, the entire cycle (site audit -> schematic approval -> panel wiring -> testing -> installation) takes about 4 to 7 business days. Complex industrial or multi-pump setups may take 7 to 14 days.",
  },
  {
    question: "What is the warranty on custom-engineered automation panels?",
    answer: "All custom solutions engineered by Aqua Saver come with a 1-Year Comprehensive Warranty. The panels use modular, standard industrial-grade components, making maintenance or parts replacement extremely simple and cost-effective in the long run.",
  },
  {
    question: "Do you conduct site visits outside of Nagpur?",
    answer: "For Nagpur and surrounding service areas, physical site audits are completely free. For projects across other parts of India, we conduct detailed video consults and audit checklists. We can wire the panels, ship them pre-configured with detailed wiring maps, and provide full remote video call support for installation.",
  },
];

export default function CustomSolutionsClient() {
  // FAQs State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    facilityType: "Residential Society",
    pumpCount: "1 Pump",
    sources: [] as string[],
    hasOverhead: "Yes",
    description: "",
  });



  const handleSourceChange = (source: string) => {
    setFormData((prev) => {
      const exists = prev.sources.includes(source);
      return {
        ...prev,
        sources: exists 
          ? prev.sources.filter((s) => s !== source)
          : [...prev.sources, source],
      };
    });
  };

  // Generate WhatsApp text
  const generateWhatsAppUrl = () => {
    const text = `Hi Aqua Saver! I am looking for a *Custom Water Automation Solution*. Here are my details:
    
👤 *Name*: ${formData.name || "Not provided"}
📞 *Phone*: ${formData.phone || "Not provided"}
📍 *Location*: ${formData.location || "Not provided"}
🏢 *Facility Type*: ${formData.facilityType}
🔌 *Number of Pumps*: ${formData.pumpCount}
🚰 *Water Sources*: ${formData.sources.join(", ") || "None selected"}
🪣 *Overhead Tanks*: ${formData.hasOverhead}
📝 *Requirements*: ${formData.description || "No specific details provided."}`;

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b1329] text-white py-24 lg:py-32 overflow-hidden border-b border-white/5">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/25 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(91,184,232,0.15)]"
            >
              <Sparkle size={14} weight="fill" className="animate-pulse text-primary" />
              <span>Bespoke Engineering Services</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary leading-tight mb-8"
            >
              Custom Water Automation &amp; Control Panels
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-light font-body leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Struggling with multi-pump coordination, dry borewells, or massive overhead tank systems? 
              We engineer custom, industrial-grade automation solutions for housing societies, commercial properties, farms, and industrial plants.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="#quote-form"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-text-dark font-display font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(91,184,232,0.3)] hover:-translate-y-0.5"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={18} className="ml-2 font-bold" />
              </Link>
              <Link
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-success hover:bg-success/90 text-white font-display font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(34,197,94,0.2)] hover:-translate-y-0.5"
              >
                <WhatsappLogo size={22} weight="fill" />
                <span>WhatsApp Consultation</span>
              </Link>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle size={24} className="text-primary shrink-0" weight="fill" />
                <span className="text-sm font-medium text-slate-200 text-left">Free Site Survey (Nagpur)</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <ShieldCheck size={24} className="text-primary shrink-0" weight="fill" />
                <span className="text-sm font-medium text-slate-200 text-left">1-Year Warranty &amp; Schematic</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <Cpu size={24} className="text-primary shrink-0" weight="fill" />
                <span className="text-sm font-medium text-slate-200 text-left">Industrial Grade Components</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES SECTION ────────────────────────────────────────── */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              Our Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-dark mb-6 max-w-3xl">
              Engineered Solutions for Every Complexity
            </h2>
            <p className="text-lg text-text-mid max-w-3xl font-body leading-relaxed">
              Standard starters aren&apos;t built for complex pipe, pump, and tank networks. 
              We custom-wire electrical panels and logic systems to match your exact water infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`bg-white border border-border-color rounded-2xl p-8 shadow-[0_10px_35px_rgba(91,184,232,0.06)] hover:shadow-[0_20px_50px_rgba(91,184,232,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden`}
                >
                  {/* Decorative background glow */}
                  <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${cap.color} blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15 group-hover:bg-primary group-hover:text-text-dark transition-all duration-300">
                      <IconComponent size={24} weight="bold" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-0.5">{cap.subtitle}</span>
                      <h3 className="text-xl font-display font-bold text-text-dark">{cap.title}</h3>
                    </div>
                  </div>

                  <p className="text-[15px] text-text-mid font-body leading-relaxed mb-6 relative z-10 flex-grow">
                    {cap.description}
                  </p>

                  <div className="bg-bg-light/80 border border-border-color rounded-xl p-5 relative z-10">
                    <span className="block text-[11px] font-extrabold text-primary uppercase tracking-widest mb-3">KEY CONFIGURATION FEATURES</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cap.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle size={16} weight="fill" className="text-success mt-0.5 shrink-0" />
                          <span className="text-[13px] text-text-dark font-medium leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border-color flex justify-between items-center relative z-10">
                    <span className="text-xs text-text-light font-semibold">Ideal for: {cap.idealFor}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── CASE STUDIES SECTION ────────────────────────────────────────── */}
      <section className="py-24 bg-[#0b1329] text-white overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-block bg-primary/10 text-primary border border-primary/25 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(91,184,232,0.15)]">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary mb-6">
              Proven Performance at Real Sites
            </h2>
            <p className="text-lg text-text-light max-w-3xl font-body leading-relaxed">
              We don&apos;t just sell products; we engineer outcomes. Read about how we resolved complex water automation challenges for premier commercial and public locations in Nagpur.
            </p>
          </div>

          <div className="space-y-20">
            {CASE_STUDIES.map((study, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-center`}
                >
                  {/* Left Column - Graphic */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[45%]"
                  >
                    <div className="relative group bg-white/2 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-primary/20 transition-all duration-300">
                      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className={`object-contain ${study.imageType === "schematic" ? "p-3 sm:p-6" : "p-0 object-cover"}`}
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-xs italic text-text-light">
                          {study.imageType === "schematic" 
                            ? "Custom Engineering Logic Blueprint / Schematic" 
                            : "Operational Site Layout Diagram"}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column - Project Text */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[55%] space-y-6"
                  >
                    <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {study.badge}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 text-slate-300 text-[15px] sm:text-[16px] leading-relaxed font-body">
                      <div>
                        <strong className="text-primary text-[14px] uppercase tracking-wider block mb-1">The Challenge:</strong>
                        <p>{study.problem}</p>
                      </div>
                      
                      <div>
                        <strong className="text-primary text-[14px] uppercase tracking-wider block mb-1">Our Engineered Solution:</strong>
                        <p>{study.solution}</p>
                      </div>
                      
                      <div className="flex items-start gap-3 bg-success/10 border border-success/30 rounded-xl p-4 text-slate-200 mt-6 shadow-md">
                        <CheckCircle size={22} weight="fill" className="text-success shrink-0 mt-0.5" />
                        <p className="font-medium text-[14.5px] leading-normal">
                          <strong>The Outcome:</strong> {study.result}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── PROCESS TIMELINE SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-dark mb-6">
              How We Deliver Custom Engineering
            </h2>
            <p className="text-lg text-text-mid max-w-2xl font-body">
              Our structured process ensures that your custom panel is engineered with safety, reliability, and precision at every stage.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-bg-light/50 border border-border-color rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 relative group"
              >
                {/* Connector line for large screen */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 w-8 border-t-2 border-dashed border-primary/25 z-0" />
                )}
                
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <span className="text-4xl font-display font-extrabold text-primary/30 group-hover:text-primary transition-colors duration-300">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>
                <h4 className="text-lg font-display font-bold text-text-dark mb-2 relative z-10 group-hover:text-primary-dark transition-colors">
                  {step.title}
                </h4>
                <p className="text-[14px] text-text-mid leading-relaxed font-body relative z-10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── LEAD GENERATION FORM SECTION ────────────────────────────────── */}
      <section id="quote-form" className="py-24 bg-bg-dark text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary border border-primary/25 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
              Request Your Custom Automation Layout
            </h2>
            <p className="text-[16px] text-text-light font-body max-w-2xl mx-auto leading-relaxed">
              Tell us about your current water issues or pump requirements. Our engineers will audit your details and provide a tailored plan.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <form 
              action={`https://formsubmit.co/${EMAIL}`}
              method="POST" 
              className="space-y-6"
            >
              {/* FormSubmit Configs */}
              <input type="hidden" name="_subject" value="New Custom Solution Inquiry - Aqua Saver" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_honey" className="hidden" />

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-bold text-primary uppercase tracking-widest block">Your Name *</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      id="form-name"
                      name="Name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name" 
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-500 transition-all font-body text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-phone" className="text-xs font-bold text-primary uppercase tracking-widest block">Phone Number *</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="tel" 
                      id="form-phone"
                      name="Phone" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 098507 60562" 
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-500 transition-all font-body text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs font-bold text-primary uppercase tracking-widest block">Email Address (Optional)</label>
                  <div className="relative">
                    <EnvelopeSimple size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="email" 
                      id="form-email"
                      name="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com" 
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-500 transition-all font-body text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-location" className="text-xs font-bold text-primary uppercase tracking-widest block">Location / City *</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      id="form-location"
                      name="Location" 
                      required 
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Manish Nagar, Nagpur" 
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-500 transition-all font-body text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Facility Type & Pump Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="form-facility" className="text-xs font-bold text-primary uppercase tracking-widest block">Facility / Property Type</label>
                  <select 
                    id="form-facility"
                    name="PropertyType"
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full bg-[#162133] border border-white/15 focus:border-primary rounded-xl py-3.5 px-4 text-white transition-all font-body text-sm appearance-none cursor-pointer"
                  >
                    <option value="Residential Society">Residential Society / Apartments</option>
                    <option value="Individual Home">Individual Home / Villa</option>
                    <option value="Commercial Complex">Commercial (Hotel, Mall, Office)</option>
                    <option value="Agricultural Farm">Agricultural / Farm Setup</option>
                    <option value="Industrial Factory">Industrial Plant / Factory</option>
                    <option value="Other">Other Custom Facility</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-pump-count" className="text-xs font-bold text-primary uppercase tracking-widest block">Number of Pumps to Automate</label>
                  <select 
                    id="form-pump-count"
                    name="PumpsCount"
                    value={formData.pumpCount}
                    onChange={(e) => setFormData({ ...formData, pumpCount: e.target.value })}
                    className="w-full bg-[#162133] border border-white/15 focus:border-primary rounded-xl py-3.5 px-4 text-white transition-all font-body text-sm appearance-none cursor-pointer"
                  >
                    <option value="1 Pump">1 Pump</option>
                    <option value="2 Pumps (Cyclic switching)">2 Pumps (Cyclic Switching)</option>
                    <option value="3 Pumps">3 Pumps</option>
                    <option value="4+ Pumps (Industrial system)">4+ Pumps (Industrial System)</option>
                  </select>
                </div>
              </div>

              {/* Water Sources (Checkboxes) */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block">Water Sources (Select all that apply)</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Borewell", val: "Borewell" },
                    { label: "Open Well", val: "OpenWell" },
                    { label: "Municipal Line", val: "Municipal" },
                    { label: "Sump Tank", val: "Sump" },
                  ].map((src) => {
                    const isChecked = formData.sources.includes(src.val);
                    return (
                      <button
                        key={src.val}
                        type="button"
                        onClick={() => handleSourceChange(src.val)}
                        className={`flex items-center justify-center gap-2 border px-4 py-3 rounded-xl font-body text-sm font-semibold transition-all ${
                          isChecked 
                            ? "bg-primary text-text-dark border-primary shadow-[0_0_12px_rgba(91,184,232,0.25)]" 
                            : "bg-white/5 border-white/15 text-slate-300 hover:border-white/30"
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          name="WaterSources[]" 
                          value={src.val} 
                          checked={isChecked}
                          onChange={() => {}} // Controlled by button click
                          className="hidden" 
                        />
                        <span>{src.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details Text Area */}
              <div className="space-y-2">
                <label htmlFor="form-desc" className="text-xs font-bold text-primary uppercase tracking-widest block">Explain your Requirements / Current Setup</label>
                <textarea 
                  id="form-desc"
                  name="RequirementsDescription" 
                  rows={4} 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about tank placements, water availability, motor issues, or the exact automation you wish to achieve..." 
                  className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-4 text-white placeholder-slate-500 transition-all font-body text-sm resize-y"
                />
              </div>

              {/* Submits */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                {/* Submit to WhatsApp */}
                <Link
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white font-display font-bold px-8 py-4 rounded-xl transition-all shadow-[0_8px_24px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
                >
                  <WhatsappLogo size={22} weight="fill" />
                  <span>Send Requirements via WhatsApp</span>
                </Link>

                <div className="w-full sm:w-auto text-center font-display font-medium text-xs text-text-light uppercase tracking-widest px-2">
                  or
                </div>

                {/* Submit to Email */}
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-display font-semibold border border-white/20 hover:border-white/30 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Submit Inquiry via Email</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ─── FAQS SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
              Custom Solutions FAQs
            </h2>
            <p className="text-base text-text-mid font-body">
              Everything you need to know about commissioning a bespoke water level automation setup with Aqua Saver.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-border-color rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-display font-bold text-text-dark hover:text-primary transition-colors focus:outline-none"
                  >
                    <span className="text-[16px] sm:text-lg pr-4">{faq.question}</span>
                    {isOpen ? (
                      <CaretUp size={20} className="text-primary shrink-0" />
                    ) : (
                      <CaretDown size={20} className="text-text-light shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-border-color text-text-mid text-sm sm:text-[15px] leading-relaxed font-body">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white border border-border-color rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-display font-bold text-lg text-text-dark mb-2">Have a question not listed here?</h4>
              <p className="text-sm text-text-mid font-body">Speak directly with our technical founder, Jitendra Uikey.</p>
            </div>
            <Link
              href={`tel:${WHATSAPP}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-text-dark font-display font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              <Phone size={18} weight="fill" />
              <span>Call Technical Support</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
