import { ProductCategory } from "@/types/product";

export interface ProductDetails {
  "Product Type": string;
  "Saree Length": string;
  "Fabric": string;
  "Color": string;
  "Blouse Piece": string;
  "Weaving Cluster": string;
  "Craft Technique": string;
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  images: string[];
  description: string;
  highlights: string[];
  details: ProductDetails;
  washCare: string[];
  keywords: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

// Sample descriptions that can be used for products
const descriptions = [
  "Experience the softness and elegance of pure handwoven saree. Crafted with precision and care, this saree boasts intricate designs that reflect the rich heritage of India's textile tradition. Perfect for both everyday wear and special occasions.",
  "Immerse yourself in luxury with this handcrafted saree. The delicate patterns and attention to detail make this piece a true work of art, representing centuries of traditional craftsmanship combined with contemporary design sensibilities.",
  "This beautifully crafted saree brings together tradition and modernity. The breathable fabric ensures comfort throughout the day, while the distinctive patterns make a statement at any gathering or celebration.",
  "A masterpiece of traditional artistry, this saree features intricate handwork that showcases the skill of master artisans. The lightweight fabric drapes elegantly, making it perfect for both formal events and casual gatherings.",
  "Celebrate India's rich textile heritage with this exquisite handwoven saree. Each thread is carefully selected and woven to create patterns that tell stories of tradition while remaining fashionably relevant for the modern woman."
];

// Sample highlights that can be used for products
const highlightSets = [
  [
    "Comfort: Crafted from handwoven natural fibers, ensuring breathability and lightness.",
    "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing India's weaving artistry."
  ],
  [
    "Eco-friendly: Made with sustainable practices and natural dyes.",
    "Versatile Design: Suitable for both casual and formal occasions."
  ],
  [
    "Unique Patterns: Each piece features slight variations, making it truly one-of-a-kind.",
    "Premium Quality: Selected materials ensure durability and lasting beauty."
  ],
  [
    "Artisanal Value: Supports traditional craftspeople and their communities.",
    "Contemporary Appeal: Classic designs reimagined for the modern woman."
  ],
  [
    "Lightweight Comfort: Easy to drape and comfortable for all-day wear.",
    "Timeless Elegance: A design that transcends seasonal fashion trends."
  ]
];

// Weaving clusters
const weavingClusters = [
  "West Bengal",
  "Tamil Nadu",
  "Odisha",
  "Gujarat",
  "Rajasthan",
  "Assam",
  "Madhya Pradesh",
  "Maharashtra",
  "Telangana",
  "Karnataka"
];

// Colors
const colors = [
  "Navy Blue",
  "Maroon",
  "Forest Green",
  "Deep Purple",
  "Crimson",
  "Mustard Yellow",
  "Teal",
  "Rust Orange",
  "Emerald Green",
  "Royal Blue",
  "Beige",
  "Coral Pink",
  "Charcoal Grey",
  "Magenta",
  "Olive Green"
];

// Specific Mulmul saree products
const specificMulmulSarees: Product[] = [
  {
    id: "101",
    name: "Shefali",
    price: 1450,
    category: "Mulmul",
    images: [
      "/assets/collections/Parijat_Mul_blue3.webp",
      "/assets/collections/Parijat_Mul_blue1.webp",
      "/assets/collections/Parijat_Mul_blue2.webp",
      "/assets/collections/Parijat_Mul_blue4.webp"
    ],
    description: "This saree is just butter that you can wear with Prajkatas all over.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Royal Blue",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes", 
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "blue", "royal blue", "handloom", "bengal", "parijat", "daily wear"],
    isNew: true
  },
  {
    id: "102",
    name: "Shefali",
    price: 1450,
    category: "Mulmul",
    images: [
      "/assets/collections/Parijat_Mul_red5.webp",
      "/assets/collections/Parijat_Mul_red2.webp",
      "/assets/collections/Parijat_Mul_red4.webp",
      "/assets/collections/Parijat_Mul_red3(1).webp",
    ],
    description: "These sarees are just butter that you can wear with Prajkatas all over.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Red",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes", 
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "red", "handloom", "bengal", "parijat", "daily wear"],
    isNew: true
  },
  {
    id: "103",
    name: "Shefali",
    price: 1450,
    category: "Mulmul",
    images: [
      "/assets/collections/Parijat_Mul_light_pink4.webp",
      "/assets/collections/Parijat_Mul_light_pink3.webp",
      "/assets/collections/Parijat_Mul_light_pink1.webp",
      "/assets/collections/Parijat_Mul_light_pink2.webp",
    ],
    description: "These sarees are just butter that you can wear with Prajkatas all over.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Flamingo Pink",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes", 
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "pink", "flamingo pink", "handloom", "bengal", "parijat", "daily wear"],
    isNew: true
  },
  {
    id: "104",
    name: "Shefali",
    price: 1450,
    category: "Mulmul",
    images: [
      "/assets/collections/Parijat_Mul_green4.webp",
      "/assets/collections/Parijat_Mul_green1.webp",
      "/assets/collections/Parijat_Mul_green3.webp",
      "/assets/collections/Parijat_Mul_green2.webp",
    ],
    description: "These sarees are just butter that you can wear with Prajkatas all over.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Cadmium Green",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes", 
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "green", "cadmium green", "handloom", "bengal", "parijat", "daily wear"],
    isNew: true
  },
  {
    id: "105",
    name: "Mul Melody",
    price: 1699,
    category: "Mulmul",
    images: [
      "/assets/saree16.jpg",
      "/assets/saree17.jpg",
      "/assets/saree18.jpg"
    ],
    description: "These sarees are perfect for hot and humid climates.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Navy Blue",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes", 
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "navy blue", "handloom", "bengal", "melody", "daily wear"],
    isBestseller: true
  },
  {
    id: "106",
    name: "Mul Melody",
    price: 1699,
    category: "Mulmul",
    images: [
      "/assets/collections/Mulmul1700_Violet2.webp",
      "/assets/collections/Mulmul1700_Violet1.webp",
      "/assets/collections/Mulmul1700_Violet3.webp",
      "/assets/collections/Mulmul1700_Violet4.webp",
    ],
    description: "These sarees are perfect for hot and humid climates.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Lavender",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes",
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "lavender", "purple", "handloom", "bengal", "melody", "daily wear"],
    isBestseller: true
  },
  {
    id: "107",
    name: "Ocean Breeze",
    price: 2299,
    category: "Mulmul",
    images: [
      "/assets/collections/Mulmul2300_sea_green2.webp",
      "/assets/collections/Mulmul2300_sea_green1.webp",
      "/assets/collections/Mulmul2300_sea_green3.webp",
      "/assets/collections/Mulmul2300_sea_green4.webp",
    ],
    description: "These sarees are perfect for hot and humid climates.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Light Sea Green",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes",
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "sea green", "light sea green", "handloom", "bengal", "ocean", "breeze", "daily wear"],
    isBestseller: true
  },
  {
    id: "108",
    name: "Ocean Breeze",
    price: 2299,
    category: "Mulmul",
    images: [
      "/assets/collections/Mulmul2300_teal5.webp",
      "/assets/collections/Mulmul2300_teal4.webp",
      "/assets/collections/Mulmul2300_teal3.webp",
      "/assets/collections/Mulmul2300_teal2.webp",
    ],
    description: "These sarees are perfect for hot and humid climates.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Teal",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes",
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "teal", "handloom", "bengal", "ocean", "breeze", "daily wear"],
    isBestseller: true
  },
  {
    id: "109",
    name: "Floral Frost",
    price: 3199,
    category: "Mulmul",
    images: [
      "/assets/collections/Mul_big_design_offwhite5.webp",
      "/assets/collections/Mul_big_design_offwhite4.webp",
      "/assets/collections/Mul_big_design_offwhite3.webp",
      "/assets/collections/Mul_big_design_offwhite1.webp",
    ],
    description: "This saree is a perfect example of pure and calming beauty of handwoven designs and its emerging colours.",
    highlights: [
      "Soft and light weight: The mulmul fabric is renowned for its softness and lightweight feel.",
      "Comfort: Crafted from handwoven Mul cotton, ensuring breathability and comfortable texture making it perfect for everyday wear or special occasions.",
      "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing Bengal's weaving artistry."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Mul Cotton",
      "Color": "Champagne Ivory",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes",
      "Use extremely low heat for ironing"
    ],
    keywords: ["mulmul", "cotton", "soft", "offwhite", "ivory", "champagne", "handloom", "bengal", "floral", "frost", "daily wear", "special occasions"],
    isNew: true
  },
];

