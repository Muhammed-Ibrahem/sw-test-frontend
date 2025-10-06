import type { Attribute } from "./attribute-types";
import type { Product } from "./product-types";

export type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  attributes: CartItemAttribute;
  product: Product;
};

export type CartItemAttribute = {
  [setId: string]: {
    type: string;
    attribute: Attribute;
  };
};

export type CartContextType = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (cartItem: CartItem) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  changeCartStatus: (status: boolean) => void;
};
