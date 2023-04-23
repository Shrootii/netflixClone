import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import Featured from "../../components/featured/Featured"
import {useEffect, useState} from "react"

import "./home.scss"
import React from 'react'
import axios from 'axios'

function Home({type}) {
  const[lists,setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  //whenever we will change type or genre, this useEffect function will be called
  useEffect(()=> {
    const getRandomLists = async() => {
      try{
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre?"&genre=" + genre:""}`,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDU1MWJiYzI5MGNjNjgwMzNlNmI2MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODIyNjQ3MjUsImV4cCI6MTY4MjQzNzUyNX0.ayTZDTxEuX9MZjrdAW07pF4-TfWUWPM16Rd7atNH5gA"
          }
        });
        //setLists(res.data)
        console.log(res)
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  },[type,genre]);
  
  return (
    <div className="home">
      <Navbar/> 
      {/* <img width ="100%" src="https://pbs.twimg.com/media/C1N_8R2WEAABYWK.jpg" alt="" /> */}
      <Featured type = {type}/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home