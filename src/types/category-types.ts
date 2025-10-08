import type { ReactNode } from "react";
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

export type CategoryHeaderProps = {
  title: string;
};

export type CategoryProps = {
  title: string;
  children: ReactNode;
};
