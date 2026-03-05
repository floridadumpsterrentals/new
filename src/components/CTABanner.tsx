import { PHONE } from "@/lib/seo";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Need a Dumpster? Get a Free Quote in Minutes.",
  subtitle = "10, 20 & 30 yard roll-off dumpsters delivered across Florida. Same-day delivery available.",
}: CTABannerProps) {
  const phonePlain = PHONE.replace(/-/g, "");
  return (
    <section className="bg-green-600 py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-3 text-lg text-green-100">{subtitle}</p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`sms:${phonePlain}`}
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-green-600 shadow-sm hover:bg-green-50"
          >
            Text Us for a Quote
          </a>
          <a
            href={`tel:${phonePlain}`}
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-green-700"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
