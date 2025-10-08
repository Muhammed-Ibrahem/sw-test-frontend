import type { JSX } from "react";
import { Plus, Minus } from "lucide-react";

import type { CartItemProps } from "../../types/cart-types";

import { CartSwatchAttribute } from "./cart-swatch-attribute";
import { CartTextAttribute } from "./cart-text-attribute";
import { useCart } from "../../context/cart-context";
import { toKebabCase } from "../../utils/kebab-case";

const CART_ITEM_ATTRIBUTES = {
  swatch: CartSwatchAttribute,
  text: CartTextAttribute,
};

export const CartItemComponent = ({
  item,
  otherAttributes,
}: CartItemProps): JSX.Element => {
  const { addItem, removeItem } = useCart();
  const AttributesComponent = () => {
    return otherAttributes.map((attrSet) => {
      const AttrComponent = CART_ITEM_ATTRIBUTES[attrSet.type];

      return (
        <div
          key={attrSet.id}
          className="py-2"
          data-testid={`cart-item-attribute-${toKebabCase(attrSet.name)}`}
        >
          <h3 className="font-roboto-condensed text-sm">{attrSet.name}:</h3>
          <ul className="flex items-center">
            {attrSet.items.map((attr) => {
              return (
                <AttrComponent
                  key={attr.id}
                  attributeItem={attr}
                  isSelected={
                    item.attributes[attrSet.name]?.attribute.id === attr.id
                  }
                  testId={`cart-item-attribute-${toKebabCase(attrSet.name)}-${toKebabCase(attr.id)}`}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-2 justify-between">
      <div className="flex w-full justify-between">
        <div>
          <h3 className="text-lg font-light">{item.name}</h3>
          <p className="font-medium" data-testid="cart-item-amount">
            ${item.price.toFixed(2)}
          </p>
          <AttributesComponent />
        </div>
        <div className="flex max-h-28 min-h-20 flex-col items-center justify-between self-center select-none">
          <button
            data-testid="cart-item-amount-increase"
            className="cursor-pointer border"
            onClick={() => {
              addItem({
                ...item,
                quantity: 1,
              });
            }}
          >
            <Plus />
          </button>
          {item.quantity}
          <button
            data-testid="cart-item-amount-decrease"
            className="cursor-pointer border"
            onClick={() => {
              removeItem(item);
            }}
          >
            <Minus />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="h-[100px] w-[100px] object-cover object-top"
          src={item.imageUrl || ""}
          alt={item.name}
        />
      </div>
    </div>
  );
};
