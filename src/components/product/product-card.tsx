import { type FC } from "react";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

import type { Product } from "../../types/product-types";

type Props = {
  product: Product;
};
export const ProductCard: FC<Props> = ({ product }: Props) => {
  return (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="group relative"
    >
      <div className="relative mb-4 aspect-square overflow-hidden bg-gray-100 group-hover:p-4 group-hover:shadow-sm">
        <img
          src={product.gallery[0]?.url || ""}
          alt={product.name}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <span className="text-grayed text-sm font-medium">
              OUT OF STOCK
            </span>
          </div>
        )}
        {product.inStock && (
          <button className="bg-primary absolute right-4 bottom-4 cursor-pointer rounded-full p-3 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <ShoppingCart className="h-5 w-5" />
          </button>
        )}
      </div>
      <h3 className="text-lg font-light">{product.name}</h3>
      <p className="text-lg font-medium">
        {product.prices[0].currency.symbol}
        {product.prices[0].amount.toFixed(2)}
      </p>
    </Link>
  );
};
