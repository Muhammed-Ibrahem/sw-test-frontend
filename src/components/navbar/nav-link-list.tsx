import { useQuery } from "@apollo/client/react";

import type { CategoriesData } from "../../types/category-types";

import { GET_CATEGORIES } from "../../graphql/category-graphql";
import { NavLinksSkeleton } from "../skeletons/nav-links-skeleton";
import { SomethingWentWrong } from "../errors/something-went-wrong";
import { NavbarLink } from "./nav-link";

export const NavLinks = () => {
  const { loading, error, data } = useQuery<CategoriesData>(GET_CATEGORIES, {
    fetchPolicy: "cache-first",
  });

  if (loading) return <NavLinksSkeleton />;
  if (error) return <SomethingWentWrong />;

  return (
    <ul className="flex items-center">
      {data?.categories.map(({ id, name }) => (
        <NavbarLink key={id} name={name} />
      ))}
    </ul>
  );
};