// Specific Linen saree products
const specificLinenSarees: Product[] = [
  {
    id: "201",
    name: "Asymmetry",
    price: 2250,
    category: "Linen",
    images: [
      "/assets/saree1.jpg",
      "/assets/saree2.jpg",
      "/assets/saree3.jpg"
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
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "jamdani", "blue", "ocean blue", "handloom", "formal", "business casual", "special occasions"],
    isNew: true
  },

  {
    id: "203",
    name: "The Prism",
    price: 3399,
    category: "Linen",
    images: [
      "/assets/saree9.jpg",
      "/assets/saree10.jpg",
      "/assets/saree11.jpg"
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
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "barfi", "purple", "tacao purple", "handloom", "zari", "formal", "prism"],
    isBestseller: true
  },
  {
    id: "204",
    name: "The Prism",
    price: 3399,
    category: "Linen",
    images: [
      "/assets/collections/Barfi_Linen_pink4.webp",
      "/assets/collections/Barfi_Linen_pink2.webp",
      "/assets/collections/Barfi_Linen_pink1.webp",
      "/assets/collections/Barfi_Linen_pink3.webp",
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
      "Color": "Magenta Pink",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "barfi", "pink", "magenta pink", "handloom", "zari", "formal", "prism"],
    isNew: true
  },
  {
    id: "205",
    name: "Sutram",
    price: 2050,
    category: "Linen",
    images: [
      "/assets/collections/Plain_Linen_Beetroot2.webp",
      "/assets/collections/Plain_Linen_Beetroot1.webp",
      "/assets/collections/Plain_Linen_Beetroot4.webp",
    ],
    description: "This single colour saree proves that \"Less is more\" in the finest linen fabric.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "Beetroot Pink",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "plain", "pink", "beetroot pink", "handloom", "zari", "formal", "sutram", "minimalist"],
    isBestseller: true
  },
  {
    id: "206",
    name: "Sutram",
    price: 2050,
    category: "Linen",
    images: [
      "/assets/collections/Plain_Linen__green2.webp",
      "/assets/collections/Plain_Linen__green4.webp",
      "/assets/collections/Plain_Linen__green3.webp",
      "/assets/collections/Plain_Linen__green1.webp",
    ],
    description: "This single colour saree proves that \"Less is more\" in the finest linen fabric.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "British Racing Green",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "plain", "green", "british racing green", "handloom", "zari", "formal", "sutram", "minimalist"],
    isBestseller: true
  },
  {
    id: "207",
    name: "Sutram",
    price: 2050,
    category: "Linen",
    images: [
      "/assets/collections/Plain_Linen_pastel3.webp",
      "/assets/collections/Plain_Linen_pastel1.webp",
      "/assets/collections/Plain_Linen_pastel2.webp",
    ],
    description: "This single colour saree proves that \"Less is more\" in the finest linen fabric.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "Baby Blue",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "plain", "blue", "baby blue", "light blue", "handloom", "zari", "formal", "sutram", "minimalist"],
    isNew: true
  },
  {
    id: "208",
    name: "Firefly",
    price: 2499,
    category: "Linen",
    images: [
      "/assets/collections/Sequin_linen_blue2.webp",
      "/assets/collections/Sequin_linen_blue1.webp",
      "/assets/collections/Sequin_linen_blue3.webp",
      "/assets/collections/Sequin_linen_blue4.webp",
    ],
    description: "This saree has sequins woven through the linen threads which twinkle while you wear.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "Navy Teal",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use extremely low heat for ironing"
    ],
    keywords: ["linen", "sequin", "blue", "navy teal", "handloom", "zari", "formal", "firefly", "sparkle"],
    isNew: true
  },
  {
    id: "209",
    name: "Firefly",
    price: 2499,
    category: "Linen",
    images: [
      "/assets/collections/Sequin_linen_brown3.webp",
      "/assets/collections/Sequin_linen_brown1.webp",
      "/assets/collections/Sequin_linen_brown2.webp",
    ],
    description: "This saree has sequins woven through the linen threads which twinkle while you wear.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "Brown",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "sequin", "brown", "handloom", "zari", "formal", "firefly", "sparkle"],
    isNew: true
  },
  {
    id: "210",
    name: "Bloom Soon",
    price: 3499,
    category: "Linen",
    images: [
      "/assets/collections/Tulip_Linen_Black2.webp",
      "/assets/collections/Tulip_Linen_Black1.webp",
      "/assets/collections/Tulip_Linen_Black3.webp"
    ],
    description: "This saree showcases handwoven Tulips all over, and Linen's natural grace.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Handloom weaving: Crafted with precision and care. The intricate handloom weaving adds a touch of artisanal charm, making this saree a masterpiece of traditional craftsmanship.",
      "Elegant drape: This saree gives a perfect drape and fall which makes it perfect for formal, business-casual events or special occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Pure Linen with Zari border",
      "Color": "Black",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "tulip", "black", "handloom", "zari", "formal", "bloom", "floral"],
    isBestseller: true
  },
];

