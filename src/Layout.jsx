import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <main className="container mx-auto flex flex-col h-screen justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
