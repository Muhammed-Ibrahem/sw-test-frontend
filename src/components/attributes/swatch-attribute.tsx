import type { JSX } from "react";

import type { AttributeVariantProps } from "../../types/attribute-types";

import { cn } from "../../utils/cn";

export const SwatchAttribute = ({
  attributeItem,
  isSelected,
  onSelect,
  testId,
}: AttributeVariantProps): JSX.Element => {
  return (
    <li data-testid={testId}>
      <button
        onClick={() => onSelect(attributeItem)}
        className={cn("border-2 border-transparent p-0.5", {
          "border-primary border-2": isSelected,
        })}
        aria-label={attributeItem.displayValue}
      >
        <p
          style={{
            backgroundColor: attributeItem.value,
          }}
          className="h-9 w-9 border-1 shadow-sm"
        />
      </button>
    </li>
  );
};
