import type { FC, ReactNode } from "react";
import BrandIcon from "../../assets/brand-icon.svg";

export const NavLogo: FC = (): ReactNode => {
  return (
    <img
      width={30}
      height={30}
      src={BrandIcon}
      className="justify-self-center-safe"
    />
  );
};
