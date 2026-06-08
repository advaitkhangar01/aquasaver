import Image from "next/image";
import Link from "next/link";
import { CheckCircle, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WA_RECOMMEND, waProduct } from "@/lib/constants";

const PRODUCTS = [
  {
    id: 1,
    name: "Single Phase Water Level Controller",
    badge: "Best for Homes",
    image: "/images/Single Phase Water Level Controller.jpeg",
    description: "Automatically starts your pump when the overhead tank runs low and stops it when full. Includes conductive sensor probes for underground and overhead tanks.",
    features: [
      "OH / OL / UH / UL level detection",
      "Auto & Manual operation modes",
      "Dry run protection",
      "Stop / Start push buttons",
      "Sensor probes included",
    ],
    idealFor: "Homes, Villas, Small Apartments",
  },
  {
    id: 2,
    name: "Three Phase Water Level Controller",
    badge: "Industrial Grade",
    image: "/images/Three Phase Water Level Controller.jpeg",
    description: "Designed for three-phase motors and larger pump installations. Monitors R-Y-C-N phases, detects tank levels, and protects against phase failure.",
    features: [
      "Three phase (R/Y/C/N) monitoring",
      "Overhead + Underground tank control",
      "Phase failure protection",
      "Auto / Manual switch",
      "Conductive sensor capsules included",
    ],
    idealFor: "Large Apartments, Commercial Buildings, Borewell Systems",
  },
  {
    id: 3,
    name: "Automatic Water Level Controller — Heavy Duty",
    badge: "Society & Commercial",
    image: "/images/Automatic-Water-Level-Controller-Heavy-Duty.jpeg",
    description: "A robust controller with dual power supply inputs, relay protection, and water flow monitoring for large residential societies and commercial complexes.",
    features: [
      "Dual 230V supply input/output",
      "Water flow monitoring diagram",
      "Underground + Overhead tank sensors",
      "2BA relay capacity",
      "Sensor ports: OH, OL, UL, UH, C1, C2",
    ],
    idealFor: "Housing Societies, Hotels, Schools, Hospitals",
  },
  {
    id: 4,
    name: "Automatic Liquid Level Controller",
    badge: "Advanced Protection",
    image: "/images/Automatic Liquid Level Controller.jpeg",
    description: "Premium controller with auto/off/bypass switching, dry run indicator, and reset function. Built for critical applications where pump protection is non-negotiable.",
    features: [
      "Auto / Off / Bypass modes",
      "Dry run indicator & protection",
      "Reset function",
      "Tank + Sump monitoring",
      "230V I/O terminals",
    ],
    idealFor: "Industries, Factories, Large Commercial Plants",
  },
  {
    id: 5,
    name: "Digital Timer Controller",
    badge: "Smart Scheduling",
    image: "/images/Digital Timer Controller.jpeg",
    description: "Programmable digital controller with 7-segment display for time-based pump operation. Schedule your pump to run at specific times — ideal for irrigation.",
    features: [
      "Digital 7-segment display",
      "Programmable ON/OFF timer",
      "Stop / Reset / Start / Set buttons",
      "ON/OFF indicator LEDs",
      "Compact DIN-rail compatible design",
    ],
    idealFor: "Irrigation Systems, Scheduled Water Transfer, Agriculture",
  },
  {
    id: 6,
    name: "Digital Motor Starter — 20 Ampere",
    badge: "Complete Motor Protection",
    image: "/images/Digital-Motor-Starter-20-Ampere.jpeg",
    description: "All-in-one digital motor starter with comprehensive protection — overload, underload, high voltage, low voltage, and off-delay timer.",
    features: [
      "20 Ampere capacity",
      "Overload & Underload protection",
      "High & Low voltage protection",
      "Off delay timer",
      "Multicolour status display",
    ],
    idealFor: "Submersible Pumps, Industrial Motors, Agricultural Pumps",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
            A Solution for Every Pump. Every Tank. Every Scale.
          </h2>
          <p className="text-lg text-text-mid max-w-3xl font-body">
            From a single home pump to a multi-pump industrial system — 
            we have the right controller for your requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-border-color rounded-xl p-7 shadow-[0_4px_24px_rgba(91,184,232,0.08)] hover:shadow-[0_12px_36px_rgba(91,184,232,0.16)] hover:border-primary hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full max-w-[200px] aspect-square mx-auto bg-bg-tint rounded-lg p-4 mb-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="200px"
                  className="object-contain p-2"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-text-dark mb-3 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-[15px] text-text-mid mb-6 line-clamp-3 leading-[1.6]">
                {product.description}
              </p>

              <div className="mb-6 flex-grow">
                <ul className="space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle size={18} weight="fill" className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-text-mid leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 bg-bg-light p-3 rounded-lg border border-border-color">
                <span className="block text-[12px] font-semibold text-primary uppercase tracking-wider mb-1">
                  Ideal For:
                </span>
                <span className="text-[14px] text-text-dark font-medium">
                  {product.idealFor}
                </span>
              </div>

              <Link
                href={waProduct(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-[15px] font-semibold text-primary hover:text-primary-dark hover:underline underline-offset-4 group/link"
              >
                Enquire About This Product 
                <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center p-8 bg-white border border-border-color rounded-xl shadow-sm text-center">
          <p className="text-xl font-display font-semibold text-text-dark mb-4">
            Not sure which product is right for you?
          </p>
          <Link
            href={WA_RECOMMEND}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-3.5 rounded-lg font-display font-semibold transition-colors"
          >
            <WhatsappLogo size={22} weight="fill" />
            <span>WhatsApp for a Free Recommendation</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
