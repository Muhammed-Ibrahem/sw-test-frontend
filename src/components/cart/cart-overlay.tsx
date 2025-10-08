import { useMutation } from "@apollo/client/react";
import { useEffect, type ReactNode } from "react";
import { toast } from "sonner";

import { useCart } from "../../context/cart-context";

import { PLACE_ORDER_MUTATION } from "../../graphql/cart-graphql";

import { cn } from "../../utils/cn";

import { CartItemComponent } from "./cart-item";

export const CartOverlay = (): ReactNode => {
  const { totalItems, totalPrice, items, isCartOpen, clearCart } = useCart();
  const [placeOrder, { data, loading, error }] = useMutation<{
    placeOrder: number;
  }>(PLACE_ORDER_MUTATION, {
    variables: {
      orderItems: items.map((item) => ({
        currencyId: +item.product.prices[0].currency.id,
        productId: item.id,
        quantity: item.quantity,
        unitPrice: item.price,
        attributes: Object.keys(item.attributes).map((key) => ({
          attributeSetId: key,
          attributeId: item.attributes[key].attribute.id,
        })),
      })),
    },
  });

  useEffect(() => {
    if (data) {
      toast.success("Order placed successfully", {
        description: `Your Order Number Is ${data.placeOrder}`,
      });
      clearCart();
    }

    if (error) {
      toast.error("Failed to place an order", {
        description:
          "If this happens again, please either try again later, or you could call the service-support, Thank you for your collaboration",
      });
    }
  }, [data, clearCart, error]);
  if (!isCartOpen) return null;
  return (
    <>
      <div
        data-testid="cart-overlay"
        className="absolute top-full right-0 z-50 w-full max-w-96 bg-white p-4"
      >
        <h3 className="mb-8 font-medium">
          <span className="font-bold">My Bag</span>
          {totalItems > 0 &&
            (totalItems > 1 ? `, ${totalItems} Items` : `, ${totalItems} Item`)}
        </h3>
        <div className="max-h-96 space-y-4 overflow-auto scroll-auto">
          {items.map((item, index) => (
            <CartItemComponent
              key={`${item.id}_${index}`}
              item={item}
              otherAttributes={item.product.attributes}
            />
          ))}
        </div>

        <div className="font-roboto mt-4 flex items-center justify-between font-medium capitalize">
          <span>total</span>
          <span data-testid="cart-total">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          disabled={loading || items.length === 0}
          onClick={() => placeOrder()}
          data-testid="add-to-cart"
          className={cn(
            "bg-primary mt-5 w-full cursor-pointer p-3 text-center font-[600] text-white uppercase",
            {
              "bg-grayed cursor-not-allowed": loading || items.length === 0,
              "flex items-center justify-center": loading,
            },
          )}
        >
          {loading ? "Processing..." : "place order"}
        </button>
      </div>
    </>
  );
};
