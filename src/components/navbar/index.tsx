import { NavCart } from "./nav-cart";
import { NavLinks } from "./nav-link-list";
import { NavLogo } from "./nav-logo";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <NavLinks />

      <NavLogo />

      <NavCart />
    </nav>
  );
};
