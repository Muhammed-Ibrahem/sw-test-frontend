import { createBrowserRouter } from "react-router";
import App from "../App";

export const ROUTER = createBrowserRouter([
  {
    path: "/:categoryName",
    element: <App />,
  },
]);
