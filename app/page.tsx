import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";

const highlights = [
  {
    title: "Sustainable Feedstock Focus",
    text: "Trading programs centered on waste, residue, and bio-based raw materials for renewable fuel and industrial supply chains.",
  },
  {
    title: "International Market Access",
    text: "Korea-based coordination for buyers and suppliers across Asia, India, Southeast Asia, China, Europe, and global markets.",
  },
  {
    title: "Quality-Control Mindset",
    text: "Commercial discussions supported by specification review, documentation discipline, and shipment-by-shipment verification.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Business"
            title="A trusted Korean trading partner for bioenergy feedstocks."
            description="ORCA KOREA supports domestic and international partners with practical sourcing, trading, and logistics coordination for renewable fuel raw materials and related industrial products."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-mist p-7">
                <p className="text-lg font-semibold text-navy">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Products"
              title="Biofuel feedstocks and industrial raw materials."
              description="Product availability, specifications, shipment terms, and documentation are discussed by inquiry and market condition."
            />
            <Link href="/products" className="shrink-0 rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-navy">
              View All Products
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Global Trading"
            title="Structured sourcing, documentation, and logistics for cross-border supply."
            description="ORCA KOREA works with buyers and suppliers to coordinate product inquiries, shipment terms, documentation, and quality-control expectations across international trade lanes."
            theme="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["FOB and CIF discussions", "Container, flexibag, and bulk concepts", "Supplier and buyer coordination", "Traceability and compliance mindset"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/7 p-6">
                <div className="mb-5 h-1 w-12 rounded-full bg-gold" />
                <p className="text-base font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#f7faf8,#eef5f1)] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-forest">Contact</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold text-navy md:text-5xl">
                Discuss product inquiries, sourcing proposals, and trading opportunities.
              </h2>
            </div>
            <Link href="/contact" className="rounded-md bg-navy px-6 py-3 text-center text-sm font-semibold text-white hover:bg-forest">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
