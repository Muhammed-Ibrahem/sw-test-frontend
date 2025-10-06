import { ShoppingCart } from "lucide-react";

import { useCart } from "../../context/cart-context";
import { CartOverlay } from "../cart/cart-overlay";

export const NavCart = () => {
  const { isCartOpen, changeCartStatus, totalItems } = useCart();
  return (
    <div className="justify-self-center-safe sm:justify-self-end">
      <button
        onClick={() => changeCartStatus(!isCartOpen)}
        className="relative cursor-pointer"
        data-testid="cart-btn"
      >
        {totalItems > 0 && (
          <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
            {totalItems}
          </div>
        )}
        <ShoppingCart width={30} height={30} />
      </button>
      <CartOverlay />
    </div>
  );
};
