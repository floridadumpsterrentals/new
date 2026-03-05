import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How It Works | Florida Dumpster Rentals",
  description:
    "Renting a dumpster in Florida is simple: text or call for a quote, we deliver, you fill it, we pick it up. Same-day delivery available. Call 954-710-2332.",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
};

const phonePlain = PHONE.replace(/-/g, "");

const steps = [
  {
    number: "1",
    title: "Order Your Dumpster",
    summary: "Text or call us with your project details. We'll recommend a size and give you an instant quote.",
    details: [
      "Tell us your project type (renovation, cleanout, construction, etc.)",
      "Share your delivery address and preferred delivery date",
      "We'll recommend the right dumpster size (10, 20, or 30 yard)",
      "Get a transparent, all-inclusive price with no hidden fees",
      "Confirm your order via text, phone, or email",
    ],
    tip: "Not sure what size you need? Text us a photo of what you're removing and we'll recommend the right container.",
  },
  {
    number: "2",
    title: "We Deliver",
    summary: "We drop off the dumpster at your location on your schedule. Same-day and next-day delivery available.",
    details: [
      "Our hauler arrives during your scheduled delivery window",
      "The driver will place the dumpster exactly where you want it",
      "Roll-off dumpsters are placed gently — no damage to your driveway",
      "We can place on driveways, yards, parking lots, or construction sites",
      "Standard rental period is 7-10 days (extensions available)",
    ],
    tip: "Have your placement spot clear before delivery. The driver needs about 60 feet of straight clearance to roll the container off the truck.",
  },
  {
    number: "3",
    title: "We Pick Up",
    summary: "When you're done filling it, text or call us. We pick up the dumpster and haul everything away.",
    details: [
      "Text or call when you're finished — no need to wait until your rental period ends",
      "We schedule pickup within 24-48 hours of your request",
      "Our driver picks up the full container and hauls it to the disposal facility",
      "You get a final confirmation once pickup is complete",
      "Need more time? Just let us know and we'll extend your rental",
    ],
    tip: "Don't overfill the dumpster above the rim. Debris needs to be level with or below the top edge for safe transport.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Simple Process
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How Dumpster Rental Works
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Three simple steps: order, deliver, pickup. We handle the logistics so
            you can focus on your project. No complicated forms, no long wait times.
          </p>
          <CTAGroup variant="hero" />
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step) => (
              <div key={step.number} className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-1">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-600 text-3xl font-bold text-white">
                    {step.number}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-lg text-zinc-600">{step.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-zinc-600">
                        <span className="mt-1 text-green-600">&#10003;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-sm text-green-800">
                      <span className="font-semibold">Tip:</span> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Text or call us right now for an instant quote. We can often deliver same-day."
      />

      {/* What to Expect */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">What to Expect</h2>
          <p className="mt-3 text-lg text-zinc-500">
            Here is what a typical dumpster rental experience looks like from start to finish.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Transparent Pricing",
                desc: "Your quote includes delivery, pickup, disposal, and the rental period. No surprise fees, no hidden charges.",
              },
              {
                title: "Flexible Scheduling",
                desc: "Same-day and next-day delivery available across most of Florida. Need a specific time window? Just ask.",
              },
              {
                title: "7-10 Day Rental",
                desc: "Standard rental period is 7-10 days. Need it longer? Daily extensions are available at a flat rate.",
              },
              {
                title: "Clean Delivery",
                desc: "Our haulers place dumpsters carefully. We use boards under the wheels to protect your driveway when needed.",
              },
              {
                title: "Easy Communication",
                desc: "Text, call, or email. We respond fast and keep you updated on delivery and pickup status.",
              },
              {
                title: "Responsible Disposal",
                desc: "All debris is taken to licensed disposal facilities. Recyclable materials are diverted when possible.",
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

      {/* Placement Tips */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">Dumpster Placement Tips</h2>
          <p className="mt-3 text-lg text-zinc-500">
            A few things to keep in mind before your dumpster arrives.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                title: "Choose a Flat, Hard Surface",
                desc: "Driveways, concrete pads, and asphalt parking lots are ideal. Soft ground (grass, dirt) works but the dumpster may settle.",
              },
              {
                title: "Clear the Area",
                desc: "Make sure the placement spot is clear of cars, debris, and low-hanging branches. The delivery truck needs about 60 feet of straight clearance.",
              },
              {
                title: "Check Overhead Clearance",
                desc: "The truck needs clearance above the dumpster to roll it off. Watch for power lines, tree branches, and carport roofs.",
              },
              {
                title: "Consider Access to Your Project",
                desc: "Place the dumpster as close to your work area as possible to minimize hauling distance. Near the garage? Put it in the driveway.",
              },
              {
                title: "Street Placement",
                desc: "If the dumpster must go on a public street, you may need a permit from your local municipality. We can help guide you through this.",
              },
              {
                title: "Protect Your Driveway",
                desc: "Worried about driveway damage? Place plywood boards under the wheels. Our drivers carry boards and will use them on request.",
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-zinc-100 pb-6">
                <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-zinc-600">{item.desc}</p>
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
