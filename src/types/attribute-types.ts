export type Attribute = {
  id: string;
  displayValue: string;
  value: string;
};

export enum AttributeSetType {
  SWATCH = "swatch",
  TEXT = "text",
}

export type AttributeSet = {
  id: string;
  name: string;
  type: AttributeSetType;
  items: Attribute[];
};
