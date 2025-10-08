import type { Attribute, AttributeSet } from "./attribute-types";
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

export type ProductAttributesProps = {
  attributes: AttributeSet[];
  selectedAttributes: Record<
    string,
    {
      type: string;
      attribute: Attribute;
    }
  >;
  onAttributeSelect: (
    attributeSetId: string,
    attributeSetType: string,
    attribute: Attribute,
  ) => void;
};

export type ProductCardProps = {
  product: Product;
};

export type ProductGridProps = {
  products: Product[];
};

export type PDPAddToCartProps = {
  handleAddToCart: () => void;
  isActive: boolean;
};
