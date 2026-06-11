import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { PHONE, PHONE_DISP, WHATSAPP, EMAIL, ADDRESS_L1, ADDRESS_L2, INSTAGRAM_URL } from "@/lib/constants";

const QUICK_LINKS = [
  { name: "Products", href: "/#products" },
  { name: "Custom Solutions", href: "/custom-solutions" },
  { name: "About", href: "/#about" },
  { name: "Why Choose Us", href: "/#why-us" },
  { name: "Projects", href: "/#projects" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

const PRODUCT_LINKS = [
  { name: "Single Phase Controller", href: "/#products" },
  { name: "Three Phase Controller", href: "/#products" },
  { name: "Digital Controller", href: "/#products" },
  { name: "Motor Starter", href: "/#products" },
  { name: "Liquid Level Controller", href: "/#products" },
  { name: "Timer Switch", href: "/#products" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-darker text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/images/logo.png"
              alt="Aqua Saver Logo"
              width={200}
              height={48}
              className="h-12 w-auto bg-white p-2 rounded-lg"
            />
            <p className="text-text-light text-sm leading-relaxed max-w-xs">
              Smart Water Automation & Pump Protection. Engineered for Indian conditions to save water, protect motors, and lower electricity bills.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Aqua Saver on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-light"
              >
                <InstagramLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-light hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-light hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-text-light text-sm">
                <Phone size={20} className="text-primary flex-shrink-0" weight="fill" />
                <span>
                  <a href={`tel:${PHONE}`} className="hover:text-white transition-colors block">{PHONE_DISP}</a>
                  <a href={`https://wa.me/${WHATSAPP}`} className="hover:text-white transition-colors block">{PHONE_DISP} (WhatsApp)</a>
                </span>
              </li>
              <li className="flex gap-3 text-text-light text-sm">
                <EnvelopeSimple size={20} className="text-primary flex-shrink-0" weight="fill" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3 text-text-light text-sm">
                <MapPin size={20} className="text-primary flex-shrink-0" weight="fill" />
                <span>{ADDRESS_L1}<br />{ADDRESS_L2}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-light text-sm text-center md:text-left">
            © {new Date().getFullYear()} Aqua Saver Water Solutions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-text-light">
            Made in India <span className="text-lg">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
