import type { ReactNode } from "react";

import { Error } from "./error";

export const ServerError = (): ReactNode => {
  const errInfo = {
    statusCode: 500,
    title: "Oops! That's on us.",
    description:
      "Our server had a little hiccup. We're working to fix it — please try again soon.",
  };
  return <Error {...errInfo} />;
};
