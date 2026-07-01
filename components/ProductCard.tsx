import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      id={product.slug}
      className="group flex h-full flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-mint/50 hover:shadow-premium"
    >
      <div>
        <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-mint to-gold" />
        <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Typical applications
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.applications.map((application) => (
              <span
                key={application}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {application}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Link
        href={`/products#${product.slug}`}
        className="mt-7 inline-flex text-sm font-semibold text-forest transition group-hover:text-mint"
      >
        Review product details
      </Link>
    </article>
  );
}
