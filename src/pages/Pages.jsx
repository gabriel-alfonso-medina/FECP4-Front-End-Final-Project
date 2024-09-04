import React from 'react'
import HomePage from './HomePage';
import Cuisine from './Cuisine';
import SearchedRecipe from './SearchedRecipe';
import RecipePage from './RecipePage';
import AboutMe from '../components/AboutMe';
import {Route, Routes} from "react-router-dom";


function Pages() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/searched/:search" element={<SearchedRecipe />}/>
        <Route path="/recipe/:name" element={<RecipePage />}/>
      </Routes>
  )
}

export default Pages