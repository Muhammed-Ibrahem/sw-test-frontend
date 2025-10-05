import type { Attribute } from "../../types/attribute-types";
import { cn } from "../../utils/cn";

type Props = {
  attributeItem: Attribute;
  isSelected: boolean;
  onSelect: (attr: Attribute) => void;
};

export const SwatchAttribute = ({
  attributeItem,
  isSelected,
  onSelect,
}: Props) => {
  return (
    <li>
      <button
        onClick={() => onSelect(attributeItem)}
        className={cn("border-2 border-transparent p-0.5", {
          "border-grayed border-2": isSelected,
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
