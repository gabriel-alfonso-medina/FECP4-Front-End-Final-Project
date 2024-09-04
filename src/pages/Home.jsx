import Favorites from "../components/Favorites";
import Ketogenic from "../components/Ketogenic";
import Popular from "../components/Popular";

import React from 'react'

function Home() {
  return (
    <div>
      <Popular />
      <Favorites />
      <Ketogenic />
    </div>

  )
}



export default Home