import Link from "next/link";
import { PHONE } from "@/lib/seo";
import { getRegions, getNeighborhoodsByRegion, getAllServices } from "@/lib/data";
import MegaMenu from "./MegaMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-zinc-900">
            FLA<span className="text-green-600">Dumpster</span>Rentals
          </span>
        </Link>

        <MegaMenu
          regions={getRegions()}
          regionCounts={Object.fromEntries(
            Object.entries(getNeighborhoodsByRegion()).map(([r, ns]) => [r, ns.length])
          )}
          phone={PHONE}
          services={getAllServices().map(s => ({ slug: s.slug, name: s.name, category: s.category }))}
        />
      </div>
    </header>
  );
}
