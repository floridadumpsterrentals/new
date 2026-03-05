import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Broker Service | How Our Hauler Network Works | Florida Dumpster Rentals",
  description:
    "Florida Dumpster Rentals connects customers with vetted local haulers across Florida. Competitive pricing, statewide coverage, reliable service. Call 954-710-2332.",
  alternates: { canonical: `${SITE_URL}/broker-service` },
};

const phonePlain = PHONE.replace(/-/g, "");

export default function BrokerServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Our Model
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How Our Broker Service Works
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Florida Dumpster Rentals connects you with the best local haulers in your
            area. One call, one quote, one point of contact &mdash; backed by a
            statewide network of vetted dumpster providers.
          </p>
          <CTAGroup variant="hero" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            The Broker Model Explained
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-zinc-500">
            We&apos;re not a single hauling company limited to one area. We&apos;re a
            booking and dispatch platform that partners with local haulers across all
            of Florida.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "You Contact Us",
                desc: "Tell us your project type, location, and when you need the dumpster. We handle everything from one phone number: 954-710-2332.",
              },
              {
                step: "2",
                title: "We Match You",
                desc: "We find the best local hauler in your area based on availability, pricing, and proximity. You get the best deal without calling around.",
              },
              {
                step: "3",
                title: "Local Hauler Delivers",
                desc: "A vetted local hauler delivers, services, and picks up your dumpster. You deal with us the entire time — one contact, no confusion.",
              },
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

      {/* Benefits for Customers */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Benefits for Customers
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            Why renting through a broker gives you a better experience than going direct.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Competitive Pricing",
                desc: "We negotiate bulk rates with haulers across the state. You get lower prices than you'd find calling individual companies.",
              },
              {
                title: "Statewide Coverage",
                desc: "From the Panhandle to the Keys, we have hauler partners everywhere. One number covers all of Florida.",
              },
              {
                title: "Vetted Haulers",
                desc: "Every hauler in our network is licensed, insured, and reviewed. We only work with reliable operators who deliver on time.",
              },
              {
                title: "One Point of Contact",
                desc: "No calling around to compare prices. No dealing with multiple companies. Text or call us and we handle everything.",
              },
              {
                title: "Fast Turnaround",
                desc: "Because we have multiple haulers in each area, we can almost always offer same-day or next-day delivery.",
              },
              {
                title: "Price Transparency",
                desc: "One all-inclusive quote. No surprise fees, no hidden charges. What we quote is what you pay.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Customers */}
      <CTABanner
        title="Need a Dumpster? Get a Quote in Minutes."
        subtitle="Text or call us with your project details. We'll match you with the best local hauler at the best price."
      />

      {/* Benefits for Haulers */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Benefits for Haulers
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            Are you a dumpster hauling company? Partner with us to fill your trucks and grow your business.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Consistent Lead Flow",
                desc: "We generate dumpster rental leads across Florida every day. Partner with us and we'll send you orders in your service area.",
              },
              {
                title: "Fill Empty Capacity",
                desc: "Have trucks sitting idle? Our orders help you maximize utilization and keep your fleet working.",
              },
              {
                title: "No Marketing Costs",
                desc: "We handle all the advertising, SEO, and customer acquisition. You focus on what you do best: hauling.",
              },
              {
                title: "Simple Dispatch",
                desc: "We send you the order details. You confirm availability and deliver. No complicated software or systems.",
              },
              {
                title: "Grow Your Territory",
                desc: "We can help you expand into new areas as demand grows. More coverage means more orders for your business.",
              },
              {
                title: "Get Paid Fast",
                desc: "Clear payment terms with reliable, on-time payments. No chasing invoices or dealing with customer collections.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-zinc-900">
              Interested in Joining Our Hauler Network?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-zinc-600">
              We&apos;re always looking for reliable haulers to join our Florida
              network. If you operate roll-off trucks and want more orders, let&apos;s talk.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`tel:${phonePlain}`}
                className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Hauler Partnership Inquiry`}
                className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Email {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">
            Why the Broker Model Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
            The dumpster rental industry is hyper-local. A hauler in Tampa can&apos;t
            serve a customer in Jacksonville. Our broker model solves this.
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                title: "Better Prices Through Volume",
                desc: "We book thousands of dumpsters per year across Florida. That volume gives us leverage to negotiate better rates, which we pass on to customers.",
              },
              {
                title: "Coverage Without Compromise",
                desc: "Instead of one company stretching thin across a huge area, we connect you with a local hauler who knows your area and can deliver fast.",
              },
              {
                title: "Quality Control",
                desc: "We monitor hauler performance, track delivery times, and collect customer feedback. Haulers who don't meet our standards don't stay in the network.",
              },
              {
                title: "Backup Capacity",
                desc: "If your primary hauler is booked, we have backup options in every market. That means fewer delays and more reliable service for customers.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="font-semibold text-green-400">{item.title}</h3>
                <p className="mt-2 text-zinc-400">{item.desc}</p>
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
