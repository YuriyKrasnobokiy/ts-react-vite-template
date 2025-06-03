import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div style={{display: 'flex', height: '95dvh'}}>
      <Sidebar />
      <div style={{display: 'flex', flexDirection: 'column', flex: 3}}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
