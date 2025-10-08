import type { ReactNode } from "react";

import { useCart } from "../../context/cart-context";

export const CartBackDrop = (): ReactNode => {
  const { changeCartStatus, isCartOpen } = useCart();
  return isCartOpen ? (
    <div
      className="absolute top-0 left-0 z-40 h-full w-full overflow-hidden bg-black/20"
      onClick={() => changeCartStatus(false)}
    />
  ) : (
    ""
  );
};
