import type { Price } from "../../../types/price-type";

type Props = {
  price: Price;
};
export const ProductPrice = ({ price }: Props) => {
  return (
    <div className="py-2">
      <h3 className="font-roboto-condensed mb-2 text-lg font-bold uppercase">
        price:
      </h3>
      <p className="text-2xl font-bold">
        {price.currency.symbol}
        {price.amount.toFixed(2)}
      </p>
    </div>
  );
};
