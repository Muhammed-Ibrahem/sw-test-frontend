import { CombinedGraphQLErrors } from "@apollo/client";
import { isRouteErrorResponse, useRouteError } from "react-router";

import { ErrorLayout } from "./error-layout";
import { Error } from "./error";

const ERR_DESCRIPTIONS: Record<number, string> = {
  500: "Our server had a little hiccup. We're working to fix it — please try again soon",
  404: "Sorry, we couldn't find the page you're looking for.",
};
const errInfo = {
  statusCode: 500,
  title: "Oops! That's on us.",
  description: ERR_DESCRIPTIONS[500],
};

export const ErrorBoundries = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorLayout>
        <Error
          statusCode={error.status}
          title={error.statusText}
          description={error.data?.message ?? ERR_DESCRIPTIONS[500]}
        />
      </ErrorLayout>
    );
  }

  if (CombinedGraphQLErrors.is(error)) {
    const err = error.errors[0];
    const statusCode =
      (error.errors[0].extensions?.["status"] as number) || 500;

    return (
      <ErrorLayout>
        <Error
          statusCode={statusCode}
          title={err.message || errInfo.title}
          description={ERR_DESCRIPTIONS[statusCode] || errInfo.description}
        />
      </ErrorLayout>
    );
  }

  return (
    <ErrorLayout>
      <Error {...errInfo} />
    </ErrorLayout>
  );
};
