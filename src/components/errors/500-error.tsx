import type { ReactNode } from "react";
import { Link } from "react-router";

export const ServerError = (): ReactNode => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-base font-semibold">500</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Oops! That's on us.
        </h1>
        <p className="text-grayed mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          Our server had a little hiccup. We're working to fix it — please try
          again soon.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="bg-primary focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};
