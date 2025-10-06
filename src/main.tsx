import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ApolloProvider } from "@apollo/client/react";
import { RouterProvider } from "react-router";

import { APOLLO_CLIENT } from "./apollo/apollo-client";
import { ROUTER } from "./routes/app-routes";

import { CartProvider } from "./context/cart-context";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={APOLLO_CLIENT}>
      <CartProvider>
        <RouterProvider router={ROUTER} />
      </CartProvider>
    </ApolloProvider>
  </StrictMode>,
);
