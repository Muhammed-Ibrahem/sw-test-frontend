import { createBrowserRouter, Navigate } from "react-router";

import { CategoryProductsPage } from "../pages/category-products";
import { ProductDetailsPage } from "../pages/product-details";
import { NotFound } from "../components/errors/not-found";

import App from "../App";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/all" />,
    errorElement: <NotFound />,
  },
  {
    path: "/:categoryName",
    element: <App />,
    children: [
      {
        index: true,
        element: <CategoryProductsPage />,
      },
    ],
  },
  {
    path: "/product/:productId",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductDetailsPage />,
      },
    ],
  },
]);
