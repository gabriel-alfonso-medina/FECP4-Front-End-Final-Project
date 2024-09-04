import Favorites from "../components/Favorites";
import Ketogenic from "../components/Ketogenic";
import PopularItems from "../components/PopularItems";

import React from 'react'

function HomePage() {
  return (
    <div>
      <PopularItems />
      <Favorites />
      <Ketogenic />
    </div>

  )
}



export default HomePage