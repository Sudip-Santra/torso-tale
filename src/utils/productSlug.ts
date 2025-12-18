import type { Product } from "@/data/products";

// Normalize a string into a URL‑safe slug
const slugify = (value: string) =>
  value
    .toLowerCase()
    // replace non alphanumeric with a dash
    .replace(/[^a-z0-9]+/g, "-")
    // trim starting/ending dashes
    .replace(/^-+|-+$/g, "");

/**
 * Build a stable, SEO‑friendly slug for a product.
 *
 * We intentionally do NOT expose the numeric id in the URL.
 * Under the hood we still use the product's id for identity;
 * the slug is just a readable layer for routing/SEO.
 */
export const getProductSlug = (product: Product): string => {
  const parts: string[] = [
    product.name,
    // Color helps disambiguate products that share the same name
    product.details?.["Color"],
    product.category,
  ].filter(Boolean) as string[];

  return slugify(parts.join(" "));
};

