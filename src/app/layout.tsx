import type { Metadata } from "next";
import { Exo_2, DM_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLdSchema from "@/components/JsonLdSchema";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.aquasaversolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aqua Saver Water Solutions — Smart Water Level Controllers & Pump Protection | Nagpur, India",
  description:
    "Aqua Saver makes automatic water level controllers and pump protection systems for homes, societies, farms and industries. Single phase, three phase, digital controllers. Rated 5.0 ⭐ on Google. Based in Nagpur, ships pan-India.",
  keywords: [
    "water level controller",
    "automatic water level controller",
    "pump protection system",
    "water tank controller",
    "single phase water controller",
    "three phase water controller",
    "digital motor starter",
    "aqua saver nagpur",
    "water automation india",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aqua Saver Water Solutions",
    title: "Aqua Saver — Smart Water Level Controllers & Pump Protection",
    description:
      "Stop overflows. Stop dry-run damage. Aqua Saver's automatic water controllers protect your pump and save water — 500+ happy customers across India.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aqua Saver Water Solutions — Smart Water Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Saver — Smart Water Level Controllers & Pump Protection",
    description:
      "Stop overflows. Stop dry-run damage. Aqua Saver's automatic water controllers protect your pump and save water — 500+ happy customers across India.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} ${dmSans.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-body text-text-dark bg-white overflow-x-hidden pb-16 md:pb-0">
        <JsonLdSchema />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
