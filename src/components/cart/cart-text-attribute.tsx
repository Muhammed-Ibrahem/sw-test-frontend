import type { Attribute } from "../../types/attribute-types";

import { cn } from "../../utils/cn";

type Props = {
  attributeItem: Attribute;
  isSelected: boolean;
};

export const CartTextAttribute = ({ attributeItem, isSelected }: Props) => {
  return (
    <li>
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
