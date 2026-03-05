import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dumpster Sizes: 10, 20 & 30 Yard Roll-Off Containers | Florida Dumpster Rentals",
  description:
    "Compare 10, 20 & 30 yard dumpster sizes. Dimensions, weight limits, capacity, pricing & best uses. Find the right roll-off container for your project. Call 954-710-2332.",
  alternates: { canonical: `${SITE_URL}/dumpster-sizes` },
};

const phonePlain = PHONE.replace(/-/g, "");

const sizes = [
  {
    yard: 10,
    dimensions: "12' L x 8' W x 3.5' H",
    weightLimit: "2 tons (4,000 lbs)",
    truckLoads: "4 pickup truck loads",
    price: "$275",
    bestFor: [
      "Small garage or basement cleanouts",
      "Single-room remodels (bathroom, kitchen)",
      "Small landscaping projects",
      "Deck removal (small deck)",
      "Estate cleanouts (1-2 rooms)",
    ],
    whatFits: [
      "Old furniture, mattresses, boxes",
      "Small appliances and fixtures",
      "Light demolition debris",
      "Yard waste and brush",
      "About 50-60 33-gallon trash bags",
    ],
    idealFor: "Homeowners tackling a weekend cleanout or small remodel. Perfect when you need more capacity than a truck but don't need a full-size container.",
  },
  {
    yard: 20,
    dimensions: "22' L x 8' W x 4.5' H",
    weightLimit: "3 tons (6,000 lbs)",
    truckLoads: "8 pickup truck loads",
    price: "$350",
    popular: true,
    bestFor: [
      "Full kitchen or bathroom renovations",
      "Roofing tear-offs (up to 30 squares)",
      "Large cleanouts (whole house, office)",
      "Deck or fence removal",
      "Flooring replacement projects",
    ],
    whatFits: [
      "Construction and renovation debris",
      "Roofing shingles and underlayment",
      "Carpet, tile, hardwood flooring",
      "Drywall, framing lumber, siding",
      "About 100-120 33-gallon trash bags",
    ],
    idealFor: "Our most popular size. Fits most renovation, roofing, and cleanout projects. Big enough for serious work without taking up your entire driveway.",
  },
  {
    yard: 30,
    dimensions: "22' L x 8' W x 6' H",
    weightLimit: "4 tons (8,000 lbs)",
    truckLoads: "12 pickup truck loads",
    price: "$450",
    bestFor: [
      "New construction sites",
      "Full home demolition",
      "Large commercial cleanouts",
      "Whole-house renovations",
      "Storm damage cleanup",
    ],
    whatFits: [
      "Heavy construction debris",
      "Concrete, brick, and block (within weight limit)",
      "Large volumes of mixed debris",
      "Commercial and industrial waste",
      "About 150-180 33-gallon trash bags",
    ],
    idealFor: "Contractors, builders, and large-scale projects. When you need maximum capacity for demolition, new construction, or major commercial work.",
  },
];

