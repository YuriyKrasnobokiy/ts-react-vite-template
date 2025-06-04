import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (lang: "en" | "ua"): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <p>LOGO</p>

      <nav style={{ display: "flex", flexDirection: "column", }}>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/about">{t('nav.about')}</Link>
      </nav>

      <div>
        <p>{t("welcome")}</p>
        <button style={{ width: "100%" }} onClick={() => switchLanguage("ua")}>
          UA
        </button>
        <button style={{ width: "100%" }} onClick={() => switchLanguage("en")}>
          EN
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
