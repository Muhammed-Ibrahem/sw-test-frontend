import { Outlet } from "react-router";
import { Toaster } from "sonner";

import { CartBackDrop } from "./components/cart/cart-backdrop";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <header className="container mx-auto px-4">
        <Navbar />
      </header>
      <main className="relative min-h-[calc(100vh-80px)] w-full">
        <CartBackDrop />
        <div className="container mx-auto px-4 py-20">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
