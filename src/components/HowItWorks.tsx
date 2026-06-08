import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WA_GENERAL } from "@/lib/constants";

const STEPS = [
  {
    num: "1",
    title: "Share Your Requirement",
    body: "Tell us about your pump type, tank setup, and building size via call or WhatsApp.",
  },
  {
    num: "2",
    title: "We Recommend the Right Product",
    body: "Our team analyzes your setup and recommends the exact controller for your needs.",
  },
  {
    num: "3",
    title: "Fast Delivery",
    body: "Your product ships quickly with complete accessories and wiring diagram.",
  },
  {
    num: "4",
    title: "Easy Installation",
    body: "Our products come with clear instructions. Most electricians can install within 30 minutes.",
  },
  {
    num: "5",
    title: "Set & Forget",
    body: "Your pump runs automatically. No more manual switching, no more overflows, no more dry run damage.",
  },
  {
    num: "6",
    title: "We're Always Here",
    body: "Reach us anytime on WhatsApp or phone for support or replacement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-tint py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-white text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
            From Inquiry to Installation — We Make It Simple
          </h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-12 mb-8">
          {/* Connecting line */}
          <div className="absolute top-[20px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-primary/40 -z-10"></div>
          
          <div className="grid grid-cols-6 gap-4">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                <div className="w-10 h-10 bg-primary text-white font-display font-bold text-lg rounded-full flex items-center justify-center shadow-md mb-6 relative z-10">
                  {step.num}
                </div>
                <div className="text-center px-2">
                  <h3 className="text-[17px] font-display font-bold text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-text-mid leading-[1.6]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative ml-4 md:ml-8 space-y-8">
          {/* Vertical line */}
          <div className="absolute top-4 bottom-0 left-[19px] w-[2px] border-l-2 border-dashed border-primary/40 -z-10"></div>

          {STEPS.map((step, idx) => (
            <div key={idx} className="flex gap-6 relative">
              <div className="w-10 h-10 bg-primary text-white font-display font-bold text-lg rounded-full flex items-center justify-center shadow-md flex-shrink-0 relative z-10">
                {step.num}
              </div>
              <div className="pb-4">
                <h3 className="text-[17px] font-display font-bold text-text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-text-mid leading-[1.6]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-[16px] text-text-mid font-body">
            Start your journey in under 2 minutes
          </p>
          <Link
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-display font-semibold transition-all shadow-[0_4px_16px_rgba(91,184,232,0.35)] hover:shadow-[0_6px_24px_rgba(91,184,232,0.5)] hover:-translate-y-0.5"
          >
            <WhatsappLogo size={22} weight="fill" />
            Start with a Free WhatsApp Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
