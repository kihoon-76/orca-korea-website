import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ORCA KOREA, a Korea-based bioenergy feedstock and global trading company.",
};

const timeline = [
  ["Foundation", "Established as a Korea-based company focused on bioenergy, raw materials, and international trade."],
  ["Feedstock Expansion", "Expanded product conversations across UCO, bio heavy oil, CNSL, fatty acid streams, PFAD, and related materials."],
  ["Global Direction", "Continues building buyer and supplier relationships across Asia and international renewable fuel markets."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About ORCA KOREA"
            title="A practical, quality-focused bioenergy trading partner from Korea."
            description="ORCA KOREA handles sustainable raw materials and biofuel-related products for domestic and international partners. The company supports sourcing, trading, documentation, and market coordination with a careful B2B approach."
            theme="dark"
          />
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-forest">Vision</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy">Connect renewable feedstock markets with responsible trade execution.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              ORCA KOREA aims to become a trusted Korean partner for bioenergy feedstock trade by combining global market awareness, supplier communication, logistics coordination, and disciplined quality review.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-mist p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-forest">Mission</p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-navy">
              Support buyers and suppliers with reliable sourcing, transparent communication, and commercially realistic execution.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="History"
            title="Focused growth in bioenergy and sustainable trading."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {timeline.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-7">
                <p className="text-lg font-semibold text-navy">{title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
