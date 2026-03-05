import type { Service, Neighborhood } from "./data";

const SITE_NAME = "Florida Dumpster Rentals";
const SITE_URL = "https://www.fladumpsterrentals.com";
const PHONE = "954-710-2332";
const EMAIL = "hello@fladumpsterrentals.com";
const ADDRESS = "500 E Broward Blvd Suite #1710, Fort Lauderdale, FL 33394";

export function getMoneyPageMeta(service: Service, neighborhood: Neighborhood) {
  const location = neighborhood.name === neighborhood.region
    ? neighborhood.name
    : `${neighborhood.name}, ${neighborhood.region}`;
  const title = `${service.name} in ${neighborhood.name} | Dumpster Rental`;
  const description = `${service.name} in ${location}. 10, 20 & 30 yard dumpsters available for same-day or next-day delivery. Call ${PHONE} for a free quote.`;

  return {
    title,
    description,
    canonical: `${SITE_URL}/${service.slug}/${neighborhood.slug}`,
  };
}

export function getServiceHubMeta(service: Service) {
  const title = `${service.name} in Florida | ${SITE_NAME}`;
  const description = `${service.name} across Florida. 10, 20 & 30 yard roll-off dumpsters with fast delivery and pickup. Serving every city and county in FL. Call ${PHONE}.`;

  return {
    title,
    description,
    canonical: `${SITE_URL}/${service.slug}`,
  };
}

export function getNeighborhoodHubMeta(neighborhood: Neighborhood) {
  const title = `Dumpster Rental in ${neighborhood.name} | ${SITE_NAME}`;
  const description = `Affordable dumpster rental in ${neighborhood.name}, Florida. 10, 20 & 30 yard roll-off containers for construction, junk removal, cleanouts & more. Call ${PHONE}.`;

  return {
    title,
    description,
    canonical: `${SITE_URL}/areas/${neighborhood.slug}`,
  };
}

export function getLocalBusinessSchema(
  service: Service,
  neighborhood: Neighborhood
) {
  const location = neighborhood.name === neighborhood.region ? neighborhood.name : `${neighborhood.name}, ${neighborhood.region}`;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} — ${service.name}`,
    description: `${service.name} in ${location}. 10, 20 & 30 yard dumpsters with fast delivery.`,
    url: `${SITE_URL}/${service.slug}/${neighborhood.slug}`,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "500 E Broward Blvd Suite #1710",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      postalCode: "33394",
      addressCountry: "US",
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: location,
    },
    serviceType: service.name,
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Options`,
      itemListElement: service.commonServices.map((cs) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cs,
        },
      })),
    },
  };
}

export function getFAQPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "500 E Broward Blvd Suite #1710",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      postalCode: "33394",
      addressCountry: "US",
    },
  };
}

export function serviceToIndustrySlug(service: Service): string {
  return `${service.slug}-dumpster-rental`;
}

export function getIndustryHubMeta(service: Service) {
  const title = `${service.name} | Florida Dumpster Rentals`;
  const description = `${service.name} across Florida. Fast delivery, competitive pricing on 10, 20 & 30 yard roll-off dumpsters. Serving every city and county. Call ${PHONE}.`;

  return {
    title,
    description,
    canonical: `${SITE_URL}/industries/${serviceToIndustrySlug(service)}`,
  };
}

export function getIndustryRegionMeta(service: Service, region: string) {
  const title = `${service.name} in ${region} | Dumpster Rental`;
  const description = `${service.name} in ${region}, Florida. 10, 20 & 30 yard roll-off containers with same-day delivery available. Call ${PHONE} for pricing.`;

  return {
    title,
    description,
    canonical: `${SITE_URL}/industries/${serviceToIndustrySlug(service)}/${region.toLowerCase().replace(/\s+/g, "-")}`,
  };
}

export { SITE_NAME, SITE_URL, PHONE, EMAIL, ADDRESS };
