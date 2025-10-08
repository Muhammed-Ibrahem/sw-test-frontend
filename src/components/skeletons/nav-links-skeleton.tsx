import type { JSX } from "react";

export const NavLinksSkeleton = (): JSX.Element => {
  return (
    <div className="flex gap-8">
      <div className="h-4 w-16 animate-pulse bg-gray-200" />
      <div className="h-4 w-12 animate-pulse bg-gray-200" />
      <div className="h-4 w-12 animate-pulse bg-gray-200" />
    </div>
  );
};
