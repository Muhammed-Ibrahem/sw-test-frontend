import type { ReactNode } from "react";

import { Error } from "./error";

export const NotFound = (): ReactNode => {
  const errInfo = {
    statusCode: 404,
    title: "Page not found",
    description: "Sorry, we couldn't find the page you're looking for.",
  };
  return <Error {...errInfo} />;
};
