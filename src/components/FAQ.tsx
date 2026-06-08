"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "What is a water level controller and do I really need one?",
    answer: "A water level controller automatically starts your pump when your tank is low and stops it when it's full. If you've ever had an overflow, a dry-run burnout, or wasted water because you forgot to switch off the pump — yes, you need one. It pays for itself in the first month.",
  },
  {
    question: "What is dry run protection and why is it important?",
    answer: "Dry run happens when your pump runs without water — due to empty underground tank, borewell failure, or supply cut. Running dry even briefly can permanently damage a motor. Aqua Saver controllers detect this and automatically shut down the pump before any damage occurs.",
  },
  {
    question: "I have a three-phase motor. Do you have a product for me?",
    answer: "Yes. Our Three Phase Water Level Controller is specifically designed for three-phase motors with R/Y/C/N phase monitoring, phase failure protection, and full level control functionality.",
  },
  {
    question: "Can I still operate the pump manually if needed?",
    answer: "Absolutely. Every Aqua Saver product includes an Auto/Manual switch. You have full manual override at all times. The automatic mode is just the default for daily operation.",
  },
  {
    question: "My building has both an underground sump and an overhead tank. Will this work?",
    answer: "Yes — most of our controllers monitor both tanks simultaneously. The pump starts when the overhead tank is low (and the sump has water) and stops when the overhead tank is full or the sump runs dry.",
  },
  {
    question: "What is included in the box?",
    answer: "The controller unit is shipped with conductive sensor probes/capsules, wiring accessories, and installation instructions. The Digital Motor Starter includes all protection circuitry built in.",
  },
  {
    question: "Do you handle large commercial or industrial projects?",
    answer: "Yes. We have designed and implemented complete water automation systems for large-scale projects including the Mankapur Indoor Stadium. Contact us with your requirements for a custom solution.",
  },
  {
    question: "How do I install the controller?",
    answer: "Installation is straightforward for a qualified electrician. Most residential controllers are installed within 30–45 minutes. We provide wiring diagrams and are available on WhatsApp for guidance during installation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
            Got Questions? We Have Answers.
          </h2>
        </div>

        <div className="space-y-0 border-t border-border-color">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-border-color">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <h3 className="text-[17px] font-display font-semibold text-text-dark pr-8 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-primary">
                    {isOpen ? (
                      <Minus size={24} weight="bold" />
                    ) : (
                      <Plus size={24} weight="bold" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] text-text-mid leading-[1.7] pb-6 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
