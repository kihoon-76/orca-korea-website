import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Facilities & Network",
  description:
    "ORCA KOREA coordinates collection, processing, refining, logistics, storage, and partner network activities through operational collaboration.",
};

const network = [
  ["Collection", "Coordination with collection and supply channels for waste and residue-based feedstocks such as UCO."],
  ["Processing", "Operational collaboration with processing partners where product preparation or handling is required."],
  ["Refining", "Commercial connection with refining and downstream buyers according to product suitability and market needs."],
  ["Logistics", "Shipment planning discussions for container, flexibag, bulk, and destination-specific requirements."],
  ["Storage", "Storage and handling conversations are arranged through appropriate partner network options."],
  ["Documentation", "Commercial documents, product records, and quality materials are coordinated by transaction requirements."],
];

export default function FacilitiesNetworkPage() {
  return (
    <main>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Facilities & Network"
            title="Partner network and operational collaboration for bioenergy trade."
            description="ORCA KOREA uses cautious, practical coordination across collection, processing, logistics, storage, and trading partners. Exact capabilities are confirmed by project and transaction."
            theme="dark"
          />
        </div>
      </section>
      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {network.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-7">
              <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-mint to-gold" />
              <h2 className="text-xl font-semibold text-navy">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
