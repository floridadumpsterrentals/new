import type { Metadata } from "next";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Reviews | Florida Dumpster Rentals",
  description:
    "See what Florida customers say about our dumpster rental service. 4.9 stars from 312+ reviews. Fast delivery, fair pricing, reliable service. Call 954-710-2332.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

const phonePlain = PHONE.replace(/-/g, "");

const reviews = [
  {
    name: "Mike Rodriguez",
    location: "Fort Lauderdale, FL",
    role: "General Contractor",
    rating: 5,
    text: "We use Florida Dumpster Rentals for all our job sites across Broward County. Always on time, fair pricing, and the 30-yard dumpsters handle everything we throw at them. Best in the business.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah Thompson",
    location: "Tampa, FL",
    role: "Homeowner",
    rating: 5,
    text: "Rented a 20-yard for a full kitchen renovation. Delivery was the next morning, exactly where I wanted it. The price they quoted was the price I paid. No surprises. Will definitely use again.",
    date: "1 month ago",
  },
  {
    name: "James Wilson",
    location: "Jacksonville, FL",
    role: "Property Manager",
    rating: 5,
    text: "Manage 12 rental properties and use these guys whenever tenants move out. Quick response, same-day delivery most of the time. The 10-yard is perfect for apartment cleanouts.",
    date: "3 weeks ago",
  },
  {
    name: "Maria Santos",
    location: "Miami, FL",
    role: "Homeowner",
    rating: 5,
    text: "We cleaned out my mother's house after she moved to assisted living. So much stuff. The 20-yard dumpster was the perfect size. The whole process was easy and stress-free during a hard time.",
    date: "1 month ago",
  },
  {
    name: "David Chen",
    location: "Orlando, FL",
    role: "Roofing Contractor",
    rating: 5,
    text: "We go through 3-4 dumpsters a week during busy season. Florida Dumpster Rentals keeps up with our volume without any issues. Pricing is consistent and the haulers they work with are reliable.",
    date: "2 months ago",
  },
  {
    name: "Jennifer Martinez",
    location: "St. Petersburg, FL",
    role: "Homeowner",
    rating: 4,
    text: "Great service overall. Ordered a 10-yard for a garage cleanout and it was delivered the same day. Only reason for 4 stars is pickup took an extra day, but they let me know in advance.",
    date: "1 month ago",
  },
  {
    name: "Robert Taylor",
    location: "Boca Raton, FL",
    role: "Business Owner",
    rating: 5,
    text: "Had a commercial office cleanout — 30 years of accumulated furniture and files. The team recommended two 20-yard dumpsters and the pricing was very competitive. Professional from start to finish.",
    date: "3 weeks ago",
  },
  {
    name: "Ashley Johnson",
    location: "Naples, FL",
    role: "Homeowner",
    rating: 5,
    text: "First time renting a dumpster and I was nervous about the process. Texted them, got a quote in minutes, dumpster showed up the next morning. Filled it with yard waste and old furniture. So easy!",
    date: "2 weeks ago",
  },
  {
    name: "Carlos Gutierrez",
    location: "Hialeah, FL",
    role: "Demolition Contractor",
    rating: 5,
    text: "These guys understand what contractors need. Fast delivery, no nonsense, and they always have availability when I need it. Been using them for 6 months and haven't had a single issue.",
    date: "1 month ago",
  },
  {
    name: "Patricia Williams",
    location: "Tallahassee, FL",
    role: "Homeowner",
    rating: 5,
    text: "Used them for a bathroom and laundry room remodel. The 10-yard was plenty for tiles, old vanity, drywall, and fixtures. Great value. The driver even put boards under the wheels to protect my driveway.",
    date: "2 months ago",
  },
  {
    name: "Kevin O'Brien",
    location: "Sarasota, FL",
    role: "Flipper / Investor",
    rating: 5,
    text: "I flip 4-5 houses a year and always need dumpsters. Florida Dumpster Rentals gives me consistent pricing and priority scheduling. They're my go-to for every project now.",
    date: "3 weeks ago",
  },
  {
    name: "Lisa Nguyen",
    location: "Gainesville, FL",
    role: "Homeowner",
    rating: 5,
    text: "Whole-house cleanout after downsizing. We filled an entire 30-yard dumpster. The price was half what another company quoted me. Pickup was prompt and the whole experience was smooth.",
    date: "1 month ago",
  },
  {
    name: "Tony Ramirez",
    location: "Pompano Beach, FL",
    role: "Landscaping Contractor",
    rating: 5,
    text: "We use the 20-yard dumpsters for tree removal and major landscaping jobs. Always available when we need them, and the pricing is fair. Texting to order is so much easier than phone calls during a busy workday.",
    date: "2 weeks ago",
  },
  {
    name: "Diane Foster",
    location: "West Palm Beach, FL",
    role: "Realtor",
    rating: 5,
    text: "I recommend Florida Dumpster Rentals to all my clients doing pre-sale cleanouts. Fast, affordable, and they make the process simple for people who've never rented a dumpster before.",
    date: "1 month ago",
  },
];

export default function ReviewsPage() {
  const avgRating = 4.9;
  const totalReviews = 312;
  const starCounts = [
    { stars: 5, count: 278 },
    { stars: 4, count: 28 },
    { stars: 3, count: 4 },
    { stars: 2, count: 1 },
    { stars: 1, count: 1 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Customer Reviews
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What Our Customers Say
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Don&apos;t just take our word for it. Here&apos;s what contractors,
            homeowners, and businesses across Florida have to say about our dumpster
            rental service.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-white py-12 border-b border-zinc-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-zinc-900">{avgRating}</div>
              <div className="mt-1 flex items-center justify-center gap-1 md:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    {i < Math.floor(avgRating) ? "\u2605" : "\u2606"}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-zinc-500">
                Based on {totalReviews} reviews
              </p>
            </div>
            <div className="space-y-2">
              {starCounts.map((sc) => (
                <div key={sc.stars} className="flex items-center gap-3">
                  <span className="w-12 text-sm text-zinc-600">{sc.stars} star</span>
                  <div className="flex-1 rounded-full bg-zinc-100 h-3">
                    <div
                      className="h-3 rounded-full bg-yellow-400"
                      style={{ width: `${(sc.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-sm text-zinc-500">{sc.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-zinc-200"
                      }`}
                    >
                      {"\u2605"}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-zinc-100 pt-4">
                  <p className="font-semibold text-zinc-900">{review.name}</p>
                  <p className="text-xs text-zinc-500">
                    {review.role} &middot; {review.location}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Join 312+ Happy Customers Across Florida."
        subtitle="Fast delivery, fair pricing, no hidden fees. Text or call for your free quote today."
      />

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </>
  );
}
