import type React from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader/Loader";
import { useState } from "react";

const Home: React.FC = () => {
  const {t} = useTranslation();
  const [loading, setIsLoading] = useState(false);
  return (
    <>
      {loading ? <Loader /> : <h2>{t('home')}</h2>}
    </>
  )
}

export default Home;