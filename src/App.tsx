import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStyles from "./GlobalStyles";
import './i18n';
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeProviderWrapper } from "./contexts/ThemeProviderWrapper";

const App: React.FC = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
    <ThemeProviderWrapper>
      <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    </ThemeProviderWrapper>
    </>
  );
};

export default App;
