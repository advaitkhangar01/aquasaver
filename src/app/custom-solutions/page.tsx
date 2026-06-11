import { Metadata } from "next";
import CustomSolutionsClient from "@/components/CustomSolutionsClient";

const siteUrl = "https://www.aquasaversolutions.com";

export const metadata: Metadata = {
  title: "Custom Water Automation & Control Panels — Aqua Saver Nagpur",
  description:
    "Bespoke water level controllers, cyclic multi-pump control panels, automatic booster systems, and custom automation engineering for residential societies, commercial properties, farms, and industrial plants in Nagpur & India.",
  alternates: {
    canonical: `${siteUrl}/custom-solutions`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/custom-solutions`,
    siteName: "Aqua Saver Water Solutions",
    title: "Custom Water Automation & Control Panels — Aqua Saver",
    description:
      "Bespoke cyclic multi-pump panels, automatic booster setups, and custom level controllers engineered for housing societies, hotels, farms, and industrial sites.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aqua Saver Custom Water Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Water Automation & Control Panels — Aqua Saver",
    description:
      "Bespoke cyclic multi-pump panels, automatic booster setups, and custom level controllers engineered for housing societies, hotels, farms, and industrial sites.",
    images: ["/og-image.png"],
  },
};

export default function CustomSolutionsPage() {
  return <CustomSolutionsClient />;
}
