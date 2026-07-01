import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ORCA KOREA product areas including UCO, Biodiesel Pitch, Bio Heavy Oil, Acid Oil, PFAD, CNSL, fatty acid streams, oils, and SAF feedstock.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products"
            title="Sustainable feedstocks and industrial materials for global trade."
            description="ORCA KOREA supports product inquiries with careful specification review, responsible sourcing discussions, and shipment documentation aligned to buyer requirements."
            theme="dark"
          />
        </div>
      </section>
      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Product Details"
            title="Commercial details are reviewed by inquiry, origin, and shipment plan."
            description="The descriptions below are intentionally general. Final specifications, quantities, inspection requirements, documentation, and logistics terms should be confirmed for each transaction."
          />
          <div className="mt-12 grid gap-6">
            {products.map((product) => (
              <article key={product.slug} id={product.slug} className="rounded-lg border border-slate-200 p-7">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy">{product.name}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-forest">Applications</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{product.applications.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest">Trading / Sourcing</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{product.sourcing}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest">Quality Control</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{product.quality}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
