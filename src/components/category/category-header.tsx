import type { JSX } from "react";
import type { CategoryHeaderProps } from "../../types/category-types";

export const CategoryHeader = ({ title }: CategoryHeaderProps): JSX.Element => {
  return <h1 className="text-5xl capitalize">{title}</h1>;
};
