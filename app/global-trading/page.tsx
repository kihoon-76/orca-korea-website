import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Global Trading",
  description:
    "ORCA KOREA supports import and export trading for bioenergy feedstocks across Korea, Asia, India, Southeast Asia, China, Europe, and global markets.",
};

const regions = ["Korea", "Asia", "India", "Southeast Asia", "China", "Europe", "Global Markets"];
const capabilities = [
  "Import and export trading coordination",
  "FOB and CIF commercial discussions",
  "Container, flexibag, and bulk shipment concepts",
  "Supplier and buyer partnership development",
  "Product documentation and logistics communication",
  "Quality-control review by specification and shipment",
];

export default function GlobalTradingPage() {
  return (
    <main>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Global Trading"
            title="Cross-border feedstock trading for buyers, suppliers, and energy partners."
            description="ORCA KOREA connects international demand and supply through responsive communication, practical logistics planning, and documentation-focused trade execution."
            theme="dark"
          />
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-forest">Network</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy">Regional access with a global trading perspective.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {regions.map((region) => (
                <span key={region} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
                  {region}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability} className="rounded-lg border border-slate-200 bg-mist p-6">
                <p className="font-semibold text-navy">{capability}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
