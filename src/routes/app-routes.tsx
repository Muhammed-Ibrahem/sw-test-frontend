import { createBrowserRouter, Navigate } from "react-router";

import { CategoryProductsPage } from "../pages/category-products";
import { ProductDetailsPage } from "../pages/product-details";

import { NotFound } from "../components/errors/not-found";
import { ErrorBoundries } from "../components/errors";
import App from "../App";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundries />,
    children: [
      {
        index: true,
        element: <Navigate to="all" />,
      },
      {
        path: "/:categoryName",
        element: <CategoryProductsPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
