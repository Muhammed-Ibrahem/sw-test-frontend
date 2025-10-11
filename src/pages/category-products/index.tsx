import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router";

import type { CategoryData } from "../../types/category-types";
import type { ProductsData } from "../../types/product-types";
import type { ReactNode } from "react";

import { GET_CATEGORY_PRODUCTS } from "../../graphql/category-graphql";
import { GET_PRODUCTS } from "../../graphql/product-graphql";

import { ProductGridSkeleton } from "../../components/skeletons/product-card-skeleton";
import { ProductGrid } from "../../components/product/product-grid";
import { Category } from "../../components/category";

export const CategoryProductsPage = (): ReactNode => {
  const { categoryName } = useParams();

  const isAllCategory = categoryName === "all";
  const PRODUCTS = isAllCategory ? GET_PRODUCTS : GET_CATEGORY_PRODUCTS;
  const { loading, error, data } = useQuery<CategoryData | ProductsData>(
    PRODUCTS,
    {
      variables: {
        name: categoryName,
      },
    },
  );

  if (loading) return <ProductGridSkeleton />;
  if (error) throw error;

  const products = isAllCategory
    ? (data as ProductsData).products
    : (data as CategoryData).category.products;

  const title = isAllCategory ? "All" : (data as CategoryData).category.name;

  return (
    <div className="space-y-24">
      <Category title={title}>
        <ProductGrid products={products} />
      </Category>
    </div>
  );
};
