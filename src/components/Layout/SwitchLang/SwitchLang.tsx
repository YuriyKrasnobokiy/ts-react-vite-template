import React from "react";
import { useTranslation } from "react-i18next";
import { SwitchLangBtn, SwitchLangWrap } from "./SwitchLang.styled";

const SwitchLang: React.FC = () => {
  const { i18n } = useTranslation();
  const switchLanguage = (lang: "en" | "ua"): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <SwitchLangWrap>
      <SwitchLangBtn onClick={() => switchLanguage("ua")}>UA</SwitchLangBtn>
      <SwitchLangBtn onClick={() => switchLanguage("en")}>EN</SwitchLangBtn>
    </SwitchLangWrap>
  );
};

export default SwitchLang;
