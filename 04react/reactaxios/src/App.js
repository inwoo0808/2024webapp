import React from "react";
import { Link, Route, Routes, NavLink, useParams } from "react-router-dom";
import LayoutComp from "./layout/LayoutComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/products" element={<ProductComp />}>
            <Route path=":id"></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
