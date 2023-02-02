import React from "react";
import {Route, Routes} from "react-router";
import "./App.scss";
import HomePage from "../common/pages/HomePage/HomePage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/aboutUs" element={<HomePage/>}/>
    <Route path="/pricing" element={<HomePage/>}/>
    <Route path="/comingSoon" element={<HomePage/>}/>

  </Routes>
);

export default App;
