import type { ReactNode } from "react";
import { NavCart } from "./nav-cart";
import { NavLinks } from "./nav-link-list";
import { NavLogo } from "./nav-logo";

export const Navbar = (): ReactNode => {
  return (
    <nav className="relative flex items-center justify-between">
      <NavLinks />

      <NavLogo />

      <NavCart />
    </nav>
  );
};
