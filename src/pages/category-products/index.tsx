import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router";

import type { CategoryData } from "../../types/category-types";
import type { ProductsData } from "../../types/product-types";

import { GET_CATEGORY_PRODUCTS } from "../../graphql/category-graphql";
import { GET_PRODUCTS } from "../../graphql/product-graphql";

import { NotFound } from "../../components/errors/not-found";
import { Loading } from "../../components/loader/loading";
import { Category } from "../../components/category";

export const CategoryProductsPage = () => {
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

  if (loading) return <Loading />;
  if (error) return <NotFound />;

  const products = isAllCategory
    ? (data as ProductsData).products
    : (data as CategoryData).category.products;

  const title = isAllCategory ? "All" : (data as CategoryData).category.name;

  return (
    <div>
      <Category title={title}>
        {/* TODO: PRODUCTS-GRID */}
        {products.map((p) => (
          <p key={p.id}>{p.name}</p>
        ))}
      </Category>
    </div>
  );
};
