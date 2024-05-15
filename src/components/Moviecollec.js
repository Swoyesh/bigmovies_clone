import React, { useContext, useEffect, useState } from 'react'
import Cmovie from './Cmovie'
import "../MC.css"
import movieContext from '../Context/movieContext'

const Moviecollec = () => {
  let context = useContext(movieContext)
  const {getMovies} = context
  const [mov, setMov] = useState([])
  let sign1 = "<"
  let sign2 = ">"
  let movie = ["Crakk - Jeetega Toh Jiyegaa", "Teri Baaton Mein Aisa Uljha Jiya", "Gurkha Warrior", "Daya Rani"]
  let total = movie.length
  let newL = total%4;
  let mo1 = []
  mo1 = movie.slice(0, 4)
  let mo2 = []
  if(total>=8){
    mo2 = movie.slice(4, 8)
  }else{
    mo2 = movie.slice(4, 5+newL)
  }
  let mo3 = []
  mo3 = movie.slice(8, 9+newL)
  let [i, setI] = useState(0)
  let [movies, setMovies] = useState(mo1)
  const check = ()=>{
    if(total <= 4){
      setI(1)
      setMovies(mo1)
    }else if(total <=8 && total > 4){
      setI(2)
      setMovies(mo1)
    }else{
      setI(3)
      setMovies(mo1)
    }
  }
  let counter = -1
  let [vi, setVi] = useState("hidden")
  let ss1 = {
    height: "25px", 
    textAlign: "center", 
    borderRadius: "100%", 
    width: "25px", 
    border: "none", 
    textAlign: "center", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position:"relative", 
    left: "10px", 
    color: "#000B4B", 
    visibility: vi
  }
  let ss2 = {
    height: "25px", 
    textAlign: "center", 
    borderRadius: "100%", 
    width: "25px", 
    border: "none", 
    textAlign: "center", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position:"relative", 
    left: "-10px", 
    color: "#000B4B",
    visibility: vi
  }
  const prev = ()=>{
    if(movies[0] == mo1[0]){
    }
    if(i == 2){
      setMovies(mo1)
    }
    if(i == 3){
      if(movies[0] == mo2[0]){
          setMovies(mo1)
        }else if(movies[0] == mo3[0]){
          setMovies(mo2)
        }
      }
  }

  const next = ()=>{
    if(i == 2){
      setMovies(mo2)
    }
    
    if(i == 3){
      if(movies[0] == mo2[0]){
        setMovies(mo3)
      }else if(movies[0] == mo1[0]){
        setMovies(mo2)
      }
    }
  }

  useEffect(() => {
    check()
    if(i>= 2){
      setVi("visible")
    }else{
      setVi("hidden")
    }
    const fetchData = async () => {
      const movies = await getMovies()
      setMov([...mov, ...movies])
    };
  
    fetchData();
  }, []);
  
  return (
    <div className='container'>
      <div className='container' style={{position: "relative", padding: "0px", justifyContent: "center", display: "flex"}}>
      <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
      <button className = 'goody' style={ss1} onClick={prev} ><strong ><span style={{textAlign: "center", fontSize: "25px"}} type = "button"><a>{sign1}</a></span></strong></button>
      </div>
        {mov.map((element)=>{
          {counter++}
          return <Cmovie title = {mov[counter].name} duration = {mov[counter].duration} genre = {mov[counter].genre} img = {mov[counter].img} type = {mov[counter].rating}/>
        })}
        <div className='noice' style={{margin: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button className='goody' style={ss2} onClick={next}><strong ><span style={{textAlign: "center", fontSize: "25px"}}><a>{sign2}</a></span></strong></button>
      </div>
        </div>
    </div>
  )
}

export default Moviecollec