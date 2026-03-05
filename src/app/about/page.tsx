import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Florida Dumpster Rentals | Fort Lauderdale, FL",
  description:
    "Florida Dumpster Rentals makes dumpster rental simple and affordable across all of Florida. Based in Fort Lauderdale, serving every city and county in the state. Call 954-710-2332.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const phonePlain = PHONE.replace(/-/g, "");

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                About Us
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Dumpster Rental,{" "}
                <span className="text-green-400">Done Right.</span>
              </h1>
              <p className="mt-5 text-lg text-zinc-400">
                Florida Dumpster Rentals is a Fort Lauderdale-based dumpster rental
                service connecting customers across Florida with reliable, affordable
                roll-off containers. We partner with a statewide network of vetted
                local haulers to deliver 10, 20, and 30 yard dumpsters for every
                project &mdash; from garage cleanouts to large-scale construction.
              </p>
              <p className="mt-4 text-lg text-zinc-400">
                One call or text gets you a quote, a delivery date, and a dumpster at
                your door. No runaround, no hidden fees, no hassle.
              </p>
              <CTAGroup variant="hero" />
              <p className="mt-6 text-sm text-zinc-500">{ADDRESS}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <div className="text-3xl font-extrabold text-white">67</div>
                <div className="mt-1 text-sm text-zinc-400">Counties Served</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <div className="text-3xl font-extrabold text-white">3</div>
                <div className="mt-1 text-sm text-zinc-400">Dumpster Sizes</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <div className="text-3xl font-extrabold text-green-400">98%</div>
                <div className="mt-1 text-sm text-zinc-400">On-Time Delivery</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <div className="flex justify-center text-xl text-yellow-400">
                  {"\u2605\u2605\u2605\u2605\u2605"}
                </div>
                <div className="mt-1 text-sm text-zinc-400">4.9 / 5 Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">Our Mission</h2>
          <div className="mt-6 space-y-5 text-lg text-zinc-600 leading-8">
            <p>
              Our mission is simple: make dumpster rental easy and affordable for
              every person and business in Florida. Whether you&apos;re a homeowner
              cleaning out your garage, a contractor managing a job site, or a
              business handling a commercial cleanout &mdash; you deserve fast
              service, fair pricing, and a company that picks up the phone.
            </p>
            <p>
              The dumpster rental industry has a reputation for hidden fees,
              unreliable delivery, and poor communication. We built Florida Dumpster
              Rentals to be the opposite of that. Transparent quotes, on-time
              delivery, and a real person who responds to your texts and calls.
            </p>
            <p>
              We believe you shouldn&apos;t have to call five companies to get a
              straight answer on pricing. You shouldn&apos;t wonder if the dumpster
              will actually show up. And you definitely shouldn&apos;t get hit with
              surprise charges after the fact.
            </p>
          </div>
        </div>
      </section>

      {/* Statewide Coverage */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Statewide Coverage, Local Service
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            Based in Fort Lauderdale, serving all of Florida through our network
            of local hauler partners.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "South Florida",
                desc: "Miami, Fort Lauderdale, West Palm Beach, Boca Raton, Hollywood, Pompano Beach, and all of Miami-Dade, Broward, and Palm Beach counties.",
              },
              {
                title: "Central Florida",
                desc: "Orlando, Tampa, St. Petersburg, Lakeland, Sarasota, Daytona Beach, and the entire I-4 corridor.",
              },
              {
                title: "North Florida",
                desc: "Jacksonville, Tallahassee, Gainesville, Pensacola, Panama City, and everything in between.",
              },
              {
                title: "Southwest Florida",
                desc: "Naples, Fort Myers, Cape Coral, Bonita Springs, and all of Lee, Collier, and Charlotte counties.",
              },
              {
                title: "Space Coast & Treasure Coast",
                desc: "Melbourne, Cocoa Beach, Vero Beach, Port St. Lucie, Stuart, and the entire eastern coastline.",
              },
              {
                title: "Florida Keys",
                desc: "Key West, Key Largo, Marathon, Islamorada, and the entire Keys chain. Yes, we deliver to the Keys.",
              },
            ].map((area) => (
              <div key={area.title} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="font-semibold text-zinc-900">{area.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/areas"
              className="text-sm font-medium text-green-600 hover:text-green-700"
            >
              Browse all service areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTABanner />

      {/* What Sets Us Apart */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            What Sets Us Apart
          </h2>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Transparent, All-Inclusive Pricing",
                desc: "The price we quote is the price you pay. Delivery, pickup, rental period, and disposal are all included. The only extra charge is if you exceed the weight limit, and we'll tell you before billing anything extra.",
              },
              {
                title: "Same-Day and Next-Day Delivery",
                desc: "Because we work with multiple haulers in every market, we can almost always offer same-day or next-day delivery. Most single-hauler companies can't match that availability.",
              },
              {
                title: "Text-First Communication",
                desc: "We know you're busy. Text us your project details, get a quote back in minutes, and schedule delivery without sitting on hold. Of course, you can always call too.",
              },
              {
                title: "Vetted Hauler Network",
                desc: "Every hauler in our network is licensed, insured, and performance-tracked. We monitor on-time delivery rates, customer satisfaction, and service quality. If a hauler doesn't meet our standards, they don't stay in the network.",
              },
              {
                title: "No Long-Term Contracts",
                desc: "Rent a dumpster when you need one. No subscriptions, no commitments, no minimum orders. Contractors who use us regularly get volume pricing, but there's never a lock-in.",
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-zinc-100 pb-8">
                <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">By the Numbers</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "400+", label: "Florida Locations Served" },
              { stat: "3", label: "Dumpster Sizes Available" },
              { stat: "98%", label: "On-Time Delivery Rate" },
              { stat: "4.9", label: "Average Customer Rating" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <div className="text-3xl font-extrabold text-green-400">{item.stat}</div>
                <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
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
