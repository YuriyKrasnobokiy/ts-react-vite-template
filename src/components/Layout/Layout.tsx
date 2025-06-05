import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutMainWrapper, LayoutWrapper } from "./Layout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <LayoutWrapper >
      <Sidebar />
      <LayoutMainWrapper >
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </LayoutMainWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
