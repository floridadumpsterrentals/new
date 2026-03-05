import { PHONE } from "@/lib/seo";

type CTAVariant = "hero" | "mid" | "preFaq" | "final";

interface CTAGroupProps {
  variant: CTAVariant;
  title?: string;
  subtitle?: string;
}

const defaults: Record<CTAVariant, { title: string; subtitle: string }> = {
  hero: {
    title: "Get Your Dumpster Delivered Today.",
    subtitle: "Fast, affordable roll-off dumpster rental across Florida. Text or call for an instant quote.",
  },
  mid: {
    title: "Same-Day Delivery Available.",
    subtitle: "We deliver 10, 20 & 30 yard roll-off dumpsters anywhere in Florida. No hidden fees.",
  },
  preFaq: {
    title: "Florida's Most Trusted Dumpster Rental.",
    subtitle: "Contractors, homeowners, and businesses across Florida rely on us for fast, reliable dumpster service.",
  },
  final: {
    title: "Ready to Order Your Dumpster?",
    subtitle: "Text us your project details for an instant quote, or call to speak with a dumpster specialist.",
  },
};

const phonePlain = PHONE.replace(/-/g, "");

export default function CTAGroup({ variant, title, subtitle }: CTAGroupProps) {
  const d = defaults[variant];
  const heading = title ?? d.title;
  const sub = subtitle ?? d.subtitle;

  if (variant === "hero") {
    return (
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={`sms:${phonePlain}`}
          className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
        >
          Text Us for a Quote
        </a>
        <a
          href={`tel:${phonePlain}`}
          className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:border-zinc-500 hover:bg-white/5"
        >
          Call {PHONE}
        </a>
      </div>
    );
  }

  const isLarge = variant === "final";

  return (
    <section className={`bg-green-600 ${isLarge ? "py-20" : "py-14"}`}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={`font-bold text-white ${isLarge ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-green-100">
          {sub}
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`sms:${phonePlain}`}
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-green-600 hover:bg-green-50"
          >
            Text Us for a Quote
          </a>
          <a
            href={`tel:${phonePlain}`}
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white/10"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
