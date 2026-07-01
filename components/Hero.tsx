import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 hero-grid opacity-80" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 energy-orbit opacity-90 lg:block" />
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-mint">
            Korea-based bioenergy trading company
          </p>
          <div className="max-w-xl rounded-xl border border-white/18 bg-white p-6 shadow-premium md:p-8">
            <Image
              src="/orca-logo.png"
              alt="ORCA KOREA"
              width={548}
              height={326}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
            ORCA KOREA connects reliable biofuel feedstocks with global partners
            through sustainable sourcing, quality-focused trading, and international
            market expertise.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-md bg-mint px-6 py-3 text-center text-sm font-semibold text-navy transition hover:bg-white"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/22 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Contact Our Trading Team
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg border border-white/12 bg-white/8 p-7 shadow-premium backdrop-blur-md md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              ORCA KOREA
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              Sustainable Bioenergy Feedstocks. Global Trading Expertise.
            </h1>
            <p className="mt-6 text-base leading-8 text-white/70">
              Feedstock trading, quality control, and global logistics support for
              biofuel-related raw materials across international markets.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Korea", "Asia", "Global"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/8 px-4 py-5 text-center">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="mt-1 text-xs text-white/48">Trading network</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
