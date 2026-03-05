import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_NAME, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import { getAllServices, getAllNeighborhoods, getRegions, getNeighborhoodsByRegion } from "@/lib/data";
import { getFAQPageSchema } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";

export const metadata: Metadata = {
  title: "Florida Dumpster Rentals | 10, 20 & 30 Yard Roll-Off Dumpsters",
  description:
    "Affordable dumpster rental across Florida. 10, 20 & 30 yard roll-off containers for construction, junk removal, home cleanouts & more. Same-day delivery. Call 954-710-2332.",
  alternates: { canonical: SITE_URL },
};

const faqs = [
  { q: "What size dumpster do I need?", a: "For small cleanouts and garage cleanups, a 10-yard dumpster is usually enough. For renovation projects, roofing, and larger cleanouts, a 20-yard is most popular. For construction, demolition, and large commercial projects, go with a 30-yard." },
  { q: "How much does a dumpster rental cost in Florida?", a: "Pricing depends on size, location, and rental duration. 10-yard dumpsters start around $275-$350, 20-yard from $350-$450, and 30-yard from $450-$600. Call us at 954-710-2332 for an exact quote." },
  { q: "How long can I keep the dumpster?", a: "Standard rental periods are 7-10 days. Need it longer? No problem — just let us know and we can extend your rental at a daily rate." },
  { q: "Do you offer same-day delivery?", a: "Yes! We offer same-day and next-day delivery across most of Florida. Text or call us by noon for same-day delivery." },
  { q: "What can I put in a dumpster?", a: "Most household and construction debris is accepted: furniture, appliances, drywall, roofing shingles, wood, concrete, yard waste, and general junk. Hazardous materials, tires, batteries, and paint are not accepted." },
  { q: "Do I need a permit for a dumpster?", a: "If the dumpster is placed on your private property (driveway, yard), no permit is needed. If it needs to go on a public street or right-of-way, you may need a permit from your local municipality. We can help guide you." },
  { q: "What areas in Florida do you serve?", a: "We serve the entire state of Florida — from Miami to Jacksonville, Tampa to the Panhandle, and everywhere in between. Every city, county, and community in FL." },
  { q: "How does ordering work?", a: "It's simple: text or call us with your project details, we give you a quote, and schedule delivery. We drop off the dumpster, you fill it up, and we pick it up when you're done." },
  { q: "Do you offer contractor and corporate accounts?", a: "Yes! We offer volume pricing for contractors, builders, property managers, and businesses with recurring dumpster needs. Contact us to set up an account." },
  { q: "What is your broker service?", a: "We connect customers with the best local haulers across Florida, ensuring competitive pricing and reliable service no matter where you are in the state." },
];

export default function Home() {
  const services = getAllServices();
  const neighborhoods = getAllNeighborhoods();
  const regions = getRegions();
  const byRegion = getNeighborhoodsByRegion();
  const phonePlain = PHONE.replace(/-/g, "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
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
            areaServed: {
              "@type": "State",
              name: "Florida",
            },
            priceRange: "$275 - $600",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "312",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="bg-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Serving All of Florida
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dumpster Rental<br />
            <span className="text-green-400">Made Simple.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            10, 20 &amp; 30 yard roll-off dumpsters delivered across Florida.
            Contractors, homeowners, businesses — fast delivery, fair pricing, no
            hidden fees.
          </p>
          <CTAGroup variant="hero" />
          <p className="mt-6 text-sm text-zinc-500">
            {ADDRESS}
          </p>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Choose Your Dumpster Size
          </h2>
          <p className="mt-3 text-center text-lg text-zinc-500">
            Not sure which size? Text us your project details and we&apos;ll recommend the right one.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                size: "10",
                label: "10 Yard Dumpster",
                dimensions: '12\' L x 8\' W x 3.5\' H',
                capacity: "4 pickup truck loads",
                bestFor: "Small cleanouts, garage cleanups, small bathroom or kitchen remodels",
                price: "Starting at $275",
              },
              {
                size: "20",
                label: "20 Yard Dumpster",
                dimensions: '22\' L x 8\' W x 4.5\' H',
                capacity: "8 pickup truck loads",
                bestFor: "Renovations, roofing, large cleanouts, deck removal, flooring projects",
                price: "Starting at $350",
                popular: true,
              },
              {
                size: "30",
                label: "30 Yard Dumpster",
                dimensions: '22\' L x 8\' W x 6\' H',
                capacity: "12 pickup truck loads",
                bestFor: "New construction, demolition, large commercial projects, whole-house cleanouts",
                price: "Starting at $450",
              },
            ].map((d) => (
              <div
                key={d.size}
                className={`relative rounded-2xl border p-8 ${
                  d.popular
                    ? "border-green-600 shadow-lg shadow-green-100"
                    : "border-zinc-200"
                }`}
              >
                {d.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <span className="text-5xl font-bold text-green-600">{d.size}</span>
                  <span className="ml-1 text-lg font-medium text-zinc-500">yard</span>
                </div>
                <h3 className="mt-4 text-center text-xl font-bold text-zinc-900">{d.label}</h3>
                <p className="mt-1 text-center text-sm text-zinc-500">{d.dimensions}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">&#10003;</span>
                    <span className="text-sm text-zinc-700">{d.capacity}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">&#10003;</span>
                    <span className="text-sm text-zinc-700">{d.bestFor}</span>
                  </div>
                </div>
                <p className="mt-6 text-center text-lg font-bold text-zinc-900">{d.price}</p>
                <a
                  href={`sms:${phonePlain}?body=I'm interested in a ${d.size} yard dumpster`}
                  className="mt-4 block w-full rounded-lg bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
                >
                  Text for a Quote
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/dumpster-sizes" className="text-sm font-medium text-green-600 hover:text-green-700">
              View detailed size guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Text or Call", desc: "Tell us your project type, location, and when you need the dumpster. We'll give you an instant quote." },
              { step: "2", title: "We Deliver", desc: "We drop off the dumpster at your location — same-day or next-day delivery available across Florida." },
              { step: "3", title: "We Pick Up", desc: "When you're done filling it, text or call us. We pick it up and haul everything away. Done." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900">{s.title}</h3>
                <p className="mt-2 text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTAGroup variant="mid" />

      {/* Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Dumpster Rental for Every Project
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            {services.length} service applications across {neighborhoods.length}+ Florida locations.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 12).map((svc) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className="group rounded-xl border border-zinc-200 p-5 hover:border-green-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900 group-hover:text-green-600">
                  {svc.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 line-clamp-2">
                  {svc.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                  <span>{svc.priceRange}</span>
                  <span>Recommended: {svc.recommendedSize}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-medium text-green-600 hover:text-green-700">
              View all {services.length} services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            We Serve All of Florida
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            {neighborhoods.length}+ cities, communities, and counties across {regions.length} regions.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link
                key={region}
                href={`/areas#${region.toLowerCase().replace(/\s+/g, "-")}`}
                className="group rounded-xl border border-zinc-200 bg-white p-5 hover:border-green-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900 group-hover:text-green-600">
                  {region}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {byRegion[region]?.length || 0} locations
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/areas" className="text-sm font-medium text-green-600 hover:text-green-700">
              Browse all locations &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pre-FAQ CTA */}
      <CTAGroup variant="preFaq" />

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-zinc-100 pb-6">
                <h3 className="text-lg font-semibold text-zinc-900">{faq.q}</h3>
                <p className="mt-2 text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </>
  );
}