// Specific Khadi saree products
const specificKhadiSarees: Product[] = [
  {
    id: "301",
    name: "Khadi Kinara",
    price: 1299,
    category: "Khadi",
    images: [
      "/assets/collections/Khadi_contrast_Pallu_red_n_yellow2.webp",
      "/assets/collections/Khadi_contrast_Pallu_red_n_yellow1.webp",
      "/assets/collections/Khadi_contrast_Pallu_red_n_yellow3.webp",
      "/assets/collections/Khadi_contrast_Pallu_red_n_yellow4.webp",
    ],
    description: "Khadi is not just a piece of fabric, it's a statement - of sustainability, heritage and style all woven together.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Body - Mustard, Pallu - Crimson Red",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "contrast", "pallu", "red", "yellow", "mustard", "crimson", "handloom", "sustainable", "affordable"],
    isNew: true
  },
  {
    id: "302",
    name: "Aadi Khadi",
    price: 1299,
    category: "Khadi",
    images: [
      "/assets/collections/Plain_Khadi_Beetroot3.webp",
      "/assets/collections/Plain_Khadi_Beetroot1.webp",
      "/assets/collections/Plain_Khadi_Beetroot2.webp",
    ],
    description: "Khadi is not just a piece of fabric, it's a statement - of sustainability, heritage and style all woven together.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Magenta Pink",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "plain", "beetroot", "magenta pink", "handloom", "sustainable", "affordable"],
    isNew: true
  },
  {
    id: "303",
    name: "Aadi Khadi",
    price: 1299,
    category: "Khadi",
    images: [
      "/assets/collections/Plain_khadi_bluish_yellow3.webp",
      "/assets/collections/Plain_khadi_bluish_yellow1.webp",
      "/assets/collections/Plain_khadi_bluish_yellow2.webp",
      "/assets/collections/Plain_khadi_bluish_yellow4.webp",
    ],
    description: "Khadi is not just a piece of fabric, it's a statement - of sustainability, heritage and style all woven together.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Old Gold Dual Shade",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "plain", "bluish yellow", "old gold", "dual shade", "handloom", "sustainable", "affordable"],
    isNew: true
  },
  {
    id: "304",
    name: "Aadi Khadi",
    price: 1299,
    category: "Khadi",
    images: [
      "/assets/collections/Plain_khadi_light_green1.webp",
      "/assets/collections/Plain_khadi_light_green1(1).webp",
      "/assets/collections/Plain_khadi_light_green4.webp",
    ],
    description: "Khadi is not just a piece of fabric, it's a statement - of sustainability, heritage and style all woven together.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Tea Green",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "plain", "light green", "tea green", "handloom", "sustainable", "affordable"],
    isNew: true
  },
  {
    id: "305",
    name: "Aadi Khadi",
    price: 1299,
    category: "Khadi",
    images: [
      "/assets/Plain_Khadi_pink4.webp",
      "/assets/Plain_Khadi_pink3.webp",
      "/assets/Plain_Khadi_pink1.webp",
      "/assets/Plain_Khadi_pink2.webp",
    ],
    description: "Khadi is not just a piece of fabric, it's a statement - of sustainability, heritage and style all woven together.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Taffy Pink",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "plain", "pink", "taffy pink", "handloom", "sustainable", "affordable"],
    isBestseller: true
  },
  {
    id: "306",
    name: "Aadi Khadi",
    price: 1299,
    category: "Khadi",
    images: [
      "/assets/collections/Plain_khadi_teal_green2.webp",
      "/assets/collections/Plain_khadi_teal_green1.webp",
      "/assets/collections/Plain_khadi_teal_green4.webp",
    ],
    description: "Khadi is not just a piece of fabric, it's a statement - of sustainability, heritage and style all woven together.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Aquamarine Blue",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "plain", "teal", "aquamarine blue", "handloom", "sustainable", "affordable"],
    isBestseller: true
  },
  {
    id: "307",
    name: "Khadi Katha",
    price: 999,
    category: "Khadi",
    images: [
      "/assets/collections/Zilmil_khadi_blue3.webp",
      "/assets/collections/Zilmil_khadi_blue3(1).webp",
      "/assets/collections/Zilmil_khadi_blue2.webp",
      "/assets/collections/Zilmil_khadi_blue4.webp",
    ],
    description: "This is a piece with little sprinkles of weave in between that makes the saree sparkle with the beauty of a night sky.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Royal Blue",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "zilmil", "blue", "royal blue", "handloom", "sparkle", "affordable"],
    isBestseller: true
  },
  {
    id: "308",
    name: "Khadi Katha",
    price: 999,
    category: "Khadi",
    images: [
      "/assets/collections/Zilmil_khadi_green3.webp",
      "/assets/collections/Zilmil_khadi_green1.webp",
      "/assets/collections/Zilmil_khadi_green2.webp",
      "/assets/collections/Zilmil_khadi_green4.webp",
    ],
    description: "This is a piece with little sprinkles of weave in between that makes the saree sparkle with the beauty of a night sky.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Marine Teal",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "zilmil", "green", "marine teal", "handloom", "sparkle", "affordable"],
    isBestseller: true
  },
  {
    id: "309",
    name: "Khadi Katha",
    price: 999,
    category: "Khadi",
    images: [
      "/assets/collections/Zilmil_khadi_purple3.webp",
      "/assets/collections/Zilmil_khadi_purple1.webp",
      "/assets/collections/Zilmil_khadi_purple2.webp",
      "/assets/collections/Zilmil_khadi_purple3(1).webp",
    ],
    description: "This is a piece with little sprinkles of weave in between that makes the saree sparkle with the beauty of a night sky.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Palatinate Purple",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "zilmil", "purple", "palatinate purple", "handloom", "sparkle", "affordable"],
    isBestseller: true
  },
  {
    id: "310",
    name: "Khadi Kalaa",
    price: 999,
    category: "Khadi",
    images: [
      "/assets/collections/Striped_Khadi_pink3.webp",
      "/assets/collections/Striped_Khadi_pink4.webp",
      "/assets/collections/Striped_Khadi_pink1.webp",
      "/assets/collections/Striped_Khadi_pink2.webp",
    ],
    description: "Stripes on Khadi creates a visual interest and slims down creating a classic and timeless look.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Magenta Pink",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "stripe", "pink", "magenta pink", "handloom", "classic", "affordable"],
    isNew: true
  },
  {
    id: "311",
    name: "Khadi Kalaa",
    price: 999,
    category: "Khadi",
    images: [
      "/assets/collections/Striped_Khadi_violet5.webp",
      "/assets/collections/Striped_Khadi_violet4.webp",
      "/assets/collections/Striped_Khadi_violet3.webp",
      "/assets/collections/Striped_Khadi_violet2.webp",
      "/assets/collections/Striped_Khadi_violet1.webp",
    ],
    description: "Stripes on Khadi creates a visual interest and slims down creating a classic and timeless look.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Lavender",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "stripe", "violet", "lavender", "handloom", "classic", "affordable"],
    isNew: true
  },
  {
    id: "312",
    name: "Khadi Kalaa",
    price: 999,
    category: "Khadi",
    images: [
      "/assets/collections/Striped_Khadi_red3.webp",
      "/assets/collections/Striped_Khadi_red1.webp",
      "/assets/collections/Striped_Khadi_red2.webp",
    ],
    description: "Stripes on Khadi creates a visual interest and slims down creating a classic and timeless look.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Deep Maroon",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["khadi", "stripe", "red", "deep maroon", "handloom", "classic", "affordable"],
    isNew: true
  },
];

