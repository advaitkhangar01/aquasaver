import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WA_PROJECT } from "@/lib/constants";

const PROJECT_DETAILS = [
  { label: "Project", value: "Mankapur Stadium Water Automation" },
  { label: "Scope", value: "Stadium + Old Hostel + New Hostel" },
  { label: "Wells", value: "2 Borewells (Well 1 + Well 2)" },
  { label: "Pump House", value: "Centralized sump with 3 motor pumps" },
  { label: "Overhead Tanks", value: "8 tanks (T1 to T8)" },
  { label: "Valves", value: "4 Motorized, 2 Solenoid, 3 NRVs" },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-white py-20 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Case Study
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
            Mankapur Indoor Stadium — Complete Water Automation
          </h2>
          <p className="text-lg text-text-mid max-w-3xl font-body">
            When a major indoor stadium needed a reliable, automated water system across 
            multiple buildings — they called Aqua Saver.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left - Schematic Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl border-2 border-border-color shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden">
              <Image
                src="/images/stadium-plan.jpeg"
                alt="Mankapur Indoor Stadium Water Automation Schematic"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-[13px] italic text-text-light mt-4 text-center">
              Mankapur Indoor Stadium Water Automation Schematic
            </p>
          </div>

          {/* Right - Project Details */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {PROJECT_DETAILS.map((detail, idx) => (
                <div key={idx} className="bg-bg-tint rounded-lg p-4">
                  <span className="block text-[12px] font-semibold text-primary uppercase tracking-wider mb-1">
                    {detail.label}
                  </span>
                  <span className="text-[15px] text-text-dark font-medium leading-snug block">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-[16px] text-text-mid leading-[1.8] mb-8">
              <p>
                The challenge: distribute water reliably across a large indoor stadium complex 
                with multiple buildings, two independent bore wells, and a central pump house — 
                all automatically, without manual intervention.
              </p>
              <p>
                Aqua Saver designed and implemented a complete water automation plan with level 
                sensors across all 8 overhead tanks, automated pump sequencing, motorized valve 
                control, and dry run protection for all three submersible pumps.
              </p>
              <p className="font-semibold text-text-dark">
                The result: zero manual pump operation, zero overflow incidents, consistent 
                water pressure across the entire complex.
              </p>
            </div>

            <Link
              href={WA_PROJECT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-3.5 rounded-lg font-display font-semibold transition-colors"
            >
              <WhatsappLogo size={22} weight="fill" />
              <span>Plan a Similar Project</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
