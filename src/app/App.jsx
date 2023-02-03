import React from "react";
import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import AboutUsPage from "../common/pages/AboutUsPage/AboutUsPage";
import ComingSoonPage from "../common/pages/ComingSoonPage/ComingSoonPage";
import HomePage from "../common/pages/HomePage/HomePage";
import PricingPage from "../common/pages/PricingPage/PricingPage";
import "./App.scss";

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper/>}>
      <Route path="/" index element={<HomePage/>}/>
      <Route path="/aboutUs" element={<AboutUsPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="*" element={<ComingSoonPage/>}/>
    </Route>
  </Routes>
);

export default App;
