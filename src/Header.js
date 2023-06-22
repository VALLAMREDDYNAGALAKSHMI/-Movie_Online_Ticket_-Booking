import React from 'react';
import { a } from "react-router-dom";
import './Header.css';


 const Header =()=>{
    
    
    
    return(
        
               <div>
        <a>hiii</a>
     <div className="nav">
<p style={{marginLeft:"160px",fontSize:"20px"}}><b>book<span className="grad1"><i> MY</i></span> movies</b></p>

<input type="text"  placeholder="Search for Movies, Events, Plays, Sports and activities"/>

<p style={{marginLeft:"200px",backgroundColor:"black",padding:"4px",width:"60px",textalign:"center"}}>ONGOLE</p>

<p style={{backgroundColor:"red",padding:"4px",marginLeft:"50px",width:"60px",textalign:"center"}}><i> sign in</i></p>
<i className="fas fa-bars" style={{marginTop:"20px",marginLeft:"50px"}}></i>
</div>
<div className="list">
<a  style={{marginLeft:"30px"}} href="https://www.flipkart.com/">Movies</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Stream</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">NEW</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Events</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Plays</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Sports</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">activities</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Buzz</a>
<a style={{marginLeft:"420px"}} href="https://www.danielwellington.com/in/valentines-day/"> ListYourShow</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Corporates</a>
<a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Offers</a>
    <a style={{marginLeft:"30px"}} href="https://www.danielwellington.com/in/valentines-day/">Gift Cards</a>
    </div>


    
</div>

    )
    }


export default Header;