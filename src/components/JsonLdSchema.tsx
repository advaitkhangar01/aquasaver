export default function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aqua Saver Water Solutions",
    description:
      "Automatic water level controllers and pump protection systems for homes, societies, farms and industries. Made in India.",
    url: "https://www.aquasaversolutions.com",
    telephone: "+919850760562",
    email: "contact@aquasaversolutions.com",
    image: "https://www.aquasaversolutions.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room 2, Kushinara Society, 25, Manish Nagar",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      postalCode: "440037",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.0912327,
      longitude: 79.0709486,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "23",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.instagram.com/aquasaver_controller",
      "https://maps.app.goo.gl/CkaDkR4Mpm1c7bDk8",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
