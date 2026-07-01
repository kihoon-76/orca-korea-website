"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white shadow-[0_18px_50px_rgba(7,19,31,0.22)]">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-4"
          onClick={() => setOpen(false)}
        >
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-[0.16em] text-white">
              ORCA KOREA
            </span>
            <span className="mt-1 block text-xs font-medium uppercase tracking-[0.2em] text-mint">
              Bioenergy Trading
            </span>
          </span>
          <span className="hidden border-l border-white/14 pl-4 leading-tight xl:block">
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-mint">
              Bioenergy
            </span>
            <span className="mt-1 block text-sm font-medium text-white/70">
              Feedstock & Global Trading
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm font-semibold transition hover:text-mint ${
                  active ? "text-mint" : "text-white/82"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="hidden shrink-0 rounded-md border border-mint/45 bg-mint/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-mint hover:bg-mint hover:text-navy lg:inline-flex"
        >
          Trading Inquiry
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-white/18 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-5 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-3 text-sm font-semibold transition hover:bg-white/8 hover:text-mint ${
                  pathname === item.href ? "bg-white/8 text-mint" : "text-white/86"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-mint px-3 py-3 text-center text-sm font-semibold text-navy transition hover:bg-white"
              onClick={() => setOpen(false)}
            >
              Trading Inquiry
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
