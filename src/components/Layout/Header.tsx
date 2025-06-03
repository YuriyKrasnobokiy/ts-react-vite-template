import React from 'react'
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>{t("header")}</div>
  )
}

export default Header