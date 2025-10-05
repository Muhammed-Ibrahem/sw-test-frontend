import type { ReactNode } from "react";

import { CategoryHeader } from "./category-header";

type Props = {
  title: string;
  children: ReactNode;
};

export const Category = ({ title, children }: Props) => {
  return (
    <>
      <CategoryHeader title={title} />
      {children}
    </>
  );
};