// Specific Kantha Stitch saree products
const specificKanthaStitchSarees: Product[] = [
  {
    id: "313",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_Aboli5.webp",
      "/assets/collections/Khadi_kantha_Aboli1.webp",
      "/assets/collections/Khadi_kantha_Aboli3.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Apricot",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "apricot", "handloom", "traditional", "bengal", "wedding"],
    isBestseller: true
  },
  {
    id: "314",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_darkblue3.webp",
      "/assets/collections/Khadi_kantha_darkblue1.webp",
      "/assets/collections/Khadi_kantha_darkblue2.webp",
      "/assets/collections/Khadi_kantha_darkblue4.webp",
      "/assets/collections/Khadi_kantha_darkblue5.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Royal Blue",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "blue", "royal blue", "handloom", "traditional", "bengal", "wedding"],
    isBestseller: true
  },
  {
    id: "315",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_Deep_maroon3.webp",
      "/assets/collections/Khadi_kantha_Deep_maroon1.webp",
      "/assets/collections/Khadi_kantha_Deep_maroon2.webp",
      "/assets/collections/Khadi_kantha_Deep_maroon4.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Maroon",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "maroon", "deep maroon", "handloom", "traditional", "bengal", "wedding"],
    isBestseller: true
  },
  {
    id: "316",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_light_saffron2.webp",
      "/assets/collections/Khadi_kantha_light_saffron5.webp",
      "/assets/collections/Khadi_kantha_light_saffron1.webp",
      "/assets/collections/Khadi_kantha_light_saffron3.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Buttercup yellow (Dual shade of Yellow + Pink)",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "saffron", "buttercup", "yellow", "handloom", "traditional", "bengal", "wedding"],
    isNew: true
  },
  {
    id: "317",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/Khadi_kantha_maroon2.webp",
      "/assets/Khadi_kantha_maroon1.webp",
      "/assets/Khadi_kantha_maroon4.webp",
      "/assets/Khadi_kantha_maroon3.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Maroon",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "maroon", "handloom", "traditional", "bengal", "wedding"],
    isNew: true
  },
  {
    id: "318",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_peach5.webp",
      "/assets/collections/Khadi_kantha_peach1.webp",
      "/assets/collections/Khadi_kantha_peach2.webp",
      "/assets/collections/Khadi_kantha_peach3.webp",
      "/assets/collections/Khadi_kantha_peach4.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Light Coral",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "peach", "light coral", "handloom", "traditional", "bengal", "wedding"],
    isNew: true
  },
  {
    id: "319",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_red3.webp",
      "/assets/collections/Khadi_kantha_red1.webp",
      "/assets/collections/Khadi_kantha_red4.webp",
      "/assets/collections/Khadi_kantha_red2.webp",
      "/assets/collections/Khadi_kantha_red5.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Red",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "red", "handloom", "traditional", "bengal", "wedding"],
    isNew: true
  },
  {
    id: "320",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_white3.webp",
      "/assets/collections/Khadi_kantha_white2.webp",
      "/assets/collections/Khadi_kantha_white1.webp",
      "/assets/collections/Khadi_kantha_white4.webp",
      "/assets/collections/Khadi_kantha_white5.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "White",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "white", "handloom", "traditional", "bengal", "wedding"],
    isBestseller: true
  },
  {
    id: "321",
    name: "Rekh Rachana",
    price: 2199,
    category: "Kantha Stitch",
    images: [
      "/assets/collections/Khadi_kantha_skyblue4.webp",
      "/assets/collections/Khadi_kantha_skyblue1.webp",
      "/assets/collections/Khadi_kantha_skyblue3.webp",
      "/assets/collections/Khadi_kantha_skyblue5.webp",
      "/assets/collections/Khadi_kantha_skyblue2.webp",
    ],
    description: "A traditional craft of Bengal, Kantha embroidery adorns this exquisite saree.",
    highlights: [
      "Cotton Comfort: The Kantha work has been embroidered on pure handloom khadi cotton fabric which suits best on all.",
      "Hand Embroidery: The human touch in each Kantha embroidered saree makes it a one-of-a-kind work of masterpiece, reflecting artisan's skill and your choice of Art.",
      "Traditional look: This attractive kantha embroidered saree with the plush texture can be perfect for Weddings, Pooja, Occasions which need a traditional look defining the beauty of this saree."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Sky Blue",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing"
    ],
    keywords: ["khadi", "kantha", "embroidery", "sky blue", "blue", "handloom", "traditional", "bengal", "wedding"],
    isBestseller: true
  }
];

