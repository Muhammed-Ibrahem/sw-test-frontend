import type { AttributeSet } from "./attribute-types";
import type { Category } from "./category-types";
import type { Gallery } from "./gallery-type";
import type { Brand } from "./brand-type";
import type { Price } from "./price-type";

export type Product = {
  id: string;
  name: string;
  inStock: boolean;
  description: string;
  gallery: Gallery[];
  category: Category;
  brand: Brand;
  prices: Price[];
  attributes: AttributeSet[];
};

export type ProductsData = {
  products: Product[];
};
