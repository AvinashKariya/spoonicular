import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchedRes from "./SearchedRes";
import Recipe from "./Recipe";
const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/search/:input' element={<SearchedRes />} />
      <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
