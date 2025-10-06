import type { Attribute } from "../../types/attribute-types";
import { cn } from "../../utils/cn";

type Props = {
  attributeItem: Attribute;
  isSelected: boolean;
  onSelect: (attr: Attribute) => void;
  testId: string;
};

export const TextAttribute = ({
  attributeItem,
  isSelected,
  onSelect,
  testId,
}: Props) => {
  return (
    <li data-testid={testId}>
      <button
        onClick={() => onSelect(attributeItem)}
        className={cn(
          "font-source-sans border-text mr-1 flex h-11 w-16 items-center justify-center border leading-4 tracking-wide",
          {
            "border-gray-900 bg-gray-900 text-white": isSelected,
            "border-gray-300 bg-white text-gray-900 hover:border-gray-900":
              !isSelected,
          },
        )}
      >
        {attributeItem.value}
      </button>
    </li>
  );
};
