import React from "react";
import { Route, Routes } from "react-router";
import Mian from "./pages/Mian";
import N3 from "./pages/N3";
import N2 from "./pages/N2";
import N1 from "./pages/N1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mian />}></Route>
      <Route path="n3" element={<N3 />}></Route>
      <Route path="n2" element={<N2 />}></Route>
      <Route path="n1" element={<N1 />}></Route>
    </Routes>
  );
};

export default App;
