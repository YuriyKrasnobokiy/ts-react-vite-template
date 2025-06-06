import type React from "react";
import { useTranslation } from "react-i18next";
const Home: React.FC = () => {
  const {t} = useTranslation();
  // const [loading, setIsLoading] = useState(false);
  
  return (
    <>
      <h2>{t('home')}</h2>
      {/* {loading ? <Loader overlay={true}/> : <h2>{t('home')}</h2>} */}
    </>
  )
}

export default Home;