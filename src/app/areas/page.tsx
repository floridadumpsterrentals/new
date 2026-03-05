import Link from "next/link";
import type { Metadata } from "next";
import {
  getNeighborhoodsByRegion,
  getAllNeighborhoods,
  getAllServices,
  getRegions,
} from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAGroup from "@/components/CTAGroup";
import {
  getOrganizationSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
  PHONE,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dumpster Rental Service Areas | Florida Dumpster Rentals",
  description:
    "Dumpster rental delivery across every region in Florida. South Florida, Central Florida, Tampa Bay, North Florida & more. 10, 20 & 30 yard roll-off containers. Call 954-710-2332.",
  keywords: [
    "dumpster rental Florida",
    "dumpster rental near me",
    "roll-off dumpster delivery Florida",
    "South Florida dumpster rental",
    "Central Florida dumpster rental",
    "Tampa dumpster rental",
    "Jacksonville dumpster rental",
    "Miami dumpster rental",
    "Orlando dumpster rental",
    "Fort Lauderdale dumpster rental",
  ],
  openGraph: {
    title: "Dumpster Rental Service Areas | Florida Dumpster Rentals",
    description:
      "Roll-off dumpster delivery across every region in Florida. 10, 20 & 30 yard containers with same-day delivery available.",
    url: `${SITE_URL}/areas`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/areas`,
  },
};

export default function AreasPage() {
  const neighborhoodsByRegion = getNeighborhoodsByRegion();
  const totalNeighborhoods = getAllNeighborhoods().length;
  const allServices = getAllServices();
  const totalServices = allServices.length;
  const totalPages = totalServices * totalNeighborhoods;
  const regions = getRegions();

  const faqItems = [
    {
      q: "What areas do you deliver dumpsters to?",
      a: `We deliver roll-off dumpsters to ${totalNeighborhoods}+ cities, counties, and communities across ${regions.length} Florida regions -- from the Keys to the Panhandle. If you are in Florida, we can get a dumpster to you.`,
    },
    {
      q: "Do you offer same-day dumpster delivery?",
      a: "Yes. Same-day delivery is available in most Florida service areas when you call before noon. Next-day delivery is guaranteed for all orders placed by 5 PM.",
    },
    {
      q: "What dumpster sizes are available in my area?",
      a: "We offer 10, 20, and 30 yard roll-off dumpsters in all service areas. The 10 yard is ideal for small cleanouts, the 20 yard handles most renovations, and the 30 yard is built for large construction projects.",
    },
    {
      q: "How much does a dumpster cost in Florida?",
      a: "Pricing starts at $275 for a 10 yard, $350 for a 20 yard, and $450 for a 30 yard. Every rental includes delivery, pickup, a 7-day rental period, and disposal up to the weight limit. Prices may vary slightly by location.",
    },
    {
      q: "What if my area is not listed?",
      a: "We are constantly expanding our coverage. If you do not see your city or county listed, call us at 954-710-2332. We likely serve your area or can make arrangements for delivery.",
    },
    {
      q: "Can I rent multiple dumpsters at the same location?",
      a: "Yes. Contractors and large projects often need multiple dumpsters on site. We offer volume pricing for multiple containers and can coordinate deliveries and pickups to keep your project on schedule.",
    },
  ];

  const organizationSchema = getOrganizationSchema();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dumpster Rental Across Florida",
    description: `Roll-off dumpster rental delivery across ${totalNeighborhoods}+ areas in Florida. 10, 20 & 30 yard containers for construction, renovation, cleanout & junk removal.`,
    url: `${SITE_URL}/areas`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: regions.map((r) => ({ "@type": "Place", name: r })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Florida Dumpster Rental Service Areas",
    numberOfItems: totalNeighborhoods,
    itemListElement: Object.entries(neighborhoodsByRegion)
      .flatMap(([, neighborhoods]) => neighborhoods)
      .map((n, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: n.name,
        url: `${SITE_URL}/areas/${n.slug}`,
      })),
  };

  const faqSchema = getFAQPageSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
  ]);

  return (
    <div className="text-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Service Areas", url: "/areas" }]} />

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                {totalNeighborhoods} Areas &middot; {regions.length} Regions &middot; Statewide Coverage
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Dumpster Rental Across{" "}
                <span className="text-green-500">All of Florida</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                We deliver 10, 20 &amp; 30 yard roll-off dumpsters to every
                major city, county, and community in Florida. Same-day delivery
                available. Click any area below to see services and pricing for
                your location.
              </p>
              <CTAGroup variant="hero" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-white">{totalNeighborhoods}+</div>
                <div className="mt-1 text-xs text-zinc-400">Areas Served</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-white">{regions.length}</div>
                <div className="mt-1 text-xs text-zinc-400">Regions</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-green-500">3</div>
                <div className="mt-1 text-xs text-zinc-400">Dumpster Sizes</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-green-500">Same Day</div>
                <div className="mt-1 text-xs text-zinc-400">Delivery Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Cards */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {regions.length} Regions. {totalNeighborhoods}+ Areas.{" "}
            <span className="text-green-500">Total Coverage.</span>
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            We cover every major area across Florida. Click any region to jump
            to its full list of service areas.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => {
              const neighborhoods = neighborhoodsByRegion[region] || [];
              const regionSlug = region.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={region}
                  className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={`#${regionSlug}`}
                      className="text-lg font-bold text-white hover:text-green-500"
                    >
                      {region}
                    </Link>
                    <span className="rounded-full bg-green-600/10 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                      {neighborhoods.length}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {neighborhoods.slice(0, 5).map((n) => (
                      <Link
                        key={n.slug}
                        href={`/areas/${n.slug}`}
                        className="rounded bg-zinc-700/50 px-2 py-1 text-xs text-zinc-300 hover:bg-green-600/20 hover:text-white"
                      >
                        {n.name}
                      </Link>
                    ))}
                    {neighborhoods.length > 5 && (
                      <Link
                        href={`#${regionSlug}`}
                        className="rounded bg-zinc-700/50 px-2 py-1 text-xs text-green-500 hover:bg-green-600/20"
                      >
                        +{neighborhoods.length - 5} more
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTAGroup variant="mid" />

      {/* Full Neighborhood Grid */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            All {totalNeighborhoods}+ Service Areas
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            Click any area to see all dumpster rental services available there.
          </p>

          {regions.map((region) => {
            const neighborhoods = neighborhoodsByRegion[region] || [];
            if (neighborhoods.length === 0) return null;
            const regionSlug = region.toLowerCase().replace(/\s+/g, "-");
            return (
              <div key={region} id={regionSlug} className="mt-14 first:mt-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold">{region}</h3>
                  <span className="text-sm text-zinc-500">
                    {neighborhoods.length} areas
                  </span>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {neighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/areas/${n.slug}`}
                      className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-green-600 hover:text-white"
                    >
                      {n.name}
                      <span className="ml-1 text-xs text-zinc-600">
                        ({n.type})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pre-FAQ CTA */}
      <CTAGroup variant="preFaq" />

      {/* FAQ */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Service Area FAQ
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-[#2A2A2A] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Explore More</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/services"
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 transition-colors hover:border-green-600/50"
            >
              <h3 className="font-semibold text-white">All Services</h3>
              <p className="mt-1 text-xs text-zinc-500">
                {totalServices} dumpster rental services
              </p>
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 transition-colors hover:border-green-600/50"
            >
              <h3 className="font-semibold text-white">Pricing</h3>
              <p className="mt-1 text-xs text-zinc-500">
                10, 20 &amp; 30 yard pricing
              </p>
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 transition-colors hover:border-green-600/50"
            >
              <h3 className="font-semibold text-white">Blog</h3>
              <p className="mt-1 text-xs text-zinc-500">
                Guides and tips for your project
              </p>
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 transition-colors hover:border-green-600/50"
            >
              <h3 className="font-semibold text-white">Contact</h3>
              <p className="mt-1 text-xs text-zinc-500">
                Get in touch for a free quote
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </div>
  );
}
