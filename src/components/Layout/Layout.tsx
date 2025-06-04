import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <Sidebar />
      <div style={{display: 'flex', flexDirection: 'column', flex: 3, justifyContent: 'space-between'}}>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
