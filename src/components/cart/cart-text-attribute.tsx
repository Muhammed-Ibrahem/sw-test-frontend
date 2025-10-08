import type { JSX } from "react";

import type { CartAttributeVariantProps } from "../../types/cart-types";

import { cn } from "../../utils/cn";

export const CartTextAttribute = ({
  attributeItem,
  isSelected,
  testId,
}: CartAttributeVariantProps): JSX.Element => {
  return (
    <li data-testid={`${testId}${isSelected ? "-selected" : ""}`}>
      <button
        className={cn(
          "font-source-sans border-text mr-1 flex h-6 w-8 items-center justify-center truncate border p-4 text-xs leading-4 tracking-wide",
          {
            "border-gray-900 bg-gray-900 text-white": isSelected,
            "border-gray-300 bg-white text-gray-900": !isSelected,
          },
        )}
      >
        <span className="">{attributeItem.value}</span>
      </button>
    </li>
  );
};
