import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../organisms/MainLayout";
import Top from "../organisms/Top";
import About from "../organisms/About";
import LookBack from "../organisms/LookBack";
import IntervalText from "../organisms/IntervalText";
import Menu from "../organisms/Menu";
import WhatIDo from "../organisms/WhatIDo";
import Footer from "../organisms/Footer";
import { ARTICLE_TYPE } from "../organisms/Article/data";
import Article from "../organisms/Article";
import ScrollTop from "../atoms/ScrollTop";

const Templates: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <ScrollTop />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MainLayout>
                <>
                  <Menu />
                  <Top />
                  <About />
                  <LookBack />
                  <IntervalText />
                  <WhatIDo />
                  <Footer />
                </>
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.KYOTO_LIFE}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.KYOTO_LIFE} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.DESIGN_ENGINEER}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.DESIGN_ENGINEER} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.NEW_LIFE}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.NEW_LIFE} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.MIDORI}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.MIDORI} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.ACID_COFFEE_TOKYO}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.ACID_COFFEE_TOKYO} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.FIRST_VISITING}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.FIRST_VISITING} />
              </MainLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Templates;
