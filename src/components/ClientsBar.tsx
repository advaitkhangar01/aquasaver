"use client";

import Image from "next/image";

const CLIENTS = [
  {
    name: "Harbans Creations",
    logo: "/images/HARBANS-CREATIONS.png",
  },
  {
    name: "Maxx Builder and Developers",
    logo: "/images/MAXX-BUILDERS-&-DEVELOPERS.webp",
  },
  {
    name: "Meher Infra Solution Pvt. Ltd.",
    logo: "/images/MEHER- INFRA-Solutions.jpeg",
  },
  {
    name: "Sacchidanand Realities Pvt. Ltd.",
    logo: "/images/sacchidanand-Realities.jpeg",
  },
];

// Duplicate for seamless infinite loop
const ALL_CLIENTS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ClientsBar() {
  return (
    <section className="bg-white py-14 border-t border-border-color">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .clients-marquee {
          animation: marquee-scroll 28s linear infinite;
          width: max-content;
        }
        .clients-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
          Trusted By
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-text-dark">
          Builders &amp; Institutions That Rely on Aqua Saver
        </h2>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-10 clients-marquee">
          {ALL_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center bg-bg-light border border-border-color rounded-xl px-8 py-5 shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 group"
              style={{ minWidth: "200px", height: "96px" }}
            >
              <div className="relative w-[140px] h-[56px]">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="140px"
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  title={client.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
