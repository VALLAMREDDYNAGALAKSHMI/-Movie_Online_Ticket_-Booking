import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './LatestMoviesCard.css';

const EventsCard =()=>{
const[movies, setmovies]=useState([]);


useEffect(()=>{
    axios.get('http://3.17.216.66:4000/events')
    
    .then((resobj) => {
      console.log(resobj.data);
      setmovies(resobj.data);

    });
},[])
return(

<div> 
      {movies.map((item, index) => ( 
        <div style={{marginLeft:"400px"}} key={index}>
      <div className="gallery" >
      <img src={item.imageUrl} alt="Cinque Terre" style={{width:"400px",height:"200px",}} />
      <div className="desc">
        <p><b>language:</b>{item.language}</p>
        <p><b><i>MovieName:</i></b>{item.name}</p>
        <p><b>Rate:</b>{item.rate}</p>
        <p><b>{item.type}</b></p>
        
        </div>
      
        </div></div>))}
    </div>
    )
};
export default EventsCard ;
