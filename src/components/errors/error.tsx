import type { ReactNode } from "react";
import { Link } from "react-router";

interface IErrorComponent {
  statusCode: number;
  title: string;
  description: string;
}

export const Error = ({
  statusCode,
  title,
  description,
}: IErrorComponent): ReactNode => {
  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-base font-semibold">{statusCode}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          {title}
        </h1>
        <p className="text-grayed mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          {description}
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
    </div>
  );
};
