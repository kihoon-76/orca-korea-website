import Link from "next/link";
import Image from "next/image";
import { businessAreas, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="flex h-[108px] w-[180px] items-center justify-center rounded-2xl border border-white/14 bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition hover:border-mint/50 sm:h-[120px] sm:w-[220px] sm:p-5"
            aria-label="ORCA KOREA home"
          >
            <Image
              src="/orca-logo.png"
              alt="ORCA KOREA"
              width={548}
              height={326}
              className="max-h-full max-w-full object-contain"
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/64">
            Korea-based bioenergy, biofuel feedstock, and global trading company
            serving international buyers, suppliers, refineries, and energy partners.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Company</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/64 hover:text-mint">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Business Areas</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {businessAreas.map((area) => (
              <span key={area} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/68">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/48 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>(c) {new Date().getFullYear()} ORCA KOREA. All rights reserved.</p>
          <p>Prepared for global bioenergy and trading inquiries.</p>
        </div>
      </div>
    </footer>
  );
}
