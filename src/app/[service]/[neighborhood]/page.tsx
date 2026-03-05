import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllServices,
  getAllNeighborhoods,
  getServiceBySlug,
  getNeighborhoodBySlug,
  getNeighborhoodsByRegion,
  getRelatedServices,
  getCrossCategoryServices,
  getNearbyNeighborhoods,
  getRegions,
} from "@/lib/data";
import {
  getMoneyPageMeta,
  getLocalBusinessSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
  PHONE,
  SITE_URL,
} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAGroup from "@/components/CTAGroup";

interface PageProps {
  params: Promise<{ service: string; neighborhood: string }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const services = getAllServices().slice(0, 5);
  const neighborhoods = getAllNeighborhoods().slice(0, 10);

  return services.flatMap((s) =>
    neighborhoods.map((n) => ({
      service: s.slug,
      neighborhood: n.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug, neighborhood: neighborhoodSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);
  if (!service || !neighborhood) return {};

  const meta = getMoneyPageMeta(service, neighborhood);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function MoneyPage({ params }: PageProps) {
  const { service: serviceSlug, neighborhood: neighborhoodSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);

  if (!service || !neighborhood) notFound();

  const neighborhoodsByRegion = getNeighborhoodsByRegion();
  const regions = getRegions();
  const nearbyNeighborhoods = getNearbyNeighborhoods(neighborhood, 8);
  const relatedServices = getRelatedServices(service, 6);
  const crossCategoryServices = getCrossCategoryServices(service, 4);

  const phonePlain = PHONE.replace(/-/g, "");
  const nameLower = service.name.toLowerCase();
  const location =
    neighborhood.name === neighborhood.region
      ? neighborhood.name
      : `${neighborhood.name}, ${neighborhood.region}`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: service.name, url: `/${service.slug}` },
    { name: neighborhood.name, url: `/${service.slug}/${neighborhood.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocalBusinessSchema(service, neighborhood)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQPageSchema(service.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: service.name, url: `/${service.slug}` },
              {
                name: neighborhood.name,
                url: `/${service.slug}/${neighborhood.slug}`,
              },
            ]}
            dark
          />

          <div className="mt-6">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.name} in {neighborhood.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Affordable {nameLower} dumpster rental in {location}. 10, 20 &amp;
              30 yard roll-off containers with same-day or next-day delivery.
              Call {PHONE} for a free quote.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
              <p className="text-2xl font-bold text-green-500">3</p>
              <p className="mt-1 text-xs text-zinc-500">Dumpster Sizes</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
              <p className="text-2xl font-bold text-green-500">Same Day</p>
              <p className="mt-1 text-xs text-zinc-500">Delivery Available</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
              <p className="text-2xl font-bold text-green-500">7 Days</p>
              <p className="mt-1 text-xs text-zinc-500">Rental Included</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
              <p className="text-2xl font-bold text-green-500">
                {service.priceRange}
              </p>
              <p className="mt-1 text-xs text-zinc-500">Price Range</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`sms:${phonePlain}`}
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
            >
              Text Us for a Quote
            </a>
            <a
              href={`tel:${phonePlain}`}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:border-zinc-500 hover:bg-zinc-900"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Service Details with Sidebar */}
      <section className="bg-[#2A2A2A] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white">
                {service.name} in {neighborhood.name}
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">
                {service.extendedDescription}
              </p>

              {service.recommendedSize && (
                <div className="mt-4 rounded-lg border border-green-600/30 bg-green-600/5 p-4">
                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold text-green-400">
                      Recommended Size for {service.name}:
                    </span>{" "}
                    {service.recommendedSize}
                  </p>
                </div>
              )}

              <h3 className="mt-8 text-lg font-semibold text-white">
                Common Uses
              </h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.commonServices.map((cs) => (
                  <div key={cs} className="flex items-center gap-3">
                    <svg
                      className="h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-zinc-300">{cs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-8 space-y-6">
                <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Get a Free Quote
                  </h3>
                  <p className="mb-4 mt-2 text-sm text-zinc-400">
                    Need a dumpster for your {nameLower} project in{" "}
                    {neighborhood.name}? Text or call for an instant quote.
                  </p>
                  <a
                    href={`sms:${phonePlain}`}
                    className="block w-full rounded-lg bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Text Us for a Quote
                  </a>
                  <div className="mt-3 text-center">
                    <span className="text-xs text-zinc-500">or call </span>
                    <a
                      href={`tel:${phonePlain}`}
                      className="text-xs font-semibold text-green-500 hover:text-white"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {nearbyNeighborhoods.length > 0 && (
                  <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {service.name} Nearby
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {nearbyNeighborhoods.map((n) => (
                        <li key={n.slug}>
                          <Link
                            href={`/${service.slug}/${n.slug}`}
                            className="text-sm text-green-500 hover:text-white"
                          >
                            {service.name} in {n.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Quick Pricing
                  </h3>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">10 Yard</span>
                      <span className="text-sm font-semibold text-white">
                        From $275
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">20 Yard</span>
                      <span className="text-sm font-semibold text-white">
                        From $350
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">30 Yard</span>
                      <span className="text-sm font-semibold text-white">
                        From $450
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/pricing"
                    className="mt-4 block text-center text-sm text-green-500 hover:text-white"
                  >
                    View full pricing &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {service.name} FAQs
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-green-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services in Neighborhood */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {relatedServices.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-white">
                Related Services in {neighborhood.name}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {relatedServices.map((rs) => (
                  <Link
                    key={rs.slug}
                    href={`/${rs.slug}/${neighborhood.slug}`}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 hover:border-green-600/50"
                  >
                    <h3 className="font-medium text-white">{rs.name}</h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      in {neighborhood.name}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}

          {crossCategoryServices.length > 0 && (
            <>
              <h3 className="mt-10 text-xl font-semibold text-white">
                Other Services in {neighborhood.name}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {crossCategoryServices.map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/${cs.slug}/${neighborhood.slug}`}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 hover:border-green-600/50"
                  >
                    <h3 className="font-medium text-white">{cs.name}</h3>
                    <p className="mt-1 text-xs text-zinc-500">{cs.category}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Same Service in Other Neighborhoods */}
      <section className="bg-[#2A2A2A] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            {service.name} in Other Areas
          </h2>
          <p className="mt-2 text-zinc-500">
            We deliver dumpsters for {nameLower} projects across all of Florida.
          </p>

          {regions.map((region) => {
            const neighborhoods = neighborhoodsByRegion[region];
            if (!neighborhoods || neighborhoods.length === 0) return null;
            const filtered = neighborhoods.filter(
              (n) => n.slug !== neighborhood.slug
            );
            if (filtered.length === 0) return null;
            return (
              <div key={region} className="mt-8">
                <h3 className="text-lg font-semibold text-white">
                  {service.name} in {region}
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {filtered.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/${service.slug}/${n.slug}`}
                      className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-zinc-300 hover:border-green-600/50 hover:text-white"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Resource Links */}
      <section className="bg-[#0A0A0A] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-white">
            Helpful Links
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
            >
              Pricing Guide
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
            >
              All Services
            </Link>
            <Link
              href="/areas"
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
            >
              All Areas
            </Link>
            <Link
              href={`/${service.slug}`}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-green-500 hover:text-white"
            >
              All {service.name} Areas
            </Link>
          </div>
        </div>
      </section>

      <CTAGroup variant="final" />
    </>
  );
}
