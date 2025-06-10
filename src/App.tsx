import React, { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStyles from "./GlobalStyles";
import "./i18n";
import { ThemeProviderWrapper } from "./contexts/ThemeProviderWrapper";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ThemeProviderWrapper>
    </>
  );
};

export default App;
