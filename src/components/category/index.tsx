import { Fragment, type JSX } from "react";

import type { CategoryProps } from "../../types/category-types";

import { CategoryHeader } from "./category-header";

export const Category = ({ title, children }: CategoryProps): JSX.Element => {
  return (
    <Fragment>
      <CategoryHeader title={title} />
      {children}
    </Fragment>
  );
};
