export type Product = {
  name: string;
  slug: string;
  description: string;
  applications: string[];
  sourcing: string;
  quality: string;
};

export const products: Product[] = [
  {
    name: "Used Cooking Oil (UCO)",
    slug: "uco",
    description:
      "Recovered cooking oil feedstock for biodiesel, renewable diesel, and sustainable aviation fuel supply chains.",
    applications: ["Biodiesel", "Renewable diesel", "SAF feedstock pathways"],
    sourcing:
      "Sourced through collection and trading channels with attention to origin, handling, and export documentation.",
    quality:
      "Quality discussions focus on moisture, impurities, FFA, contamination control, and shipment consistency.",
  },
  {
    name: "Biodiesel Pitch",
    slug: "biodiesel-pitch",
    description:
      "A biodiesel industry by-product traded for downstream industrial and energy-related uses.",
    applications: ["Industrial fuel use", "Processing feedstock", "Blending applications"],
    sourcing:
      "Available through qualified supply channels and project-based trading arrangements.",
    quality:
      "Specifications are reviewed by shipment, with emphasis on stable documentation and representative sampling.",
  },
  {
    name: "Bio Heavy Oil",
    slug: "bio-heavy-oil",
    description:
      "Bio-based heavy oil for power generation and industrial energy applications where approved by the buyer's market.",
    applications: ["Power generation", "Industrial boilers", "Energy recovery"],
    sourcing:
      "Trading programs can support domestic and international requirements subject to applicable regulations.",
    quality:
      "Typical review areas include calorific value, water content, ash, sulfur, viscosity, and handling properties.",
  },
  {
    name: "Acid Oil",
    slug: "acid-oil",
    description:
      "Fatty acid-rich oil stream used in oleochemical, biofuel, and industrial processing markets.",
    applications: ["Biodiesel feedstock", "Oleochemical production", "Industrial processing"],
    sourcing:
      "Sourced from refinery and processing networks with shipment terms aligned to buyer requirements.",
    quality:
      "Quality checks may include FFA profile, moisture, impurities, color, and loading condition.",
  },
  {
    name: "PFAD",
    slug: "pfad",
    description:
      "Palm Fatty Acid Distillate traded for biofuel, oleochemical, soap, and industrial markets.",
    applications: ["Biofuel feedstock", "Oleochemicals", "Soap and industrial uses"],
    sourcing:
      "Procured through regional supply channels with responsible sourcing and documentation considerations.",
    quality:
      "Commercial review includes FFA, moisture, impurities, color, and agreed cargo specifications.",
  },
  {
    name: "CNSL",
    slug: "cnsl",
    description:
      "Cashew Nut Shell Liquid, a renewable industrial raw material used in resins, friction materials, coatings, and fuels.",
    applications: ["Resins", "Friction materials", "Coatings", "Industrial fuel"],
    sourcing:
      "Traded internationally through supplier relationships and shipment planning for container or bulk movements.",
    quality:
      "Specification work can address cardanol content, moisture, impurities, acidity, and packaging condition.",
  },
  {
    name: "Mixed Fatty Acid",
    slug: "mixed-fatty-acid",
    description:
      "Mixed fatty acid streams for industrial, oleochemical, and biofuel-oriented processing.",
    applications: ["Oleochemicals", "Biodiesel feedstock", "Industrial blending"],
    sourcing:
      "Supply is arranged according to origin, grade, logistics mode, and target specifications.",
    quality:
      "Shipment review focuses on composition, moisture, impurities, FFA, and buyer-approved parameters.",
  },
  {
    name: "Animal Fat Oil",
    slug: "animal-fat-oil",
    description:
      "Rendered animal fat oil feedstock for biofuel and industrial markets, subject to origin and compliance requirements.",
    applications: ["Biodiesel", "Renewable diesel", "Industrial processing"],
    sourcing:
      "Trading is handled with careful review of origin, handling, documentation, and applicable import rules.",
    quality:
      "Common quality points include FFA, MIU, titer, moisture, impurities, and traceability records.",
  },
  {
    name: "Vegetable Fat Oil",
    slug: "vegetable-fat-oil",
    description:
      "Vegetable fat oil streams traded for biofuel, oleochemical, and industrial processing uses.",
    applications: ["Biofuel feedstock", "Oleochemicals", "Industrial applications"],
    sourcing:
      "Sourcing programs can be structured across Asian and global supply markets depending on buyer needs.",
    quality:
      "Specifications are coordinated by lot, including moisture, impurities, FFA, and handling condition.",
  },
  {
    name: "SAF Feedstock",
    slug: "saf-feedstock",
    description:
      "Eligible waste and residue-based feedstock candidates for sustainable aviation fuel supply chains.",
    applications: ["SAF pathways", "Renewable fuels", "Low-carbon fuel supply chains"],
    sourcing:
      "ORCA KOREA supports feedstock trading conversations with an ISCC-ready mindset without claiming certification unless confirmed.",
    quality:
      "Traceability, origin records, contamination control, and compliance documentation are central to each discussion.",
  },
];
