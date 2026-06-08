import { ShieldCheck, Lightning, Buildings, ToggleLeft, Package, CurrencyInr } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WA_GENERAL } from "@/lib/constants";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Complete Pump Protection",
    description: "Dry run, overload, underload, phase failure, high/low voltage — your motor is protected from every angle.",
  },
  {
    icon: Lightning,
    title: "Works in Indian Conditions",
    description: "Designed specifically for India's voltage fluctuations, irregular water supply, and borewell environments.",
  },
  {
    icon: Buildings,
    title: "Proven at Scale",
    description: "We've automated water systems for an entire indoor stadium. Whatever your requirement, we can handle it.",
  },
  {
    icon: ToggleLeft,
    title: "Auto + Manual Modes",
    description: "Every product gives you full automatic operation AND manual override — flexibility when you need it most.",
  },
  {
    icon: Package,
    title: "Everything Included",
    description: "Controllers ship with sensor probes and accessories. No running around for additional parts.",
  },
  {
    icon: CurrencyInr,
    title: "Affordable Range",
    description: "Products starting from ₹550 to professional-grade systems — quality protection at every budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-bg-dark py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Thousands of Customers Trust Aqua Saver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon size={28} weight="fill" className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-text-light leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-lg text-text-light font-body">
            Ready to protect your pump and stop wasting water?
          </p>
          <Link
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-3.5 rounded-lg font-display font-semibold transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
          >
            <WhatsappLogo size={22} weight="fill" />
            Chat with Us on WhatsApp
          </Link>
        </div>

      </div>
    </section>
  );
}
