import { NavLink } from "react-router";
import { cn } from "../../utils/cn";

type Props = {
  name: string;
};

export const NavbarLink = ({ name }: Props) => {
  return (
    <li className="flex h-20 items-center">
      <NavLink
        to={`/${name}`}
        className={({ isActive }) =>
          cn(
            "flex h-full w-full items-center border-b-2 border-transparent px-6 font-normal uppercase transition-all",
            {
              "text-primary border-primary font-bold": isActive,
            },
          )
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
