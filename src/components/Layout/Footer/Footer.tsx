import React from 'react'
import { useTranslation } from 'react-i18next';
import { FooterWrap } from './Footer.styled';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterWrap>
      <footer>{t("footer")}</footer>
    </FooterWrap>
  )
}

export default Footer