export default function DumpsterSizesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Size Guide
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Dumpster Sizes &amp; Pricing
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            We offer 10, 20, and 30 yard roll-off dumpsters for every project size.
            Not sure which one you need? Text us your project details and we&apos;ll
            recommend the right size.
          </p>
          <CTAGroup variant="hero" />
        </div>
      </section>

      {/* Detailed Size Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sizes.map((s) => (
              <div
                key={s.yard}
                id={`${s.yard}-yard`}
                className={`rounded-2xl border p-8 sm:p-10 ${
                  s.popular
                    ? "border-green-600 shadow-lg shadow-green-100"
                    : "border-zinc-200"
                }`}
              >
                {s.popular && (
                  <span className="mb-4 inline-block rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-green-600">{s.yard}</span>
                      <span className="text-xl font-medium text-zinc-500">Yard Dumpster</span>
                    </div>
                    <p className="mt-4 text-zinc-600">{s.idealFor}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-zinc-50 p-4">
                        <p className="text-xs font-semibold uppercase text-zinc-500">Dimensions</p>
                        <p className="mt-1 font-semibold text-zinc-900">{s.dimensions}</p>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4">
                        <p className="text-xs font-semibold uppercase text-zinc-500">Weight Limit</p>
                        <p className="mt-1 font-semibold text-zinc-900">{s.weightLimit}</p>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4">
                        <p className="text-xs font-semibold uppercase text-zinc-500">Capacity</p>
                        <p className="mt-1 font-semibold text-zinc-900">{s.truckLoads}</p>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4">
                        <p className="text-xs font-semibold uppercase text-zinc-500">Starting At</p>
                        <p className="mt-1 font-semibold text-green-600">{s.price}</p>
                      </div>
                    </div>

                    <a
                      href={`sms:${phonePlain}?body=I'm interested in a ${s.yard} yard dumpster`}
                      className="mt-6 inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
                    >
                      Text for a {s.yard} Yard Quote
                    </a>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-zinc-900">Best For</h3>
                      <ul className="mt-3 space-y-2">
                        {s.bestFor.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                            <span className="mt-0.5 text-green-600">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">What Fits</h3>
                      <ul className="mt-3 space-y-2">
                        {s.whatFits.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                            <span className="mt-0.5 text-green-600">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Side-by-Side Comparison
          </h2>
          <p className="mt-3 text-center text-zinc-500">
            Quick reference to compare all three dumpster sizes.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-zinc-300">
                  <th className="py-3 pr-4 font-semibold text-zinc-900">Feature</th>
                  <th className="px-4 py-3 font-semibold text-zinc-900">10 Yard</th>
                  <th className="px-4 py-3 font-semibold text-green-600">20 Yard</th>
                  <th className="px-4 py-3 font-semibold text-zinc-900">30 Yard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="py-3 pr-4 font-medium text-zinc-700">Dimensions</td>
                  <td className="px-4 py-3 text-zinc-600">12&apos; x 8&apos; x 3.5&apos;</td>
                  <td className="px-4 py-3 text-zinc-600">22&apos; x 8&apos; x 4.5&apos;</td>
                  <td className="px-4 py-3 text-zinc-600">22&apos; x 8&apos; x 6&apos;</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-zinc-700">Weight Limit</td>
                  <td className="px-4 py-3 text-zinc-600">2 tons</td>
                  <td className="px-4 py-3 text-zinc-600">3 tons</td>
                  <td className="px-4 py-3 text-zinc-600">4 tons</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-zinc-700">Truck Loads</td>
                  <td className="px-4 py-3 text-zinc-600">4 loads</td>
                  <td className="px-4 py-3 text-zinc-600">8 loads</td>
                  <td className="px-4 py-3 text-zinc-600">12 loads</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-zinc-700">Starting Price</td>
                  <td className="px-4 py-3 font-semibold text-zinc-900">$275</td>
                  <td className="px-4 py-3 font-semibold text-green-600">$350</td>
                  <td className="px-4 py-3 font-semibold text-zinc-900">$450</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-zinc-700">Ideal For</td>
                  <td className="px-4 py-3 text-zinc-600">Small cleanouts, minor remodels</td>
                  <td className="px-4 py-3 text-zinc-600">Renovations, roofing, large cleanouts</td>
                  <td className="px-4 py-3 text-zinc-600">Construction, demolition, commercial</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-zinc-700">Driveway Footprint</td>
                  <td className="px-4 py-3 text-zinc-600">Small &mdash; fits most driveways</td>
                  <td className="px-4 py-3 text-zinc-600">Medium &mdash; standard parking spot</td>
                  <td className="px-4 py-3 text-zinc-600">Large &mdash; needs open space</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTABanner
        title="Not Sure Which Size? We'll Help."
        subtitle="Text us your project details and we'll recommend the perfect dumpster size. No obligation."
      />

      {/* Which Size Do I Need? */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Which Size Do I Need?
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            Use this quick guide to find the right dumpster for your project.
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                project: "Garage or Attic Cleanout",
                recommended: "10 Yard",
                reason: "A single-room cleanout typically generates 3-4 truck loads of debris. The 10-yard handles this easily with room to spare.",
              },
              {
                project: "Kitchen or Bathroom Remodel",
                recommended: "20 Yard",
                reason: "Cabinets, countertops, tile, drywall, and fixtures add up fast. The 20-yard gives you plenty of room for a full renovation.",
              },
              {
                project: "Roofing Project",
                recommended: "20 Yard",
                reason: "A 20-yard handles up to 30 squares of shingles. For larger roofs or multiple layers, consider a 30-yard or two trips.",
              },
              {
                project: "Whole-House Cleanout",
                recommended: "20 or 30 Yard",
                reason: "For a full house of furniture, appliances, and accumulated items, a 20-yard works for smaller homes. Larger homes need a 30-yard.",
              },
              {
                project: "New Construction",
                recommended: "30 Yard",
                reason: "Construction generates high volumes of mixed debris. The 30-yard maximizes capacity and minimizes trips, keeping your site clean.",
              },
              {
                project: "Landscaping / Yard Cleanup",
                recommended: "10 or 20 Yard",
                reason: "Yard waste is bulky but light. A 10-yard works for basic cleanup; choose a 20-yard for tree removal or major landscaping.",
              },
            ].map((item) => (
              <div key={item.project} className="rounded-xl border border-zinc-200 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.project}</h3>
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    {item.recommended}
                  </span>
                </div>
                <p className="mt-2 text-zinc-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Dumpster Size FAQs
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "What happens if I go over the weight limit?",
                a: "If your dumpster exceeds the weight limit, an overage fee applies (typically $40-$75 per additional ton). We'll let you know if there's an overage before charging anything extra.",
              },
              {
                q: "Can I mix different types of debris in one dumpster?",
                a: "Yes! You can mix most household and construction debris in one container. The only exception is concrete, dirt, or other heavy materials — these may need a dedicated 'heavy debris' load due to weight.",
              },
              {
                q: "What if I order the wrong size?",
                a: "No problem. If your dumpster fills up before your project is done, we can swap it out or bring a second one. It's always better to size up if you're unsure.",
              },
              {
                q: "How high can I fill the dumpster?",
                a: "Debris should not extend above the top edge of the dumpster. This is for safe transport — overfilled containers can't be legally hauled on the road.",
              },
              {
                q: "Do you have dumpsters larger than 30 yards?",
                a: "For most residential and commercial projects, 30 yards is the maximum. For very large jobs, we can arrange multiple containers or schedule additional pickups.",
              },
              {
                q: "What's the difference between a roll-off dumpster and a front-load dumpster?",
                a: "Roll-off dumpsters are the open-top containers delivered on a truck and rolled off onto your property. They're designed for project-based waste (renovations, cleanouts, construction). Front-load dumpsters are the smaller, lidded containers you see behind businesses for ongoing trash service.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-zinc-200 pb-6">
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
