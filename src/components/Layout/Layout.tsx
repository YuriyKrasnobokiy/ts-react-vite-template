import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutMainWrapper, LayoutWrapper } from "./Layout.styled";
import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <LayoutMainWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutMainWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
