import type { FC, PropsWithChildren } from "react";

import { CartBackDrop } from "../cart/cart-backdrop";
import { Navbar } from "../navbar";

export const ErrorLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="container mx-auto px-4">
        <Navbar />
      </header>
      <main className="relative min-h-[calc(100vh-80px)] w-full">
        <CartBackDrop />
        <div className="container mx-auto px-4 py-20">{children}</div>
      </main>
    </>
  );
};
