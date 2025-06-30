export type ProductCategory = 
  | "Linen"
  | "Mulmul"
  | "Tissue"
  | "Khadi"
  | "Kantha Stitch"
  | "Handpainted"
  | "Jamdani"
  | "All";

export type SortOption = "featured" | "price-asc" | "price-desc";

export type PriceRange = {
  min: number;
  max: number | null;
  label: string;
}; 