// Specific Handpainted saree products
const specificHandpaintedSarees: Product[] = [
  {
    id: "401",
    name: "Cosmic Petals",
    price: 1399,
    category: "Handpainted",
    images: [
      "/assets/collections/Handpainted_khadi_bluedual1.webp",
      "/assets/collections/Handpainted_khadi_bluedual2.webp",
      "/assets/collections/Handpainted_khadi_bluedual3.webp",
    ],
    description: "The Petals evoke a sense of cosmic wonder, just like the sunflowers following the Sun. This motif on Khadi is the correct expression of resilience and adoring nature-inspired pieces.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices.",
      "Styling: Looks best with a single colour contrast blouse as the sunflower motifs shine bright like cosmic stars in our saree collection."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Dual shade of Teal + Pink",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["handpainted", "khadi", "cosmic", "petals", "teal", "pink", "dual shade", "sunflower", "handloom", "affordable"],
    isNew: true
  },
  {
    id: "402",
    name: "Cosmic Petals",
    price: 1399,
    category: "Handpainted",
    images: [
      "/assets/collections/Handpainted_khadi_bluishpurple4.webp",
      "/assetscollections/Handpainted_khadi_bluishpurple1.webp",
      "/assets/collections/Handpainted_khadi_bluishpurple2.webp",
      "/assets/collections/Handpainted_khadi_bluishpurple3.webp",
    ],
    description: "The Petals evoke a sense of cosmic wonder, just like the sunflowers following the Sun. This motif on Khadi is the correct expression of resilience and adoring nature-inspired pieces.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices.",
      "Styling: Looks best with a single colour contrast blouse as the sunflower motifs shine bright like cosmic stars in our saree collection."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Slate Blue (Dual shade of Blue+Pink)",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["handpainted", "khadi", "cosmic", "petals", "slate blue", "blue", "pink", "dual shade", "sunflower", "handloom", "affordable"],
    isNew: true
  },
  {
    id: "403",
    name: "Cosmic Petals",
    price: 1399,
    category: "Handpainted",
    images: [
      "/assets/collections/Handpainted_Khadi_green3.webp",
      "/assets/collections/Handpainted_Khadi_green1.webp",
      "/assets/collections/Handpainted_Khadi_green2.webp",
    ],
    description: "The Petals evoke a sense of cosmic wonder, just like the sunflowers following the Sun. This motif on Khadi is the correct expression of resilience and adoring nature-inspired pieces.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices.",
      "Styling: Looks best with a single colour contrast blouse as the sunflower motifs shine bright like cosmic stars in our saree collection."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Dark Marine Teal",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["handpainted", "khadi", "cosmic", "petals", "dark marine teal", "teal", "sunflower", "handloom", "affordable"],
    isBestseller: true
  },
  {
    id: "404",
    name: "Cosmic Petals",
    price: 1399,
    category: "Handpainted",
    images: [
      "/assets/collections/Handpainted_Khadi_purple4.webp",
      "/assets/collections/Handpainted_Khadi_purple3.webp",
      "/assets/collections/Handpainted_Khadi_purple1.webp",
      "/assets/collections/Handpainted_Khadi_purple2.webp",
      "/assets/collections/Handpainted_Khadi_purple5.webp",
    ],
    description: "The Petals evoke a sense of cosmic wonder, just like the sunflowers following the Sun. This motif on Khadi is the correct expression of resilience and adoring nature-inspired pieces.",
    highlights: [
      "Comfort and texture: Khadi has a rugged texture and is yet soft, breathable enough ensuring comfort making it perfect for prolonged wear.",
      "Affordability: It is known for its affordability and value, offering handcrafted fabric at reasonable prices.",
      "Styling: Looks best with a single colour contrast blouse as the sunflower motifs shine bright like cosmic stars in our saree collection."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Khadi",
      "Color": "Purple Violet (Dual Shade)",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only"
    ],
    keywords: ["handpainted", "khadi", "cosmic", "petals", "purple violet", "purple", "dual shade", "sunflower", "handloom", "affordable"],
    isBestseller: true
  }
];

