import { createBrowserRouter } from "react-router";

import { CategoryProductsPage } from "../pages/category-products";
import App from "../App";

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
]);
