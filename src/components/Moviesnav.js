import React, { useState, useEffect } from 'react'
import "../moviesnav.css"
import { Link } from 'react-router-dom'

const Moviesnav = () => {
  const d = new Date();
  const ld = new Date(d.getFullYear(), d.getMonth()+1, 0)
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let arr = [];
  let newArr = [];
  for (let index = 0; index < 8; index++) {
    if(index === 0){
      if(d.getDate() + 2>ld.getDate()){
        arr[index] = 1;
      }else{
        arr[index] = d.getDate() + 2
      }
    }else{
      if(arr[index-1] === ld.getDate()){
        arr[index] = 1
      }else{
        arr[index] = arr[index-1] + 1;
      }    
    } 
  }

  const cm = (index)=>{
    if(arr[index]<ld.getDate()){
      return d.getMonth()+1
    }else{
      return d. getMonth()
    }
  }

  for (let index = 0; index < 8; index++) {
    newArr[index] = arr[index].toString();
  }
  let [activeTab, setActiveTab] = useState("Today")
    let style = {
        color: "white",
        fontSize: "30px"
    }
    let clicked = (state)=>{
      setActiveTab(state)
    }
  return (
    <div className='container'>
        <div className='text' style={style}><strong>Now Showing<span style={{color: "red"}}> .</span></strong></div>
        <div className='dates'>
          <Link className={activeTab==="Today"?'actor':'dice'} onClick={()=>clicked("Today")}>Today</Link>
          <Link className={activeTab==="Tomm"?'actor':'dice'} onClick={()=>clicked("Tomm")}>Tomm</Link>
          <Link className={activeTab==="1"?'actor':'dice'} onClick={()=>clicked("1")}>{newArr[0].concat(" ", month[cm(0)])}</Link>
          <Link className={activeTab==="2"?'actor':'dice'} onClick={()=>clicked("2")}>{newArr[1].concat(" ", month[cm(1)])}</Link>
          <Link className={activeTab==="3"?'actor':'dice'} onClick={()=>clicked("3")}>{newArr[2].concat(" ", month[cm(2)])}</Link>
          <Link className={activeTab==="4"?'actor':'dice'} onClick={()=>clicked("4")}>{newArr[3].concat(" ", month[cm(3)])}</Link>
          <Link className={activeTab==="5"?'actor':'dice'} onClick={()=>clicked("5")}>{newArr[4].concat(" ", month[cm(4)])}</Link>
          <Link className={activeTab==="6"?'actor':'dice'} onClick={()=>clicked("6")}>{newArr[5].concat(" ", month[cm(5)])}</Link>
          <Link className={activeTab==="7"?'actor':'dice'} onClick={()=>clicked("7")}>{newArr[6].concat(" ", month[cm(6)])}</Link>
          <Link className={activeTab==="8"?'actor':'dice'} onClick={()=>clicked("8")}>{newArr[7].concat(" ", month[cm(7)])}</Link>
        </div>
    </div>
  )
}

export default Moviesnav