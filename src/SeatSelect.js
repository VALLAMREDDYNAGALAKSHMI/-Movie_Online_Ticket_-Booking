import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './SeatSelect.css';
const SeatSelect =() =>{
    const navigate = useNavigate();

     const [seatCount,setseatCount]=useState(0);
  const  Seatselection=(e)=>{
console.log("hlo");
e.target.classList.toggle("seatselected");
let x=document.getElementsByClassName("seatselected")
setseatCount(x.length);
console.log(x.length);
if(x.length > 10){
   
    alert("max seats 10");
    e.target.classList.toggle("seatselected");
}
  }
  const  Seatselection1=(e, p1)=>{
    console.log("hlo");
    e.target.classList.toggle("seatselected");
    e.target.classList.toggle(p1);

    let x=document.getElementsByClassName("seatselected")
    setseatCount(x.length);
    console.log(x.length);
    if(x.length > 10){
       
        alert("max seats 10");
        e.target.classList.toggle("seatselected");
        e.target.classList.toggle(p1);
    }
      }
  const Procesed =()=>{

    let total= document.getElementsByClassName("seatselected");
    let u=document.getElementsByClassName("upper");
    let m=document.getElementsByClassName('medium');
    let l=document.getElementsByClassName("lower");
console.log(u.length);
console.log(m.length);
console.log(l.length);
    console.log(total.length);
    
   
    window.localStorage.setItem('address' , "G2V Theaters, Ravi Priya Mall: Ongole (SCREEN 3)");
    window.localStorage.setItem('total' , total.length);
    window.localStorage.setItem("upper" , u.length);
    window.localStorage.setItem("medium" , m.length);
    window.localStorage.setItem("lower" , l.length);
    window.localStorage.setItem("upperprice" , 250);
    window.localStorage.setItem("middleprice" , 150);
    window.localStorage.setItem("lowerprice" , 70);


    navigate("/payment");
  }
    return(
<div>
<div className="nav">
<p  style={{marginLeft:"100px",fontSize:"20px"}}><b>Balagam</b><br/><span  style={{fontSize:"15px",color:"gray"}}>G2V Theaters, Ravi Priya Mall: Ongole | Today, 10 Mar, 02:45 PM</span></p>

<p style={{marginLeft: "850px",border:"1px solid gray",padding:"10px",width:"60px"}}>2 Tickets</p>
</div>

<div className="time1">
< a className="time"style={{backgroundColor: "rgba(60, 179, 113,0.7)"}} href="default.asp" target="_blank" >02:45pm</a>
<a className="time" href="default.asp" target="_blank" >02:45pm</a>
<a className="time" href="default.asp" target="_blank" >02:45pm</a></div>

<div className="seats">
<p>PLATINUM-Rs. 250.00</p>
<hr style={{marginRight:"200px"}}/>
<table>
  
    
  <tr>
<td className="able">AA</td>
    <td onClick={(e) => {
      Seatselection1(e, "upper");
   }}>1</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "upper");
   }}>3</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>4</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>5</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>6</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}  >7</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }} >8</td>
    <td   onClick={(e) => {
      Seatselection1(e, "upper");
   }}>9</td>
    <td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>10</td>
<td  onClick={(e) => {
      Seatselection1(e, "upper");
   }} >11</td>
<td   onClick={(e) => {
      Seatselection1(e, "upper");
   }}>12</td>
<td   onClick={(e) => {
      Seatselection1(e, "upper");
   }}>13</td>
<td   onClick={(e) => {
      Seatselection1(e, "upper");
   }}>13</td>
<td  onClick={(e) => {
      Seatselection1(e, "upper");
   }} >14</td>
<td   onClick={(e) => {
      Seatselection1(e, "upper");
   }}>15</td>
<td   onClick={(e) => {
      Seatselection1(e, "upper");
   }}>16</td>
<td  onClick={(e) => {
      Seatselection1(e, "upper");
   }} >17</td>

<td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>18</td>
<td  onClick={(e) => {
      Seatselection1(e, "upper");
   }}>19</td>

  </tr>
  
</table>
</div>

<div className="seats">
<p>GOLD-Rs. 150.00</p>
<hr style={{marginRight:"200px"}}/>
<table>  
  <tr>
    <td   className="able">A</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}} >1</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
    
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
     <td onClick={(e) => {
      Seatselection1(e, "medium")}} >16</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>19</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >26</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>27</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>28</td>

  </tr>
  <tr>
<td className="able">B</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>

  </tr>
<tr>
<td className="able">C</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


  </tr>
<tr>
<td className="able">D</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


  </tr>
<tr>
<td className="able">-</td>
    <td className="non">1</td>
    <td className="non">2</td>
  
    <td className="non">3</td>
    <td className="non">4</td>
    <td className="non">5</td>
    <td className="non">6</td>
<td className="non">6</td>
    <td className="non">7</td>
    <td className="non">8</td>
    <td className="non">9</td>
    <td className="non">10</td>
