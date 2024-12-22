import "./Home.css"

import React from 'react'
import FirstComponent from "./HomeSubComponents/FirstComponent/FirstComponent"
import SecondComponent from "./HomeSubComponents/SecondComponent/SecondComponent"
import Category from "./HomeSubComponents/category/Category"
import NewArrival from "./HomeSubComponents/NewArrival/NewArrival"


const Home = () => {

  return (
    <main className="home">
      <FirstComponent/>
      <SecondComponent/>
      <Category/>
      <NewArrival/>
    </main>
  )
}

export default Home
