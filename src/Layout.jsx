import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <main className="container mx-auto flex flex-col min-h-screen justify-between ">
      <div className="flex flex-col gap-4">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
