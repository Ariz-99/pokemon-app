import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="grow bg-gradient-to-b from-gray-700 to-black overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
