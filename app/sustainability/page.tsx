import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "ORCA KOREA supports sustainable sourcing, circular economy supply chains, traceability, and ESG-oriented biofuel feedstock trading.",
};

const pillars = [
  ["Sustainable Sourcing", "Preference for waste, residue, and bio-based materials that can support renewable fuel and circular economy markets."],
  ["Traceability Mindset", "Origin, handling, logistics, and documentation are treated as part of the commercial quality discussion."],
  ["Compliance Awareness", "An ISCC-ready tone and process mindset can support buyer requirements without claiming certification unless explicitly confirmed."],
  ["Circular Economy", "UCO, fatty acid streams, and related feedstocks can help turn recovered materials into higher-value energy and industrial inputs."],
];

export default function SustainabilityPage() {
  return (
    <main>
      <section className="bg-forest px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sustainability"
            title="Biofuel feedstock trading with ESG-aware discipline."
            description="ORCA KOREA supports sustainable sourcing conversations through quality review, traceability awareness, responsible documentation, and practical supply-chain coordination."
            theme="dark"
          />
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {pillars.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-mist p-8">
              <h2 className="text-2xl font-semibold text-navy">{title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Supply Chain"
            title="Supporting biofuel and SAF feedstock markets."
            description="As renewable fuel demand grows, supply-chain confidence depends on product suitability, documented origin, contamination control, and careful trade execution. ORCA KOREA positions sustainability as a working standard in commercial discussions."
            theme="dark"
          />
        </div>
      </section>
    </main>
  );
}
