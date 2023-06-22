
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import './details.css';

const Details =() =>{
    const[most, setmost] = useState([]);
    const navigate = useNavigate();
 const Booktickets =(p3,p4)=>{

window.localStorage.setItem("title",p3);
window.localStorage.setItem("language",p4);
navigate("/Select");
 }
 
    useEffect(()=>{
      let movieid = window.localStorage.getItem('movieid');
    
        axios.get('http://3.17.216.66:4000/latest/'+ movieid)
        
        .then((resobj) => {
          console.log(resobj.data);
          setmost(resobj.data);

    
        });
    },[])
    
    return(

        <div>

{most.map((item, index) => ( 
      <div key={index}>     
      <img src={item.imageUrl} alt="Pineapple" style={{width:"300px",height:"300px",marginRight:"15px",marginLeft:"400px"}}/>
      <h1> <b>{item.name}</b></h1>
      <p><b style={{fontSize:"25px"}}>{item.rate}/5</b>32.2K votes</p>
      <div>
      <span style={{backgroundColor:"rgba(12,12,10,0.1)",padding:"10px"}}><b>{item.type} </b></span></div><br/><br/>
      <div style={{float:"left" }}>
      <span style={{backgroundColor:"rgba(10,1,3,0.1)",padding:"10px"}}>2D</span>
      
      <span style={{backgroundColor:"rgba(12,12,10,0.1)",padding:"10px",marginLeft:"60px"}}>{item.language}</span></div><br/><br/>
      <div style={{float:"left"}}>
      <span>2h 20m
      •
      Action
      ,
      Drama
      •
      U
      •
      17 Feb, 2023</span></div><br/><br/><br/>
      <div style={{float:"left",marginLeft:"100px"}}>
      <botton     onClick={() => {
      Booktickets(item.name,item.language);
   }} style={{backgroundColor:"red",padding:"15px",borderRadius:"5px"}}> Book Tickets</botton></div>
      </div>))}
        </div>

    )
}
export default Details;