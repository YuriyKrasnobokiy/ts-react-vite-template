import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { NavWrapper } from "./Navbar.styled";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavWrapper>
      <Link to="/">{t("nav.home")}</Link>
      <Link to="/about">{t("nav.about")}</Link>
    </NavWrapper>
  );
};

export default Navbar;
