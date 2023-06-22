import React, { useEffect, useState } from "react";
import './movieSlider.css';


const  MovieSlider = ()=>{
         const showSlides = ( p1)=> {
        
    
        let slideIndex=p1;
        let i;

        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        //slideIndex++;

           
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
     /*setTimeout(showSlides(), 2000); */// Change image every 2 seconds
     /*showSlides();*/

      }
    useEffect(()=>{
        /*setInterval(showSlides(), 2000); // Change image every 2 seconds*/
        let count=0;
        setInterval(() => {
            //let count=Slidercount +1;
            count++;
            if(count>3 ){
                count=0;
                count++;
            }
            
            //setSlidercount(currCount => currCount + 1)
            //setSlidercount(current => current + 1)
            
            //setSlidercount(count);
            showSlides(count);
          }, 4000);
       
   },[]);
    return(
        <div>
            
        <div className="slideshow-container">

<div className="mySlides fade">
  
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8b3L8UkYncC8_ZAJ5_cDUPZFbKWMbon-Mg&usqp=CAU" style={{width:"100%", height:"400px"}}/>
  
</div>

<div className="mySlides fade">
  
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIaW05vQGC9eZmoonUa-5nyt1Rlv19oTxvQLihNHGqlhJBsJ0TXST39Soi-D990xkwfQ&usqp=CAU" style={{width:"100%", height:"400px"}}/>
  
</div>

<div className="mySlides fade">
  
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZGrkB-3wqqhi9J4P0pP7o7wqGWGP33O_zA&usqp=CAU" style={{width:"100%", height:"400px"}}/>
  
</div>
</div>
<br/>

<div style={{textAlign:"center"}}>
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
</div>
</div>

    )
}
export default MovieSlider;