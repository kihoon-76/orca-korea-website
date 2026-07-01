import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ORCA KOREA for product inquiries, sourcing proposals, and international bioenergy trading opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Start a product inquiry or sourcing discussion."
            description="For product inquiries, sourcing proposals, and international trading opportunities, please contact us."
            theme="dark"
          />
        </div>
      </section>
      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg bg-navy p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-mint">Company Inquiry</p>
            <h2 className="mt-4 text-3xl font-semibold">ORCA KOREA</h2>
            <p className="mt-5 leading-8 text-white/70">
              Contact our trading team for biofuel feedstocks, sustainable raw materials,
              product availability, sourcing proposals, and international shipment discussions.
            </p>
            <div className="mt-8 grid gap-5 text-sm">
              <div>
                <p className="font-semibold text-gold">Email</p>
                <p className="mt-1 text-white/72">info@orca-korea.com</p>
              </div>
              <div>
                <p className="font-semibold text-gold">Business Focus</p>
                <p className="mt-1 text-white/72">Bioenergy feedstocks, sustainable raw materials, and global trading</p>
              </div>
              <div>
                <p className="font-semibold text-gold">Location</p>
                <p className="mt-1 text-white/72">Korea-based, internationally connected</p>
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
