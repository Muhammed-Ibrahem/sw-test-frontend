import type { JSX } from "react";

import type { CartAttributeVariantProps } from "../../types/cart-types";

import { cn } from "../../utils/cn";

export const CartSwatchAttribute = ({
  attributeItem,
  isSelected,
  testId,
}: CartAttributeVariantProps): JSX.Element => {
  return (
    <li data-testid={`${testId}${isSelected ? "-selected" : ""}`}>
      <button
        className={cn("border-2 border-transparent p-0.5", {
          "border-primary border-2": isSelected,
        })}
        aria-label={attributeItem.displayValue}
      >
        <p
          style={{
            backgroundColor: attributeItem.value,
          }}
          className="h-5 w-5 border-1 shadow-sm"
        />
      </button>
    </li>
  );
};
