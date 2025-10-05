type Props = {
  handleAddToCart: () => void;
};
export const AddToCartBtn = ({ handleAddToCart }: Props) => {
  return (
    <button
      onClick={handleAddToCart}
      data-testid="add-to-cart"
      className="bg-primary mt-5 mb-10 cursor-pointer px-24 py-4 text-center font-[600] text-white uppercase"
    >
      add to cart
    </button>
  );
};
