import type React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const {t} = useTranslation();
  return (
    <h2>{t('home')}</h2>
  )
}

export default Home;