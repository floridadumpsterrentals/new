import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAGroup from "@/components/CTAGroup";
import { PHONE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dumpster Rental Pricing Florida | Florida Dumpster Rentals",
  description:
    "Transparent dumpster rental pricing in Florida. 10, 20 & 30 yard roll-off containers starting at $275. Delivery, pickup & 7-day rental included. Call 954-710-2332.",
  keywords: [
    "dumpster rental pricing Florida",
    "roll-off dumpster cost",
    "10 yard dumpster price",
    "20 yard dumpster price",
    "30 yard dumpster price",
    "cheap dumpster rental Florida",
    "dumpster rental cost near me",
    "affordable dumpster rental",
    "construction dumpster pricing",
    "junk removal dumpster cost",
  ],
  openGraph: {
    title: "Dumpster Rental Pricing Florida | Florida Dumpster Rentals",
    description:
      "Transparent dumpster rental pricing. 10, 20 & 30 yard roll-off dumpsters starting at $275. Free delivery, pickup & 7-day rental included.",
    url: `${SITE_URL}/pricing`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const faqs = [
  {
    q: "What is the cheapest dumpster I can rent?",
    a: "Our 10 yard dumpster starts at $275 and is perfect for small cleanouts, garage declutters, and single-room renovations. It includes delivery, pickup, and a 7-day rental period.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Your quoted price includes delivery, pickup, a 7-day rental period, and disposal up to the weight limit for your dumpster size. The only additional charges are for going over the weight limit, keeping the dumpster past 7 days, or disposing of prohibited materials.",
  },
  {
    q: "How long can I keep the dumpster?",
    a: "Every rental includes a standard 7-day rental period. Need it longer? Extra days are $15/day for 10 yard, $20/day for 20 yard, and $25/day for 30 yard dumpsters.",
  },
  {
    q: "Do you offer same-day delivery?",
    a: "Yes, same-day delivery is available in most Florida service areas when you call before noon. Next-day delivery is guaranteed for all orders placed by 5 PM.",
  },
  {
    q: "What happens if I go over the weight limit?",
    a: "Overage fees are $40-$60 per additional ton depending on your dumpster size. We will always communicate any overage charges before billing. Most residential projects stay well within the included weight allowance.",
  },
  {
    q: "Do you offer discounts for contractors?",
    a: "Yes. We offer volume pricing for contractors and repeat customers. If you need regular dumpster service or multiple containers on the same job, call us at 954-710-2332 for contractor rates.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and cash. Payment is due at the time of delivery. Contractors with established accounts can arrange net-30 billing.",
  },
  {
    q: "Can I change my dumpster size after ordering?",
    a: "Yes. If you realize you need a bigger or smaller dumpster, call us and we will swap it out. We would rather you have the right size than pay for a dumpster that does not fit your project.",
  },
];

const phonePlain = PHONE.replace(/-/g, "");

export default function PricingPage() {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Pricing", url: "/pricing" }]} />

          <div className="mt-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
              Simple, Transparent Pricing
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Dumpster Rental Pricing
              <br />
              <span className="text-green-500">No Hidden Fees. Ever.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Every price includes delivery, pickup, a 7-day rental period, and
              disposal up to the weight limit. Pick your size, schedule your
              drop-off, and we handle the rest.
            </p>
            <CTAGroup variant="hero" />
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Choose Your Dumpster Size
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
            All prices include delivery, pickup, 7-day rental, and disposal up
            to the listed weight limit.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* 10 Yard */}
            <div className="rounded-2xl border border-zinc-700 bg-[#141414] p-8">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                  10 Yard
                </p>
                <p className="mt-4 text-5xl font-extrabold text-white">
                  $275
                </p>
                <p className="mt-1 text-sm text-zinc-500">starting price</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  10 cubic yards capacity
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Fits 3-4 pickup truck loads
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Up to 2 tons included
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  7-day rental included
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Free delivery &amp; pickup
                </li>
              </ul>
              <p className="mt-6 text-xs text-zinc-500">
                Best for: garage cleanouts, small renovations, yard debris
              </p>
              <a
                href={`tel:${phonePlain}`}
                className="mt-6 block w-full rounded-lg bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
              >
                Order 10 Yard - Call {PHONE}
              </a>
            </div>

            {/* 20 Yard */}
            <div className="relative rounded-2xl border-2 border-green-600 bg-[#141414] p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-bold text-white">
                Most Popular
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                  20 Yard
                </p>
                <p className="mt-4 text-5xl font-extrabold text-white">
                  $350
                </p>
                <p className="mt-1 text-sm text-zinc-500">starting price</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  20 cubic yards capacity
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Fits 6-8 pickup truck loads
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Up to 4 tons included
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  7-day rental included
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Free delivery &amp; pickup
                </li>
              </ul>
              <p className="mt-6 text-xs text-zinc-500">
                Best for: kitchen/bath remodels, roof tear-offs, construction
                debris
              </p>
              <a
                href={`tel:${phonePlain}`}
                className="mt-6 block w-full rounded-lg bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
              >
                Order 20 Yard - Call {PHONE}
              </a>
            </div>

            {/* 30 Yard */}
            <div className="rounded-2xl border border-zinc-700 bg-[#141414] p-8">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                  30 Yard
                </p>
                <p className="mt-4 text-5xl font-extrabold text-white">
                  $450
                </p>
                <p className="mt-1 text-sm text-zinc-500">starting price</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  30 cubic yards capacity
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Fits 9-12 pickup truck loads
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Up to 5 tons included
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  7-day rental included
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Free delivery &amp; pickup
                </li>
              </ul>
              <p className="mt-6 text-xs text-zinc-500">
                Best for: large renovations, new construction, commercial
                cleanouts
              </p>
              <a
                href={`tel:${phonePlain}`}
                className="mt-6 block w-full rounded-lg bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
              >
                Order 30 Yard - Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What&apos;s Included in{" "}
            <span className="text-green-500">Every Rental</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Free Delivery",
                detail:
                  "We deliver to your driveway, job site, or parking lot. Same-day available.",
              },
              {
                title: "Free Pickup",
                detail:
                  "When you are done loading, call us and we pick it up within 24 hours.",
              },
              {
                title: "7-Day Rental",
                detail:
                  "A full week to fill your dumpster at no extra charge. Extensions available.",
              },
              {
                title: "Disposal Included",
                detail:
                  "Disposal up to the weight limit is included. No surprise landfill fees.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Additional Costs to Know About
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            We believe in full transparency. Here are the only situations where
            additional charges may apply.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-semibold text-white">Weight Overage</h3>
              <p className="mt-1 text-2xl font-bold text-green-500">
                $40-$60<span className="text-sm font-normal text-zinc-500">/ton over</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                If your load exceeds the included weight limit, overage is
                charged per additional ton. Most residential jobs stay within
                limits.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-semibold text-white">Extra Rental Days</h3>
              <p className="mt-1 text-2xl font-bold text-green-500">
                $15-$25<span className="text-sm font-normal text-zinc-500">/day</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Need it longer than 7 days? $15/day for 10 yd, $20/day for 20
                yd, $25/day for 30 yd.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-semibold text-white">Prohibited Materials</h3>
              <p className="mt-1 text-2xl font-bold text-green-500">Varies</p>
              <p className="mt-2 text-sm text-zinc-400">
                Hazardous materials, tires, batteries, and appliances with
                freon may require special disposal. Call for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTAGroup variant="mid" />

      {/* Volume / Contractor Pricing */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                Contractor &amp; Volume Pricing
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Regular Service? We Have Rates for That.
              </h2>
              <p className="mt-4 text-lg text-zinc-300">
                Contractors, property managers, and businesses that need regular
                dumpster service get preferred pricing. The more you rent, the
                more you save.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Discounted rates for recurring rentals
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Multiple dumpsters on the same job site
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Priority scheduling and same-day swaps
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Net-30 billing for established accounts
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="text-green-400">&#10003;</span>
                  Dedicated account manager
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href={`tel:${phonePlain}`}
                  className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Call for Contractor Rates: {PHONE}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <p className="text-3xl font-extrabold text-green-500">10+</p>
                <p className="mt-1 text-xs text-zinc-400">
                  Rentals/mo for best rates
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <p className="text-3xl font-extrabold text-white">3</p>
                <p className="mt-1 text-xs text-zinc-400">Dumpster sizes</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <p className="text-3xl font-extrabold text-white">Same Day</p>
                <p className="mt-1 text-xs text-zinc-400">Swap-outs available</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <p className="text-3xl font-extrabold text-green-500">Net 30</p>
                <p className="mt-1 text-xs text-zinc-400">Billing available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-FAQ CTA */}
      <CTAGroup variant="preFaq" />

      {/* FAQ */}
      <section className="bg-[#2A2A2A] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pricing FAQ
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq, i) => (
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </div>
  );
}
