import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "ORCA KOREA | Sustainable Bioenergy Feedstocks and Global Trading",
    template: "%s | ORCA KOREA",
  },
  description:
    "ORCA KOREA is a Korea-based bioenergy, biofuel feedstock, and global trading company connecting sustainable raw materials with international partners.",
  keywords: [
    "ORCA KOREA",
    "bioenergy trading",
    "biofuel feedstock",
    "used cooking oil",
    "UCO",
    "bio heavy oil",
    "SAF feedstock",
    "PFAD",
    "CNSL",
    "global trading Korea",
  ],
  metadataBase: new URL("https://orca-korea.com"),
  openGraph: {
    title: "ORCA KOREA",
    description:
      "Sustainable bioenergy feedstocks and global trading expertise from Korea.",
    url: "https://orca-korea.com",
    siteName: "ORCA KOREA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
