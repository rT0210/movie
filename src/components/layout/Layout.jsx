import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <Header />
      <main className="bg-gray-400 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout
