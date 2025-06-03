import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
   const { t } = useTranslation();
  return (
    <div>{t("footer")}</div>
  )
}

export default Footer