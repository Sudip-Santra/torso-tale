import { Product, ProductDetails } from "./products";
import { ProductCategory } from "@/types/product";

// Featured products for the home page categories section
export const featuredProducts: Product[] = [
  // Mulmul Sarees
  {
    id: "mulmul-featured-001",
    name: "Mul Melody",
    price: 1699,
    category: "Mulmul",
    images: [
      "/assets/homepage-collection/Mulmul1700_navyblue2.webp",
      "/assets/homepage-collection/Mulmul1700_navyblue1.webp",
      "/assets/homepage-collection/Mulmul1700_navyblue3.webp"
    ],
    description: "These sarees are perfect for hot and humid climates."
,
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal’s weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Navy Blue",
      "Blouse Piece": "No",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only.",
      "Avoid steam ironing.",
      "Can use starch after 3-4 washes.",
      "Use extremely low heat for ironing."
    ],
    keywords: ["mulmul", "navy blue", "cotton", "handwoven", "parijat", "traditional", "light"],
    isNew: true,
    isBestseller: true
  },
  
  // Linen Sarees
  {
    id: "linen-featured-001",
    name: "The Prism",
    price: 3399,
    category: "Linen",
    images: [
      "/assets/homepage-collection/Barfi_linen_purple2.webp",
      "/assets/homepage-collection/Barfi_linen_purple3.webp",
      "/assets/homepage-collection/Barfi_linen_purple1.webp",
      "/assets/homepage-collection/Barfi_linen_purple4.webp"
    ],
    description: "This saree showcases the finest linen fabric, and tends to have a clean fall.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "Tacao Purple",
      "Blouse Piece": "Yes, unstitched",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only.",
      "Avoid steam ironing.",
      "Use low heat for ironing."
    ],
    keywords: ["linen", "purple", "barfi", "handwoven", "formal", "premium"],
    isBestseller: true
  },
  
  // Tissue Sarees
  {
    id: "tissue-featured-001",
    name: "Moonlight",
    price: 1799,
    category: "Tissue",
    images: [
      "/assets/homepage-collection/raaga_tissue_skyblue2.webp",
      "/assets/homepage-collection/raaga_tissue_skyblue1.webp",
      "/assets/homepage-collection/Raaga_Tissue_skyblue3.webp",
    ],
    description: "These sarees have the perfect sheen for modest occasions in hot and humid climates.",
    highlights: [
      "Soft and light weight: Cotton Tissue fabric is worn for its softness and lightweight feel.",
      "Look and Comfort: Crafted from handwoven cotton tissue, ensuring comfortable texture with its subtle shine making it perfect for modest occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Cotton Tissue",
      "Color": "Sky Blue",
      "Blouse Piece": "No",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean/Light hand wash only.",
      "Avoid steam ironing.",
      "Use extremely low heat for ironing."
    ],
    keywords: ["tissue", "sky blue", "raaga", "handwoven", "formal", "premium"],
    isNew: true
  },
  
  // Khadi Sarees
  {
    id: "resham-featured-001",
    name: "Rang-e-Resham",
    price: 3599,
    category: "Khadi",
    images: [
      "/assets/homepage-collection/Resham_Kota1.webp",
      "/assets/homepage-collection/Resham_Kota2.webp",
      "/assets/homepage-collection/resham_kota3.webp",
    ],
    description: "Resham Rang is handloomed with resham silk thread which makes it lightweight, breathable and elegant with its intricate patterns and threadwork on the border.",
    highlights: [
      "Comfort: Crafted from handwoven resham silk ensures its breathability and makes it comfortable and perfect  for special occasions.",
      "Traditional Craftsmanship: Features kota checks all over and handloom designed pallu, showcasing Bengal’s weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Resham Kota",
      "Color": "Purplish",
      "Blouse Piece": "Yes, unstitched",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only.",
      "Avoid steam ironing.",
      "Use extremely low heat for ironing."
    ],
    keywords: ["khadi", "resham", "kota", "handwoven", "traditional"],
    isBestseller: true
  },
  
  // Karat Linen Sarees
  {
    id: "linen-featured-002",
    name: "Asymmetry",
    price: 2250,
    category: "Linen",
    images: [
      "/assets/homepage-collection/karat_linen_blue1.webp",
      "/assets/collections/Karat_Linen_blue.webp",
      "/assets/collections/Karat_Linen_blue2.webp",
      "/assets/collections/karat_linen-Home_Page.webp"
    ],
    description: "This saree showcases Jamdani weaves in the pattern of Ganga-Yamuna border on linen fabric.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Jamdani weaving: Crafted with precision and care. The intricate Jamdani weaving adds a touch of traditional charm, making this saree a piece enhancing beauty.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Linen",
      "Color": "Ocean Blue with Pink & Orange Jamdani border",
      "Blouse Piece": "Yes, unstitched",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only.",
      "Avoid steam ironing.",
      "Use low heat for ironing."
    ],
    keywords: ["linen", "blue", "karat", "handwoven", "premium"],
    isNew: true
  },
  
  // Jamdani Sarees
  {
    id: "jamdani-featured-001",
    name: "Phooldaan",
    price: 1999,
    category: "Linen",
    images: [
      "/assets/homepage-collection/Jamdani_2.webp",
      "/assets/homepage-collection/Jamdani_1.webp",
      "/assets/homepage-collection/Jamdani_3.webp",
    ],
    description: "Crafted from the finest cotton fabric, this saree seamlessly blends comfort, grace, and timeless beauty.",
    highlights: [
      "Softness and comfort: Cotton Jamdani is a soft, breathable and very comfortable fabric ideal for all-day wear, especially for warmer climates.",
      "Jamdani weaving: Jamdani sarees are mainly known for its intricate motifs and patterns, often featuring floral and geometric designs.",
      "Ease movement: It’s gentle texture, gives the saree a soft touch and ensures comfort and ease of movement.",
      "Festive look: Its striking colour symbolizes energy and celebration. It instantly grabs attention and radiates positivity making it perfect for homely occasions."
    ],
    details: {
      "Product Type": "Saree (Half pink -Half blue)",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Cotton Jamdani",
      "Color": "Hot Pink and Indigo Blue",
      "Blouse Piece": " Yes, unstitched",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only.",
      "Avoid steam ironing.",
      "Can use starch after 3-4 washes.",
      "Use low heat for ironing."
    ],
    keywords: ["jamdani", "handwoven", "premium", "traditional", "artisan", "pink"],
    isNew: true,
    isBestseller: true
  }
];

export default featuredProducts;