<td className="non">11</td>
<td className="non">12</td>
<td className="non">13</td>
<td className="non">13</td>
<td className="non">14</td>
<td className="non">15</td>
<td className="non">16</td>
<td className="non">17</td>
<td className="non">18</td>
<td className="non">19</td>
<td className="non">19</td>
<td className="non">19</td>


<td className="non">20</td>
<td className="non">21</td>
<td className="non">22</td>
<td className="non">23</td>
<td className="non">24</td>
<td className="non">25</td>

  </tr>
<tr>
  <td className="able">E</td>
  <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>

</tr>
<tr>
<td className="able">F</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>

</tr>
  <tr>
<td className="able">G</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>

</tr>
<tr>
<td className="able">H</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


</tr>
<tr>
<td className="able">I</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>

</tr>
<tr>
<td className="able">J</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>

</tr>
<tr>
<td className="able">K</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


</tr>
<tr>
<td className="able">L</td>
    
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


</tr>
<tr>
<td className="able">-</td>
    <td className="non">1</td>
    <td className="non">2</td>
  
    <td className="non">3</td>
    <td className="non">4</td>
    <td className="non">5</td>
    <td className="non">6</td>
<td className="non">6</td>
    <td className="non">7</td>
    <td className="non">8</td>
    <td className="non">9</td>
    <td className="non">10</td>
<td className="non">11</td>
<td className="non">12</td>
<td className="non">13</td>
<td className="non">13</td>
<td className="non">14</td>
<td className="non">15</td>
<td className="non">16</td>
<td className="non">17</td>
<td className="non">18</td>
<td className="non">19</td>
<td className="non">19</td>
<td className="non">19</td>


<td className="non">20</td>
<td className="non">21</td>
<td className="non">22</td>
<td className="non">23</td>
<td className="non">24</td>
<td className="non">25</td>

  </tr>
<tr>
<td className="able">M</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


  </tr>
<tr>
<td className="able">N</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


  </tr>
<tr>
<td className="able">O</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>



  </tr>
<tr>
<td className="able">P</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>


  </tr>
<tr>
<td className="able">Q</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td className="non">6</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>18</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}} >19</td>
<td className="non">19</td>
<td className="non">19</td>


<td onClick={(e) => {
      Seatselection1(e, "medium")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>25</td>



  </tr>
<tr>
<td className="able">R</td>
    <td className="non">1</td>
    <td className="non">2</td>
  
    <td className="non">3</td>
    <td className="non">4</td>
    <td className="non">5</td>
    <td className="non">6</td>
<td className="non">6</td>
    <td  onClick={(e) => {
      Seatselection1(e, "medium")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>2</td>
    <td onClick={(e) => {
      Seatselection1(e, "medium")}}>3</td>
    <td onClick={Seatselection}>4</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>5</td>
<td  onClick={(e) => {
      Seatselection1(e, "medium")}}>6</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>7</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>8</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>9</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "medium")}}>14</td>
  </tr>
</table>

</div>

<div className="seats">
<p>EXECUTIVE-Rs. 70.00</p>
<hr style={{marginRight:"200px"}}/>
<table>
<tr>
<td className="able">R</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>1</td>
    <td  onClick={(e) => {
      Seatselection1(e, "lower")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>6</td>

    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>7</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>10</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>19</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>20</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>21</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>25</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>26</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>27</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>28</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>29</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>30</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>31</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>32</td>



  </tr>
<tr>
<td className="able">S</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>1</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>2</td>
  
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>3</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>4</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>5</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>6</td>
    <td onClick={Seatselection}>7</td>
<td className="non">6</td>
<td className="non">6</td>
<td className="non">6</td>

    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>8</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>9</td>
    <td onClick={(e) => {
      Seatselection1(e, "lower")}}>10</td>
<td  onClick={(e) => {
      Seatselection1(e, "lower")}}>11</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>12</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>13</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>14</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>15</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>16</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>17</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>19</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>20</td>
<td onClick={Seatselection}>21</td>
<td className="non">6</td>
<td className="non">6</td>
<td className="non">6</td>

<td onClick={(e) => {
      Seatselection1(e, "lower")}}>22</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>23</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>24</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>25</td>
<td onClick={(e) => {
      Seatselection1(e, "lower")}}>26</td>

</tr>
</table>
</div>
<div >
<p  className={ seatCount > 0? "trueclass": "falseclass"} onClick={Procesed}><span className="click">procesed</span></p></div>
<p style={{paddingBottom:"100px",textAlign:"center"}}><b><i>All eyes this way please!</i></b></p>


<div className="fixed">
<div style={{display:"inline-block",marginLeft:"400px"}}><a style={{backgroundColor:"rgb(240, 240, 240)",marginLeft:"200px"}} href="default.asp" target="_blank"></a> Sold
<a  style={{marginLeft:"20px"}}href="default.asp"></a> Avilable
<a style={{backgroundColor:"green",marginLeft:"20px" }}></a> Selected</div></div>

</div>

    )
}
export default SeatSelect;