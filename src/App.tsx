import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './i18n';
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useTranslation } from "react-i18next";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    </>
  );
};

export default App;
