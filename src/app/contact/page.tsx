import type { Metadata } from "next";
import { PHONE, SITE_URL, EMAIL, ADDRESS } from "@/lib/seo";
import CTAGroup from "@/components/CTAGroup";
import CTABanner from "@/components/CTABanner";
import GeneralContactForm from "@/components/GeneralContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Florida Dumpster Rentals",
  description:
    "Get in touch with Florida Dumpster Rentals. Call 954-710-2332, text us, or email hello@fladumpsterrentals.com. Fort Lauderdale office serving all of Florida.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const phonePlain = PHONE.replace(/-/g, "");

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Get in Touch
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Need a dumpster? Have a question? Text or call us anytime. We respond
            fast and give you a straight answer.
          </p>
          <CTAGroup variant="hero" />
        </div>
      </section>

      {/* Contact Info + CTAs */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Text Us */}
            <a
              href={`sms:${phonePlain}`}
              className="group rounded-xl border border-zinc-200 p-8 text-center transition-colors hover:border-green-300 hover:shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-zinc-900 group-hover:text-green-600">
                Text Us
              </h2>
              <p className="mt-1 text-2xl font-bold text-green-600">{PHONE}</p>
              <p className="mt-2 text-sm text-zinc-500">
                Fastest way to get a quote. Text your project details anytime.
              </p>
            </a>

            {/* Call Us */}
            <a
              href={`tel:${phonePlain}`}
              className="group rounded-xl border border-zinc-200 p-8 text-center transition-colors hover:border-green-300 hover:shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-zinc-900 group-hover:text-green-600">
                Call Us
              </h2>
              <p className="mt-1 text-2xl font-bold text-green-600">{PHONE}</p>
              <p className="mt-2 text-sm text-zinc-500">
                Talk to a real person. No automated menus.
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group rounded-xl border border-zinc-200 p-8 text-center transition-colors hover:border-green-300 hover:shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-zinc-900 group-hover:text-green-600">
                Email Us
              </h2>
              <p className="mt-1 text-lg font-bold text-green-600">{EMAIL}</p>
              <p className="mt-2 text-sm text-zinc-500">
                For quotes, questions, or hauler partnership inquiries.
              </p>
            </a>
          </div>

          {/* Address */}
          <div className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-zinc-900">Our Office</h3>
            <p className="mt-2 text-zinc-600">{ADDRESS}</p>
            <p className="mt-1 text-sm text-zinc-500">
              Serving all of Florida from Fort Lauderdale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Send Us a Message
          </h2>
          <p className="mt-3 text-center text-zinc-500">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
            For the fastest response, text or call us directly.
          </p>
          <div className="mt-8">
            <GeneralContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAGroup variant="final" />
    </>
  );
}
