import type { FC, ReactNode } from "react";

type TitleProps = {
  title: string;
};

export const CategoryHeader: FC<TitleProps> = ({
  title,
}: TitleProps): ReactNode => {
  return <h1 className="text-5xl capitalize">{title}</h1>;
};
