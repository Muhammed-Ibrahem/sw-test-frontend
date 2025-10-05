import type { Attribute, AttributeSet } from "../../types/attribute-types";

import { SwatchAttribute } from "./swatch-attribute";
import { TextAttribute } from "./text-attribute";

type Props = {
  attributes: AttributeSet[];
  selectedAttributes: Record<string, Attribute>;
  onAttributeSelect: (attributeSetId: string, attribute: Attribute) => void;
};

const ATTRIBUTES = {
  swatch: SwatchAttribute,
  text: TextAttribute,
};

export const ProductAttributes = ({
  attributes,
  selectedAttributes,
  onAttributeSelect,
}: Props) => {
  return attributes.map((attributeSet) => {
    const AttributeComponent = ATTRIBUTES[attributeSet.type];
    return (
      <div key={attributeSet.id} className="py-4">
        <h3 className="font-roboto-condensed mb-2 text-lg font-bold uppercase">
          {attributeSet.name}:
        </h3>
        <ul className="flex items-center">
          {attributeSet.items.map((item) => (
            <AttributeComponent
              key={item.id}
              attributeItem={item}
              isSelected={selectedAttributes[attributeSet.id]?.id === item.id}
              onSelect={(attr) => onAttributeSelect(attributeSet.id, attr)}
            />
          ))}
        </ul>
      </div>
    );
  });
};
