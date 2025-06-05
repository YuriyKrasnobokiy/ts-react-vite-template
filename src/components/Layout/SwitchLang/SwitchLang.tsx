import React from "react";
import { useTranslation } from "react-i18next";
import { SwitchLangWrap } from "./SwitchLang.styled";

const SwitchLang: React.FC = () => {
  const { i18n } = useTranslation();
  const switchLanguage = (lang: "en" | "ua"): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <SwitchLangWrap>
      <button onClick={() => switchLanguage("ua")}>UA</button>
      <button onClick={() => switchLanguage("en")}>EN</button>
    </SwitchLangWrap>
  );
};

export default SwitchLang;
