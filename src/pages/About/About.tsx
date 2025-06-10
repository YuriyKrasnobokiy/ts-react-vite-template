import type React from "react";
import { useTranslation } from "react-i18next";
import { AboutWrap } from "./About.styled";
import Section from "./Section/Section";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AboutWrap>
      <h2>{t("about")}</h2>
      {[...Array(10)].map((_, index) => (
        <Section id={`target-section-${index}`} count={index} key={index} />
      ))}
    </AboutWrap>
  );
};

export default About;
