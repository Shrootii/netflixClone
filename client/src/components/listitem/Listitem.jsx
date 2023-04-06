import "./listitem.scss"
import React from 'react'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Listitem() {
  return (
    <div className="listitem">
        <img src="https://www.boredpanda.com/blog/wp-content/uploads/2022/06/aesthetically-pleasing-movies-18-62975cb878436__880.jpg" alt="" />
   
        <div className="eachitem">

<div className="icons">

<PlayCircleFilledWhiteIcon/>
<FavoriteBorderIcon/>
</div>

        </div>
   
    </div>

   
  )
}

export default Listitem