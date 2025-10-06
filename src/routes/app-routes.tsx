import { createBrowserRouter, Navigate } from "react-router";

import { CategoryProductsPage } from "../pages/category-products";
import { ProductDetailsPage } from "../pages/product-details";

import App from "../App";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/all" />,
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
