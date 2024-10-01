import React from "react";
import { Link, Route, Routes, NavLink, useParams } from "react-router-dom";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈</Link> |
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        | <Link to="/product">product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/product/:num" element={<ProductComp />} />
      </Routes>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        repellat.
      </footer>
    </div>
  );
}

export default App;
