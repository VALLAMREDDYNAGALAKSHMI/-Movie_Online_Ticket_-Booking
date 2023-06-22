
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './LatestMoviesCard.css';

const LatestMoviesCard =()=>{
const[movies, setmovies]=useState([]);
const Booknow =( p2) =>{
  
  console.log(p2);

 window.localStorage.setItem("movieid",p2);
 
  navigate("/Details");
}
const navigate=useNavigate();

useEffect(()=>{
    axios.get(' http://3.17.216.66:4000/latest')
    
    .then((resobj) => {
      console.log(resobj.data);
      setmovies(resobj.data);

    });
},[])
return(

<div> 
      {movies.map((item, index) => ( 
      <div className="gallery" key={index}>
      <img src={item.imageUrl} alt="Cinque Terre" style={{width:"400px"}} />
      <div className="desc">
        <p><b>language:</b>{item.language}</p>
        <p><b><i>MovieName:</i></b>{item.name}</p>
        <p><b>Rate:</b>{item.rate}</p>
        <p><b>{item.type}</b></p>
         <button onClick={() => {
      Booknow(item._id);
   }}>BOOK NOW</button>
        </div>
      
    </div>))}
    </div>
    )


};
export default LatestMoviesCard;