import React from "react";
import { NavStyled } from "./AboutNav.styled";

const AboutNav: React.FC = () => {
  return (
    <NavStyled>
      {[...Array(10)].map((_, index) => (
        <a href={`#target-section-${index}`} key={index}>
          Секція {index}
        </a>
      ))}
    </NavStyled>
  );
};

export default AboutNav;
