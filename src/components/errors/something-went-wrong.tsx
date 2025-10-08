import type { ReactNode } from "react";

export const SomethingWentWrong = (): ReactNode => {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-gray-900">
        Something Went wrong
      </h3>
      <p className="max-w-md text-sm text-gray-600">
        We're working on fixing the issue
      </p>
    </div>
  );
};