// Specific Tissue saree products
const specificTissueSarees: Product[] = [
  {
    id: "501",
    name: "Moonlight",
    price: 1799,
    category: "Tissue",
    images: [
      "/assets/saree1.jpg",
      "/assets/saree2.jpg",
      "/assets/saree3.jpg"
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
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use extremely low heat for ironing"
    ],
    keywords: ["tissue", "cotton tissue", "sky blue", "sheen", "handloom", "modest occasions", "lightweight"],
    isNew: true
  },
  {
    id: "502",
    name: "Moonlight",
    price: 1799,
    category: "Tissue",
    images: [
      "/assets/collections/Raaga_tissue_golden3.webp",
      "/assets/collections/Raaga_tissue_golden1.webp",
      "/assets/collections/Raaga_tissue_golden2.webp",
      "/assets/collections/Raaga_tissue_golden4.webp",
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
      "Color": "Shiny Golden",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use extremely low heat for ironing"
    ],
    keywords: ["tissue", "cotton tissue", "golden", "shiny golden", "sheen", "handloom", "modest occasions", "lightweight"],
    isNew: true
  },
  {
    id: "503",
    name: "Moonlight",
    price: 1799,
    category: "Tissue",
    images: [
      "/assets/collections/Raga_tissue_withBorder4.webp",
      "/assets/collections/Raga_tissue_withBorder1.webp",
      "/assets/collections/Raga_tissue_withBorder2.webp",
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
      "Color": "Dual shades of Lavender with prominent Gold tissue",
      "Blouse Piece": "No",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use extremely low heat for ironing"
    ],
    keywords: ["tissue", "cotton tissue", "lavender", "gold", "dual shade", "border", "sheen", "handloom", "modest occasions", "lightweight"],
    isBestseller: true
  },
  {
    id: "504",
    name: "Tissue Luxe",
    price: 2499,
    category: "Tissue",
    images: [
      "/assets/collections/Linen_tissue_greenish4.webp",
      "/assets/collections/Linen_tissue_greenish2.webp",
      "/assets/collections/Linen_tissue_greenish1.webp",
      "/assets/collections/Linen_tissue_greenish3.webp",
      "/assets/collections/Linen_tissue_greenish5.webp",
    ],
    description: "Our Tissue Luxe Saree is a true example of creating a luxury of having the strongest fibre with the perfect sheen to wear as a daily wear or for a party.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Subtle Sheen: Tissue fabric is worn for its subtle sheen and lightweight feel.",
      "Look and Comfort: Crafted from handwoven linen and tissue, ensuring comfortable texture with its subtle shine making it perfect for all occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Cotton Tissue",
      "Color": "Tiffany Blue (Dual Shade of teal and gold)",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use extremely low heat for ironing"
    ],
    keywords: ["tissue", "linen tissue", "tiffany blue", "teal", "gold", "dual shade", "luxury", "sheen", "handloom", "party wear", "daily wear"],
    isBestseller: true
  },
  {
    id: "505",
    name: "Tissue Luxe",
    price: 2499,
    category: "Tissue",
    images: [
      "/assets/collections/Linen_tissue_peach4.webp",
      "/assets/collections/Linen_tissue_peach3.webp",
      "/assets/collections/Linen_tissue_peach1.webp",
      "/assets/collections/Linen_tissue_peach2.webp",
      "/assets/collections/Linen_tissue_peach5.webp",
    ],
    description: "Our Tissue Luxe Saree is a true example of creating a luxury of having the strongest fibre with the perfect sheen to wear as a daily wear or for a party.",
    highlights: [
      "Fabric Strength: Linen is the strongest natural fibre. Breathable, soft, and natural.",
      "Subtle Sheen: Tissue fabric is worn for its subtle sheen and lightweight feel.",
      "Look and Comfort: Crafted from handwoven linen and tissue, ensuring comfortable texture with its subtle shine making it perfect for all occasions."
    ],
    details: {
      "Product Type": "Saree",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Cotton Tissue",
      "Color": "Peach",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use extremely low heat for ironing"
    ],
    keywords: ["tissue", "linen tissue", "peach", "luxury", "sheen", "handloom", "party wear", "daily wear"],
    isBestseller: true
  }
];

