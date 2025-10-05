import { Outlet } from "react-router";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <header className="container mx-auto px-4">
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-20">
        <Outlet />
      </main>
    </>
  );
}

export default App;
