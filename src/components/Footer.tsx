import Link from "next/link";
import { PHONE, SITE_NAME, EMAIL, ADDRESS } from "@/lib/seo";
import { getRegions } from "@/lib/data";

export default function Footer() {
  const regions = getRegions();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <span className="text-xl font-bold text-white">
              FLA<span className="text-green-400">Dumpster</span>Rentals
            </span>
            <p className="mt-3 text-sm leading-6">
              Affordable roll-off dumpster rental across Florida. 10, 20 &amp;
              30 yard containers for construction, junk removal, cleanouts &amp;
              more.
            </p>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="mt-3 inline-block text-lg font-semibold text-green-400 hover:text-green-300"
            >
              {PHONE}
            </a>
            <p className="mt-2 text-sm">{EMAIL}</p>
            <p className="mt-1 text-sm">{ADDRESS}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Contractor Dumpsters", href: "/services/contractors" },
                { name: "Junk Removal", href: "/services/junk-removal" },
                { name: "Home Cleanouts", href: "/services/home-cleanouts" },
                { name: "Corporate Accounts", href: "/services/corporate-accounts" },
                { name: "Roofing", href: "/services/roofing" },
                { name: "Demolition", href: "/services/demolition" },
                { name: "Renovation", href: "/services/renovation-remodeling" },
                { name: "Storm Debris", href: "/services/storm-debris" },
              ].map((svc) => (
                <li key={svc.href}>
                  <Link href={svc.href} className="text-sm hover:text-white">
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {regions.map((region) => (
                <li key={region}>
                  <Link
                    href={`/areas#${region.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-white"
                  >
                    {region}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/dumpster-sizes" className="text-sm hover:text-white">
                  Dumpster Sizes
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/broker-service" className="text-sm hover:text-white">
                  Broker Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
