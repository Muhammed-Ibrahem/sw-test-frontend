import type { FC, ReactNode } from "react";

import type { Product } from "../../types/product-types";

import { ProductCard } from "./product-card";

type Props = {
  products: Product[];
};

export const ProductGrid: FC<Props> = ({ products }: Props): ReactNode => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
