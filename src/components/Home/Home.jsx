import "./Home.css"

import React from 'react'
import FirstComponent from "./HomeSubComponents/FirstComponent/FirstComponent"
import SecondComponent from "./HomeSubComponents/SecondComponent/SecondComponent"


const Home = () => {

  return (
    <div className="home">
      <FirstComponent/>
      <SecondComponent/>
    </div>
  )
}

export default Home
