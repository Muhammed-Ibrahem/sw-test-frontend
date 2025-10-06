import { useMutation } from "@apollo/client/react";
import { useEffect } from "react";
import { toast } from "sonner";

import { useCart } from "../../context/cart-context";

import { PLACE_ORDER_MUTATION } from "../../graphql/cart-graphql";

import { cn } from "../../utils/cn";

import { CartItemComponent } from "./cart-item";
import { Loading } from "../loader/loading";

export const CartOverlay = () => {
  const { totalItems, totalPrice, items, isCartOpen, clearCart } = useCart();
  const [placeOrder, { data, loading }] = useMutation(PLACE_ORDER_MUTATION, {
    variables: {
      orderItems: items.map((item) => ({
        currencyId: +item.product.prices[0].id,
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
    console.log("??");
    if (data) {
      toast.success("Order placed successfully");
      clearCart();
    }
  }, [data, clearCart]);
  if (!isCartOpen) return null;
  return (
    <>
      <div className="absolute top-full right-0 z-50 min-w-96 bg-white p-4">
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
          <span>${totalPrice.toFixed(2)}</span>
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
          {loading ? <Loading /> : "place order"}
        </button>
      </div>
    </>
  );
};
