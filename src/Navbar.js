import React from "react";
import './Navbar.css';

const Navbar =()=>{
return(
    <div>
<div className="nav">
<p  style={{marginLeft:"160px",fontSize:"20px"}}><b>book<span className="grad1"><i> MY</i></span> movies</b></p>
<form>
<input type="text" name="search" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
</form>
<p  style={{marginLeft:"200px",backgroundColor:"black",padding:"4px",width:"60px",textAlign:"center"}}>ONGOLE</p>

<p style={{backgroundColor:"red",padding:"4px",marginLeft:"50px",width:"60px",textAlign:"center"}}><i> sign in</i></p>
<i className="fas fa-bars" style={{marginTop:"20px",marginLeft:"50px"}}></i>
</div>
<div className="list">
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Movies</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Stream</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">NEW</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Events</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Plays</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Sports</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Activities</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Buzz</a>
<a style={{marginLeft:"420px"}}href="https://www.danielwellington.com/in/valentines-day/"> ListYourShow</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Corporates</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Offers</a>
<a style={{marginLeft:"30px"}}href="https://www.danielwellington.com/in/valentines-day/">Gift Cards</a>
</div>


<div style={{display:"flex", marginTop:"10px"}}>
<a className="box" href="/latest"><b><i>Latest Movies</i></b></a>


<a className="box" href="/upcoming"><b><i>Upcoming Movies</i></b></a>

<a className="box" href=" /events" ><b><i>Nearby Movies</i></b></a>

</div>
</div>

)
};
export default Navbar ;