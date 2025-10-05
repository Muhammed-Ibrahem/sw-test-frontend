import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header className="container mx-auto h-20 px-4">
        {/* TODO: NAVBAR */}
      </header>
      <main className="container mx-auto px-4 py-20">
        <Outlet />
      </main>
    </>
  );
}

export default App;
