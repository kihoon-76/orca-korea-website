"use client";

const products = [
  "Used Cooking Oil (UCO)",
  "Biodiesel Pitch",
  "Bio Heavy Oil",
  "Acid Oil",
  "PFAD",
  "CNSL",
  "Mixed Fatty Acid",
  "Animal Fat Oil",
  "Vegetable Fat Oil",
  "SAF Feedstock",
  "General Inquiry",
];

export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-premium md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input
            className="rounded-md border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
            name="name"
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Company
          <input
            className="rounded-md border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
            name="company"
            placeholder="Company name"
            type="text"
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input
            className="rounded-md border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
            name="email"
            placeholder="name@company.com"
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Country
          <input
            className="rounded-md border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
            name="country"
            placeholder="Country"
            type="text"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Product of Interest
        <select
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
          name="product"
          defaultValue=""
        >
          <option value="" disabled>
            Select a product or inquiry type
          </option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Message
        <textarea
          className="min-h-36 rounded-md border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
          name="message"
          placeholder="Tell us about your inquiry, target product, quantity range, origin, destination, and preferred shipment terms."
        />
      </label>
      <button
        className="rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy focus:outline-none focus:ring-4 focus:ring-mint/20"
        type="button"
      >
        Submit Inquiry
      </button>
      <p className="text-xs leading-6 text-slate-500">
        This static form is prepared for UI presentation. Connect it to your preferred form handler before production launch.
      </p>
    </form>
  );
}
