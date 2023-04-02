import "./list.scss"
import React, { useRef, useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Listitem from "../listitem/Listitem"

function List() {

    const [clicknum, setclicknum] =useState(0);
    const [showarrow, setshowarrow] =useState(false);
const myref=useRef();
    const handleClick=(dir)=>{
        setshowarrow(true)
if(dir ==="numleft"  && clicknum>0){
setclicknum(clicknum-1);
    let leftSpace=myref.current.getBoundingClientRect().x - 40
myref.current.style.transform= `translateX(${330+leftSpace}px)`

}
if(dir ==="numright"  && clicknum<3){
setclicknum(clicknum+1)
    let rightSpace=myref.current.getBoundingClientRect().x - 40
myref.current.style.transform= `translateX(${-330+rightSpace}px)`

}
    }

  return (
    <div className="list">
        <span className="nameList">Continue watching</span>
        <div className="onelist">
<ArrowLeftIcon className="arrow left" onClick={()=>handleClick("numleft")}  style={{display: !showarrow && "none"}} />

<div className="onelistContainer"  ref={myref}>
    <Listitem/>
    <Listitem/>
    <Listitem/>
    <Listitem/>
    <Listitem/>
    <Listitem/>
    

</div>

<ArrowRightIcon  className="arrow right"  onClick={()=>handleClick("numright")}/>
        </div>
        </div>
  )
} 

export default List