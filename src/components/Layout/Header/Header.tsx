import React from 'react'
import { useTranslation } from 'react-i18next';
import { HeaderWrapper } from './Header.styled';
import AboutNav from '../../../pages/About/AboutNav/AboutNav';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <HeaderWrapper>
      <header>
        {location.pathname === '/about' ? <AboutNav /> : t("header")}
      </header>
    </HeaderWrapper>
  )
}

export default Header;