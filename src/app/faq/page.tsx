import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import { getFAQPageSchema } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";
import ProTip from "@/components/ProTip";

export const metadata: Metadata = {
  title: "FAQ | Florida Dumpster Rentals",
  description:
    "Answers to common questions about dumpster rental in Florida: pricing, sizes, delivery, what you can and can't throw away, permits, and more. Call 954-710-2332.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const phonePlain = PHONE.replace(/-/g, "");

const faqCategories = [
  {
    category: "Ordering & Pricing",
    faqs: [
      {
        q: "How do I order a dumpster?",
        a: "Text or call us at 954-710-2332 with your project details (type of project, location, preferred delivery date). We'll recommend a size, give you a quote, and schedule delivery. The whole process takes a few minutes.",
      },
      {
        q: "How much does a dumpster rental cost in Florida?",
        a: "Pricing depends on size, location, and rental duration. 10-yard dumpsters start around $275, 20-yard from $350, and 30-yard from $450. Your quote includes delivery, pickup, disposal, and the rental period. No hidden fees.",
      },
      {
        q: "Is there a deposit required?",
        a: "Most rentals do not require a deposit. Payment is collected at the time of delivery or upon pickup, depending on the hauler. We accept all major credit cards.",
      },
      {
        q: "What's included in the price?",
        a: "Your quote includes delivery, the rental period (typically 7-10 days), pickup, and disposal up to the weight limit for your dumpster size. Overage fees apply only if you exceed the weight limit.",
      },
      {
        q: "Do you offer discounts for contractors or repeat customers?",
        a: "Yes. We offer volume pricing for contractors, builders, property managers, and businesses with recurring dumpster needs. Contact us to set up an account and get preferred rates.",
      },
    ],
  },
  {
    category: "Sizes & Capacity",
    faqs: [
      {
        q: "What size dumpster do I need?",
        a: "For small cleanouts and garage cleanups, a 10-yard dumpster is usually enough. For renovation projects, roofing, and larger cleanouts, a 20-yard is most popular. For construction, demolition, and large commercial projects, go with a 30-yard. Not sure? Text us your project details and we'll recommend the right one.",
      },
      {
        q: "What are the weight limits for each size?",
        a: "10-yard dumpsters have a 2-ton (4,000 lb) weight limit. 20-yard dumpsters allow up to 3 tons (6,000 lbs). 30-yard dumpsters handle up to 4 tons (8,000 lbs). Overage fees apply if you exceed these limits.",
      },
      {
        q: "How many pickup truck loads fit in each dumpster?",
        a: "A 10-yard dumpster holds about 4 pickup truck loads. A 20-yard holds about 8 loads. A 30-yard holds about 12 loads. This is based on a standard full-size pickup truck bed.",
      },
      {
        q: "What if I fill my dumpster before my project is done?",
        a: "We can swap it out for an empty one or bring a second dumpster. Just text or call us and we'll schedule it. Many of our customers, especially contractors, do multiple pickups per project.",
      },
      {
        q: "How high can I fill the dumpster?",
        a: "Debris must not extend above the top edge of the dumpster walls. This is a DOT safety requirement for transport. Overfilled dumpsters can't be legally hauled on public roads.",
      },
    ],
  },
  {
    category: "Delivery & Pickup",
    faqs: [
      {
        q: "Do you offer same-day delivery?",
        a: "Yes. We offer same-day delivery across most of Florida when you text or call by noon. Next-day delivery is available for orders placed later in the day.",
      },
      {
        q: "How long can I keep the dumpster?",
        a: "Standard rental periods are 7-10 days. Need it longer? No problem. Just let us know and we can extend your rental at a daily rate.",
      },
      {
        q: "Can I get the dumpster picked up early?",
        a: "Absolutely. Text or call us when you're done filling it and we'll schedule pickup within 24-48 hours. There's no penalty for ending your rental early.",
      },
      {
        q: "Where will the dumpster be placed?",
        a: "The driver will place the dumpster wherever you specify: driveway, yard, parking lot, or construction site. Just make sure the spot is accessible and has about 60 feet of straight clearance for the truck.",
      },
      {
        q: "Will the dumpster damage my driveway?",
        a: "Roll-off dumpsters are placed carefully. If you're concerned about your driveway, we can place plywood boards under the wheels to distribute weight. Just let us know when ordering.",
      },
    ],
  },
  {
    category: "What Goes In / What Doesn't",
    faqs: [
      {
        q: "What can I put in a dumpster?",
        a: "Most household and construction debris is accepted: furniture, appliances, drywall, roofing shingles, wood, concrete (within weight limits), yard waste, carpet, tile, and general junk.",
      },
      {
        q: "What can't go in a dumpster?",
        a: "Hazardous materials are not accepted: paint, chemicals, solvents, asbestos, batteries, tires, medical waste, and flammable liquids. Electronics disposal rules vary by county. When in doubt, ask us.",
      },
      {
        q: "Can I put concrete or dirt in the dumpster?",
        a: "Yes, but because these materials are very heavy, they may require a dedicated 'heavy debris' load. You'll reach the weight limit quickly when disposing of concrete, dirt, brick, or stone. Let us know so we can recommend the right approach.",
      },
      {
        q: "Can I throw away appliances?",
        a: "Yes. Most appliances (washers, dryers, dishwashers, stoves, water heaters) can go in the dumpster. Refrigerators and AC units require Freon removal first, which costs a small additional fee.",
      },
    ],
  },
  {
    category: "Permits & Regulations",
    faqs: [
      {
        q: "Do I need a permit for a dumpster?",
        a: "If the dumpster is placed on your private property (driveway, yard), no permit is needed. If it must go on a public street, sidewalk, or right-of-way, you may need a permit from your local municipality. We can help guide you through the process.",
      },
      {
        q: "Are there HOA restrictions on dumpsters?",
        a: "Some HOAs have rules about dumpster placement, duration, or screening. Check with your HOA before ordering. In most cases, a dumpster in your driveway for 7-10 days is fine, but it's best to confirm.",
      },
      {
        q: "What about environmental regulations?",
        a: "All debris is taken to licensed disposal facilities that comply with Florida DEP regulations. Recyclable materials are diverted from landfills when possible. We never illegally dump waste.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) =>
  cat.faqs.map((faq) => ({ q: faq.q, a: faq.a }))
);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQPageSchema(allFaqs)),
        }}
      />

      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Got Questions?
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Everything you need to know about renting a dumpster in Florida. Can&apos;t
            find your answer here? Text or call us anytime.
          </p>
          <CTAGroup variant="hero" />
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-zinc-200 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {faqCategories.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-green-300 hover:text-green-600"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((cat) => (
              <div
                key={cat.category}
                id={cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              >
                <h2 className="text-2xl font-bold text-zinc-900">{cat.category}</h2>
                <div className="mt-6 space-y-6">
                  {cat.faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-zinc-100 pb-6">
                      <h3 className="text-lg font-semibold text-zinc-900">{faq.q}</h3>
                      <p className="mt-2 text-zinc-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-lg text-zinc-500">
            We&apos;re here to help. Text or call us anytime and get a real answer from a real person.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`sms:${phonePlain}`}
              className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-700"
            >
              Text Us
            </a>
            <a
              href={`tel:${phonePlain}`}
              className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-lg font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Call {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-lg font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <ProTip
        tips={[
          {
            title: "You Probably Need a 20-Yarder",
            body: "It's our most popular size for a reason. Whether you're doing a kitchen remodel, a roof tear-off, or a whole-house cleanout, the 20-yard dumpster handles it. It fits in a standard driveway and holds about 8 pickup truck loads of debris.",
          },
          {
            title: "Rain Makes Everything Heavier",
            body: "Florida's afternoon thunderstorms can add hundreds of pounds of water weight to your dumpster — especially if it's full of drywall, cardboard, or insulation. Toss a tarp over it between loading sessions. Thirty seconds of effort can save you $50-100 in overage fees.",
          },
          {
            title: "We Don't Judge Your Hoard",
            body: "We've hauled away 30 years of National Geographic collections, entire garages full of mystery boxes, and things we genuinely can't identify. No shame, no judgment — just a dumpster and a fresh start. That's what we're here for.",
          },
        ]}
      />

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </>
  );
}
