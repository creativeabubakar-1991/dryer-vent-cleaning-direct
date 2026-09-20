import { CityData } from "@/types";
import { siteConfig } from "@/config/site.config";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.domain,
    "logo": `${siteConfig.domain}/logos/logo.png`,
    "description": "America's direct network of CDET and CSIA certified dryer vent cleaning, rapid lint removal, and residential fire prevention specialists across all 50 states.",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "areaServed": {
      "@type": "Country",
      "name": "United States",
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Certified Dryer Exhaust Technician (CDET)",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Chimney Safety Institute of America (CSIA)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "National Air Duct Cleaners Association (NADCA)",
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "emergency dispatch",
      "areaServed": "US",
      "availableLanguage": "English",
    },
  };
}

export function generateLocalBusinessSchema(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "FireProtectionService"],
    "@id": `${siteConfig.domain}/dryer-vent-cleaning-${city.slug}/#localbusiness`,
    "name": `${siteConfig.name} - ${city.city}`,
    "image": `${siteConfig.domain}/images/og-image.jpg`,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "url": `${siteConfig.domain}/dryer-vent-cleaning-${city.slug}/`,
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Check, Zelle",
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.headquarters.street,
      "addressLocality": city.city,
      "addressRegion": city.state,
      "postalCode": city.zip_codes[0] || "10001",
      "addressCountry": "US",
    },
    "areaServed": [
      {
        "@type": "City",
        "name": `${city.city}, ${city.state}`,
      },
      ...city.zip_codes.map((zip) => ({
        "@type": "PostalCode",
        "postalCode": zip,
        "addressCountry": "US",
      })),
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "21:00",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Dryer Vent Cleaning & Fire Prevention Services in ${city.city}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Residential Rotary Dryer Vent Cleaning in ${city.city}`,
            "description": `Certified rotary brush and HEPA extraction cleaning for residential dryer vents in ${city.city}, ${city.state}.`,
          },
          "price": "99.00",
          "priceCurrency": "USD",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Rooftop Dryer Vent Cleaning & Damper Service in ${city.city}`,
            "description": `Full roof-access rotary scrub and pest hood cleanout in ${city.city}, ${city.state}.`,
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "179.00",
            "maxPrice": "249.00",
            "priceCurrency": "USD",
          },
        },
      ],
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}
