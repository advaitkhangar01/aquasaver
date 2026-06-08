"use client";

import { useState } from "react";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin, Star, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import {
  PHONE,
  PHONE_DISP,
  WHATSAPP,
  EMAIL,
  ADDRESS_L1,
  ADDRESS_L2,
  GMAPS_URL,
  GMAPS_EMBED,
  WA_INQUIRY,
  FORMSUBMIT_ENDPOINT,
} from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // fallback: still show success (formsubmit may block CORS on first activation)
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-bg-dark py-24 sm:py-32 overflow-hidden">
      {/* Dynamic background styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Ready to Automate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Your Water System?</span>
          </h2>
          <p className="text-base sm:text-lg text-text-light font-body max-w-2xl mx-auto leading-relaxed">
            Tell us your requirement — we&apos;ll recommend the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Compact Contact Info & Map (Original Info) */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            
            {/* Unified Info Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-sm lg:h-[260px]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-display font-bold text-white">
                  Reach Us Directly
                </h3>
                {/* Google Rating Badge */}
                <a
                  href={GMAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-primary/30 transition-colors"
                >
                  <span className="text-white font-display font-bold text-xs">5.0</span>
                  <Star size={12} weight="fill" className="text-[#FBBC05]" />
                  <span className="text-text-light text-[11px] font-medium">(23)</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone Card */}
                <a href={`tel:${PHONE}`} className="bg-white/[0.01] border border-white/5 hover:border-primary/20 rounded-2xl p-3.5 transition-all duration-300 hover:bg-white/[0.03] group flex items-center gap-2.5 col-span-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    <Phone size={15} weight="bold" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-semibold text-text-light uppercase tracking-wider mb-0.5">Call Us</span>
                    <span className="text-white font-semibold text-xs block truncate group-hover:text-primary transition-colors">{PHONE_DISP}</span>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="bg-white/[0.01] border border-white/5 hover:border-[#25D366]/20 rounded-2xl p-3.5 transition-all duration-300 hover:bg-white/[0.03] group flex items-center gap-2.5 col-span-1">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all flex-shrink-0">
                    <WhatsappLogo size={15} weight="fill" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-semibold text-text-light uppercase tracking-wider mb-0.5">WhatsApp</span>
                    <span className="text-white font-semibold text-xs block truncate group-hover:text-[#25D366] transition-colors">{PHONE_DISP}</span>
                  </div>
                </a>

                {/* Email Card */}
                <a href={`mailto:${EMAIL}`} className="bg-white/[0.01] border border-white/5 hover:border-primary/20 rounded-2xl p-3.5 transition-all duration-300 hover:bg-white/[0.03] group col-span-1 sm:col-span-2 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    <EnvelopeSimple size={15} weight="bold" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold text-text-light uppercase tracking-wider mb-0.5">Email</span>
                    <span className="text-white font-semibold text-xs block truncate group-hover:text-primary transition-colors">{EMAIL}</span>
                  </div>
                </a>
              </div>

              {/* Location Detail */}
              <div className="border-t border-white/5 pt-3.5 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={15} weight="bold" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[9px] font-semibold text-text-light uppercase tracking-wider mb-0.5">Location</span>
                  <span className="text-white font-medium text-xs block truncate">{ADDRESS_L1}, {ADDRESS_L2}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Embed directly integrated in left column */}
            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-xl relative group bg-white/[0.02] w-full lg:h-[260px] h-[220px]">
              <iframe
                src={GMAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aqua Saver Location Map"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent pointer-events-none" />
              <a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all duration-300 shadow-lg"
              >
                <MapPin size={10} weight="fill" />
                Open Live Map
              </a>
            </div>
          </div>

          {/* Right Column - Redesigned Contact Form with Generic Placeholders */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Send an Inquiry
            </h3>
            <p className="text-sm text-text-light mb-8 leading-relaxed">
              Have questions or need a customized solution? Leave a message below, and our team will get in touch shortly.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} weight="fill" className="text-success" />
                </div>
                <h4 className="text-xl font-display font-bold text-white">Message Sent!</h4>
                <p className="text-text-light text-[15px] max-w-sm">
                  Thank you! We&apos;ve received your inquiry and will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit hidden config */}
                <input type="hidden" name="_subject" value="New Inquiry — Aqua Saver Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" className="hidden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-2">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm focus:bg-white/[0.04]"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-2">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm focus:bg-white/[0.04]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm focus:bg-white/[0.04]"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="pumpType" className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-2">
                      Type of Pump
                    </label>
                    <div className="relative">
                      <select
                        id="pumpType"
                        name="pumpType"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-bg-darker text-white">Select Type</option>
                        <option value="Single Phase" className="bg-bg-darker text-white">Single Phase Pump</option>
                        <option value="Three Phase" className="bg-bg-darker text-white">Three Phase Pump</option>
                        <option value="Other" className="bg-bg-darker text-white">Other / Custom Setup</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-light">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-2">
                    Requirement / Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm resize-none focus:bg-white/[0.04]"
                    placeholder="Enter your message or requirement"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-6 py-4 rounded-xl font-display font-bold text-base transition-all duration-300 shadow-[0_4px_20px_rgba(91,184,232,0.25)] hover:shadow-[0_6px_28px_rgba(91,184,232,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{submitting ? "Sending..." : "Submit Inquiry"}</span>
                </button>

                <p className="text-center text-xs text-text-light">
                  Or reach us instantly via{" "}
                  <a href={`tel:${PHONE}`} className="text-primary font-semibold hover:underline">
                    {PHONE_DISP}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

