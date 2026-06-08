import { Star } from "@phosphor-icons/react/dist/ssr";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Installed their product about a year ago, it always keeps the tank full and so far I haven't experienced any spillage or the tank being empty or the device working improperly. It's a great product!",
    name: "Yash Sarpotdar",
    city: "Nagpur",
    product: "Water Level Controller",
    initials: "YS",
  },
  {
    id: 2,
    quote: "Earlier I used to forget to switch off the water motor, and water would overflow. Since installing Aqua Saver, that problem is completely gone.",
    name: "Mihir Dhotkar",
    city: "Nagpur",
    product: "Single Phase Controller",
    initials: "MD",
  },
  {
    id: 3,
    quote: "We have an underground and overhead tank setup. Aqua Saver manages both perfectly without manual intervention. 😎",
    name: "Sneha Manke",
    city: "Nagpur",
    product: "Water Level Controller",
    initials: "SM",
  },
  {
    id: 4,
    quote: "Simple, affordable, and very effective, my water bill has also come down after using Aqua Saver.",
    name: "Anuradha Baghele",
    city: "Nagpur",
    product: "Water Level Controller",
    initials: "AB",
    isGuide: true,
  },
  {
    id: 5,
    quote: "Earlier, our kids used to play and forget the motor on. Thanks to Aqua Saver, the system is fully automatic now.",
    name: "The_Vk.___",
    city: "Nagpur",
    product: "Water Level Controller",
    initials: "VK",
  },
  {
    id: 6,
    quote: "Very useful product for preventing water tank overflow. Easy to install, works accurately, and helps save both water and electricity. A great investment for every home.",
    name: "Rugved Motghare",
    city: "Nagpur",
    product: "Water Level Controller",
    initials: "RM",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-mid font-body">
            Real results from 500+ happy customers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-border-color flex flex-col hover:shadow-[0_8px_32px_rgba(91,184,232,0.12)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-1 mb-4 text-warning">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} weight="fill" />
                ))}
              </div>
              
              <p className="text-[15px] italic text-text-mid mb-6 leading-relaxed flex-grow">
                &quot;{t.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-color">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-display font-bold text-sm shadow-md flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-[15px] font-display font-bold text-text-dark flex items-center gap-1.5">
                    {t.name}
                    {t.isGuide && (
                      <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Local Guide</span>
                    )}
                  </h4>
                  <p className="text-[12px] text-text-light mt-0.5">
                    {t.city} • {t.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://maps.app.goo.gl/CkaDkR4Mpm1c7bDk8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-border-color rounded-xl px-6 py-3.5 shadow-sm hover:shadow-md hover:border-primary transition-all duration-200 group"
          >
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="text-left">
              <p className="text-[13px] font-semibold text-text-dark group-hover:text-primary transition-colors">See all 23 reviews on Google</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} weight="fill" className="text-[#FBBC05]" />)}
                <span className="text-[11px] text-text-light ml-1">5.0 rating</span>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
