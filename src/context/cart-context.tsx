/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, type JSX } from "react";

import type { CartContextType } from "../types/cart-types";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

import { useState, type ReactNode } from "react";

import type { CartItem } from "../types/cart-types";

type Props = {
  children: ReactNode;
};

const generateItemKey = (item: CartItem): string => {
  const attrs = Object.entries(item.attributes)
    .map(([setId, { attribute }]) => `${setId}:${attribute.id}`)
    .sort()
    .join("__");

  return `${item.id}__${attrs}`;
};

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartStatus] = useState<boolean>(false);

  const addItem = useCallback((item: CartItem): void => {
    setItems((prev) => {
      const key = generateItemKey(item);
      const existing = prev.find((p) => generateItemKey(p) === key);

      if (existing) {
        return prev.map((p) =>
          generateItemKey(p) === key
            ? { ...p, quantity: p.quantity + item.quantity }
            : p,
        );
      } else {
        return [...prev, item];
      }
    });
  }, []);

  const removeItem = useCallback((cartItem: CartItem): void => {
    const key = generateItemKey(cartItem);
    setItems((prev) =>
      prev
        .map((item) =>
          generateItemKey(item) === key
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const clearCart = useCallback((): void => setItems([]), []);

  const changeCartStatus = useCallback((status: boolean): void => {
    setCartStatus(status);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        clearCart,
        isCartOpen,
        changeCartStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
