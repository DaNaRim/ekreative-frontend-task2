import React from "react";
import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/PageWrapper/PageWrapper";
import HomePage from "../common/pages/HomePage/HomePage";
import "./App.scss";

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper/>}>
      <Route path="/" index element={<HomePage/>}/>
      <Route path="/aboutUs" element={<HomePage/>}/>
      <Route path="/pricing" element={<HomePage/>}/>
      <Route path="/comingSoon" element={<HomePage/>}/>
    </Route>
  </Routes>
);

export default App;
