export function generateJsonLdService({ name, description, image }) {
    const shortDesc = description.length > 155 ? description.slice(0, 155) + "..." : description;
  
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": name,
      "description": shortDesc,
      "provider": {
        "@type": "BeautySalon",
        "name": "Lady Beauty",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "28 Rue de Kergreis",
          "addressLocality": "Lanester",
          "postalCode": "56600",
          "addressCountry": "FR"
        },
        "telephone": "07 81 58 90 22",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "areaServed": {
          "@type": "Place",
          "name": "Lanester"
        }
      },
      "image": image
    };
  }
  