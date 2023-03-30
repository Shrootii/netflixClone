import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import React from 'react'

function Home() {
  return (
    <div className="home">
      <Navbar/> 
      <img width ="100%" src="https://pbs.twimg.com/media/C1N_8R2WEAABYWK.jpg" alt="" />
    </div>
  )
}

export default Home