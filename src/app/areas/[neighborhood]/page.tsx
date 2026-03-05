import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllNeighborhoods,
  getAllServices,
  getNeighborhoodBySlug,
  getServicesByCategory,
  getNearbyNeighborhoods,
  getOtherRegionNeighborhoods,
  getCategories,
} from "@/lib/data";
import {
  getNeighborhoodHubMeta,
  getOrganizationSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
  PHONE,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAGroup from "@/components/CTAGroup";

interface PageProps {
  params: Promise<{ neighborhood: string }>;
}

export async function generateStaticParams() {
  return getAllNeighborhoods().map((n) => ({ neighborhood: n.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { neighborhood: slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return {};

  const meta = getNeighborhoodHubMeta(neighborhood);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
    },
  };
}

export default async function NeighborhoodHubPage({ params }: PageProps) {
  const { neighborhood: slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) notFound();

  const allServices = getAllServices();
  const servicesByCategory = getServicesByCategory();
  const categories = getCategories();
  const nearbyNeighborhoods = getNearbyNeighborhoods(neighborhood, 12);
  const otherRegionNeighborhoods = getOtherRegionNeighborhoods(neighborhood, 7);
  const totalServices = allServices.length;
  const totalNeighborhoods = getAllNeighborhoods().length;

  const location =
    neighborhood.name === neighborhood.region
      ? neighborhood.name
      : `${neighborhood.name}, ${neighborhood.region}`;

  const phonePlain = PHONE.replace(/-/g, "");

  const faqItems = [
    {
      q: `How much does dumpster rental cost in ${neighborhood.name}?`,
      a: `Dumpster rental in ${neighborhood.name} starts at $275 for a 10 yard, $350 for a 20 yard, and $450 for a 30 yard. Every rental includes delivery, pickup, a 7-day rental period, and disposal up to the weight limit.`,
    },
    {
      q: `Do you offer same-day dumpster delivery in ${neighborhood.name}?`,
      a: `Yes. Same-day delivery is available in ${neighborhood.name} when you call before noon. Next-day delivery is guaranteed for all orders placed by 5 PM.`,
    },
    {
      q: `What size dumpster do I need for my project in ${neighborhood.name}?`,
      a: "For small cleanouts and garage declutters, a 10 yard is perfect. Kitchen and bathroom remodels typically need a 20 yard. Large construction or whole-home renovations call for a 30 yard. Text us your project details and we will recommend the right size.",
    },
    {
      q: "How long can I keep the dumpster?",
      a: "Every rental includes a 7-day rental period. If you need more time, extra days are available at $15-$25/day depending on the dumpster size. Just call us to extend.",
    },
    {
      q: `What can I put in a dumpster in ${neighborhood.name}?`,
      a: "Most household and construction debris is accepted: furniture, appliances, drywall, roofing, lumber, concrete, yard waste, and general junk. Hazardous materials, tires, batteries, and freon-containing appliances require special handling. Call for details.",
    },
    {
      q: `Do you serve areas near ${neighborhood.name}?`,
      a: `Yes. We deliver dumpsters throughout ${neighborhood.region} and across all of Florida. We serve ${totalNeighborhoods}+ areas statewide.`,
    },
  ];

  const organizationSchema = getOrganizationSchema();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} - ${neighborhood.name}`,
    description: `Dumpster rental service in ${location}. 10, 20 & 30 yard roll-off containers for construction, renovation, cleanouts & junk removal.`,
    url: `${SITE_URL}/areas/${neighborhood.slug}`,
    telephone: PHONE,
    areaServed: {
      "@type": "Place",
      name: location,
    },
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
    {
      name: neighborhood.region,
      url: `/areas#${neighborhood.region.toLowerCase().replace(/\s+/g, "-")}`,
    },
    { name: neighborhood.name, url: `/areas/${neighborhood.slug}` },
  ]);

  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <div className="text-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Service Areas", url: "/areas" },
              {
                name: neighborhood.region,
                url: `/areas#${neighborhood.region.toLowerCase().replace(/\s+/g, "-")}`,
              },
              { name: neighborhood.name, url: `/areas/${neighborhood.slug}` },
            ]}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                {totalServices} Services &middot; {neighborhood.region} &middot;
                Same-Day Delivery
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Dumpster Rental in{" "}
                <span className="text-green-500">{neighborhood.name}</span>
                {neighborhood.name !== neighborhood.region && (
                  <span className="block text-2xl font-bold text-zinc-400 sm:text-3xl">
                    {neighborhood.region}
                  </span>
                )}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Affordable roll-off dumpster rental in {neighborhood.name}. 10,
                20 &amp; 30 yard containers for construction, renovation,
                cleanouts, junk removal, and more. Same-day delivery available.
              </p>
              <CTAGroup variant="hero" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-green-500">3</div>
                <div className="mt-1 text-xs text-zinc-400">Dumpster Sizes</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-green-500">
                  {nearbyNeighborhoods.length}+
                </div>
                <div className="mt-1 text-xs text-zinc-400">Nearby Areas</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-white">
                  $275
                </div>
                <div className="mt-1 text-xs text-zinc-400">Starting Price</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                <div className="text-3xl font-extrabold text-green-500">
                  {totalServices}
                </div>
                <div className="mt-1 text-xs text-zinc-400">Service Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid by Category */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Dumpster Rental Services in{" "}
            <span className="text-green-500">{neighborhood.name}</span>
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            {totalServices} service types across {categories.length} categories.
            Each links to a dedicated page for {neighborhood.name} with pricing
            and details.
          </p>

          {categories.map((category) => {
            const services = servicesByCategory[category] || [];
            if (services.length === 0) return null;
            return (
              <div key={category} className="mt-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {category}
                  </h3>
                  <span className="text-sm text-zinc-500">
                    {services.length} services
                  </span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}/${neighborhood.slug}`}
                      className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-green-600 hover:text-white"
                    >
                      {service.name}
                      <span className="ml-1 text-xs text-zinc-600">
                        in {neighborhood.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Quick Look */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Dumpster Pricing in {neighborhood.name}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
              <p className="text-sm font-semibold text-green-500">10 Yard</p>
              <p className="mt-2 text-3xl font-extrabold text-white">$275</p>
              <p className="mt-1 text-xs text-zinc-500">starting price</p>
              <p className="mt-3 text-sm text-zinc-400">
                Small cleanouts, garage declutters, yard debris
              </p>
            </div>
            <div className="rounded-xl border-2 border-green-600 bg-zinc-900/50 p-6 text-center">
              <p className="text-sm font-semibold text-green-500">
                20 Yard - Most Popular
              </p>
              <p className="mt-2 text-3xl font-extrabold text-white">$350</p>
              <p className="mt-1 text-xs text-zinc-500">starting price</p>
              <p className="mt-3 text-sm text-zinc-400">
                Renovations, roofing, construction debris
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
              <p className="text-sm font-semibold text-green-500">30 Yard</p>
              <p className="mt-2 text-3xl font-extrabold text-white">$450</p>
              <p className="mt-1 text-xs text-zinc-500">starting price</p>
              <p className="mt-3 text-sm text-zinc-400">
                Large construction, commercial cleanouts
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              View Full Pricing Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTAGroup variant="mid" />

      {/* Nearby Neighborhoods */}
      {nearbyNeighborhoods.length > 0 && (
        <section className="bg-[#0A0A0A] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Nearby {neighborhood.region} Areas
            </h2>
            <p className="mt-3 text-zinc-400">
              We also deliver dumpsters to these nearby areas.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {nearbyNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-green-600 hover:text-white"
                >
                  {n.name}
                  <span className="ml-1 text-xs text-zinc-600">({n.type})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-FAQ CTA */}
      <CTAGroup variant="preFaq" />

      {/* FAQ */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Dumpster Rental FAQ for {neighborhood.name}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6"
              >
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Regions */}
      {otherRegionNeighborhoods.length > 0 && (
        <section className="bg-[#0A0A0A] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Dumpster Rental in Other Regions
            </h2>
            <p className="mt-2 text-zinc-500">
              We deliver dumpsters to {totalNeighborhoods}+ areas across all of
              Florida.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {otherRegionNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-green-600 hover:text-white"
                >
                  {n.name}
                  <span className="ml-1 text-xs text-zinc-600">{n.region}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/areas"
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
              >
                All {totalNeighborhoods}+ Areas
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
              >
                All Services
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
              >
                Pricing
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </div>
  );
}
