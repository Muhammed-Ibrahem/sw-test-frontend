import type { ProductGridProps } from "../../types/product-types";
import type { JSX } from "react";

import { ProductCard } from "./product-card";

export const ProductGrid = ({ products }: ProductGridProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
