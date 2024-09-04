import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import RecipePage from './RecipePage';
import AboutMe from '../components/AboutMe';
import {Route, Routes} from "react-router-dom";


function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<RecipePage />}/>
        <Route path="/about" element={<AboutMe />} />
      </Routes>
  )
}

export default Pages