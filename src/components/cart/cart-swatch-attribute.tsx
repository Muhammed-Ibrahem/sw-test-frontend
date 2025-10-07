import type { Attribute } from "../../types/attribute-types";

import { cn } from "../../utils/cn";

type Props = {
  attributeItem: Attribute;
  isSelected: boolean;
  testId: string;
};

export const CartSwatchAttribute = ({
  attributeItem,
  isSelected,
  testId,
}: Props) => {
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
