import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import Featured from "../../components/featured/Featured"

import "./home.scss"
import React from 'react'

function Home() {
  return (
    <div className="home">
      <Navbar/> 
      <Featured/>
      {/* <img width ="100%" src="https://pbs.twimg.com/media/C1N_8R2WEAABYWK.jpg" alt="" /> */}
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home