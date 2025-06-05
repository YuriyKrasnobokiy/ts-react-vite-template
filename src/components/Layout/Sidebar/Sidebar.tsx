import React from "react";
import { SidebarWrap } from "./Sidebar.styled";
import Navbar from "../Navbar/Navbar";
import SwitchLang from "../SwitchLang/SwitchLang";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Sidebar: React.FC = () => {

  return (
    <SidebarWrap>
      <p>LOGO</p>
      <Navbar />
      <SwitchLang />
      <ThemeSwitch />
    </SidebarWrap>
  );
};

export default Sidebar;
