import type { Product } from "./product-types";

export type Category = {
  id: number;
  name: string;
  products: Product[];
};

export type CategoriesData = {
  categories: Category[];
};

export type CategoryData = {
  category: Category;
};