// Specific Jamdani saree products
const specificJamdaniSarees: Product[] = [
  {
    id: "601",
    name: "Phooldaan",
    price: 1999,
    category: "Jamdani",
    images: [
      "/assets/saree1.jpg",
      "/assets/saree2.jpg",
      "/assets/saree3.jpg"
    ],
    description: "Crafted from the finest cotton fabric, this saree seamlessly blends comfort, grace, and timeless beauty.",
    highlights: [
      "Softness and comfort: Cotton Jamdani is a soft, breathable and very comfortable fabric ideal for all-day wear, especially for warmer climates.",
      "Jamdani weaving: Jamdani sarees are mainly known for its intricate motifs and patterns, often featuring floral and geometric designs.",
      "Ease movement: It's gentle texture, gives the saree a soft touch and ensures comfort and ease of movement.",
      "Festive look: Its striking colour symbolizes energy and celebration. It instantly grabs attention and radiates positivity making it perfect for homely occasions."
    ],
    details: {
      "Product Type": "Saree (Half pink -Half blue)",
      "Saree Length": "6.5 meters | Width: 47 inches",
      "Fabric": "Cotton Jamdani",
      "Color": "Hot Pink and Indigo Blue",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Light hand wash only",
      "Avoid steam ironing",
      "Can use starch after 3-4 washes",
      "Use low heat for ironing"
    ],
    keywords: ["jamdani", "cotton", "handloom", "pink", "blue", "dual color", "floral", "geometric", "festive", "comfortable"],
    isNew: true,
    isBestseller: true
  },
  {
    id: "602",
    name: "Linen Lust",
    price: 3599,
    category: "Jamdani",
    images: [
      "/assets/collections/Linen_Jamdani_Purple4.webp",
      "/assets/collections/Linen_Jamdani_Purple2.webp",
      "/assets/collections/Linen_Jamdani_Purple1.webp",
      "/assets/collections/Linen_Jamdani_Purple3.webp",
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
      "Color": "Eminence Purple",
      "Blouse Piece": "Yes, unstitched",
      "Weaving Cluster": "West Bengal",
      "Craft Technique": "Handloom"
    },
    washCare: [
      "Soak in salt water before washing to help lock in colours.",
      "Dry clean /Light hand wash only",
      "Avoid steam ironing",
      "Use low heat for ironing"
    ],
    keywords: ["linen", "jamdani", "purple", "eminence purple", "handloom", "zari", "formal", "business casual"],
    isBestseller: true
  }
];

// Generate 50 products with unique descriptions, images, and details
export const products: Product[] = [
  ...specificMulmulSarees,
  ...specificLinenSarees,
  ...specificKhadiSarees,
  ...specificKanthaStitchSarees,
  ...specificHandpaintedSarees,
  ...specificTissueSarees,
  ...specificJamdaniSarees
  // Removed the randomly generated products to only keep specific sarees
];

export default products; 