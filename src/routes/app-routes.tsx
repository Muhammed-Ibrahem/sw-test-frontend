import { createBrowserRouter } from "react-router";

import { CategoryProductsPage } from "../pages/category-products";
import App from "../App";
import { ProductDetailsPage } from "../pages/product-details";

export const ROUTER = createBrowserRouter([
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
