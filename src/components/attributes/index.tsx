import type { ReactNode } from "react";

import type { ProductAttributesProps } from "../../types/product-types";

import { toKebabCase } from "../../utils/kebab-case";

import { SwatchAttribute } from "./swatch-attribute";
import { TextAttribute } from "./text-attribute";

const ATTRIBUTES = {
  swatch: SwatchAttribute,
  text: TextAttribute,
};

export const ProductAttributes = ({
  attributes,
  selectedAttributes,
  onAttributeSelect,
}: ProductAttributesProps): ReactNode => {
  return attributes.map((attributeSet) => {
    const AttributeComponent = ATTRIBUTES[attributeSet.type];
    return (
      <div
        key={attributeSet.id}
        className="py-4"
        data-testid={`product-attribute-${toKebabCase(attributeSet.name)}`}
      >
        <h3 className="font-roboto-condensed mb-2 text-lg font-bold uppercase">
          {attributeSet.name}:
        </h3>
        <ul className="flex items-center">
          {attributeSet.items.map((item) => (
            <AttributeComponent
              key={item.id}
              attributeItem={item}
              isSelected={
                selectedAttributes[attributeSet.id]?.attribute.id === item.id
              }
              onSelect={(attr) =>
                onAttributeSelect(attributeSet.id, attributeSet.type, attr)
              }
              testId={`product-attribute-${toKebabCase(attributeSet.name)}-${item.value}`}
            />
          ))}
        </ul>
      </div>
    );
  });
};
