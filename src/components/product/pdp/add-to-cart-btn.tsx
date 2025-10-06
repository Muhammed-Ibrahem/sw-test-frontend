import { cn } from "../../../utils/cn";

type Props = {
  handleAddToCart: () => void;
  isActive: boolean;
};
export const AddToCartBtn = ({ handleAddToCart, isActive }: Props) => {
  return (
    <button
      disabled={!isActive}
      onClick={handleAddToCart}
      data-testid="add-to-cart"
      className={cn(
        "bg-primary mt-5 mb-10 cursor-pointer px-24 py-4 text-center font-[600] text-white uppercase",
        {
          "bg-grayed cursor-not-allowed": !isActive,
        },
      )}
    >
      add to cart
    </button>
  );
};
