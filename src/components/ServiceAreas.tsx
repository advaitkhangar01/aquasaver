import { MapPin, Truck, Leaf, Buildings } from "@phosphor-icons/react/dist/ssr";

const MAHARASHTRA_HIGHLIGHTS = [
  { icon: "🏙️", label: "Nagpur (HQ)" },
  { icon: "🌆", label: "Pune" },
  { icon: "🌇", label: "Mumbai" },
  { icon: "🏘️", label: "Amravati" },
  { icon: "🏡", label: "Wardha" },
  { icon: "🌾", label: "Yavatmal" },
  { icon: "🏗️", label: "Akola" },
  { icon: "🌊", label: "Gondia" },
];

const SERVICE_TYPES = [
  {
    Icon: MapPin,
    title: "Maharashtra (Primary)",
    desc: "On-site installation, consultation & support throughout Maharashtra.",
  },
  {
    Icon: Truck,
    title: "Pan-India Shipping",
    desc: "All products shipped pan-India with full accessories & wiring guide.",
  },
  {
    Icon: Leaf,
    title: "Agricultural Districts",
    desc: "Specialised solutions for farms, borewells & irrigation pump systems.",
  },
  {
    Icon: Buildings,
    title: "Tier 2 & 3 Cities",
    desc: "Serving smaller cities where quality pump protection is hard to find.",
  },
];

export default function ServiceAreas() {
  return (
    <section className="bg-bg-tint py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block bg-white text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Where We Serve
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-6">
            Serving Customers Across India
          </h2>
          <p className="text-[16px] text-text-mid max-w-2xl font-body leading-relaxed">
            Headquartered in Nagpur, Maharashtra — with pan-India product shipping and 
            large-scale project capabilities anywhere in the country.
          </p>
        </div>

        {/* Service Type Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SERVICE_TYPES.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-color rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Icon size={24} weight="fill" />
              </div>
              <div>
                <h3 className="font-display font-bold text-text-dark text-[16px] mb-1">{title}</h3>
                <p className="text-[13px] text-text-mid leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Maharashtra City Pills */}
        <div className="flex flex-col items-center">
          <p className="text-[13px] font-semibold text-text-light uppercase tracking-widest mb-5">
            Maharashtra Cities We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {MAHARASHTRA_HIGHLIGHTS.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-primary/20 text-text-dark px-4 py-2 rounded-full text-[14px] font-medium shadow-sm hover:border-primary hover:text-primary transition-colors"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-[14px] font-semibold shadow-sm">
              + Many More
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
