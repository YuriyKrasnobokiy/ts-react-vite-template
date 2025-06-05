import React from 'react'
import { useTranslation } from 'react-i18next';
import { HeaderWrapper } from './Header.styled';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <header>{t("header")}</header>
    </HeaderWrapper>
  )
}

export default Header;