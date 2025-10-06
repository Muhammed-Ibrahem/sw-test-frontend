import { NavCart } from "./nav-cart";
import { NavLinks } from "./nav-link-list";
import { NavLogo } from "./nav-logo";

export const Navbar = () => {
  return (
    <nav className="relative grid grid-cols-1 items-center justify-between sm:grid-cols-3">
      <NavLinks />

      <NavLogo />

      <NavCart />
    </nav>
  );
};
