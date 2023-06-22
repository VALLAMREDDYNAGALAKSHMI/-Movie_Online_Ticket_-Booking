import React, { useEffect, useState } from 'react';
import './Qrcode.css';

const Qrcode =()=>{
  
  const[totaltickets,settotaltickets]=useState(0);
  const [title,settitle]=useState('');
  
  const[language,setlanguage]=useState("");
  
  const[address ,setaddress]=useState("");
  const [upper,setupper]=useState(0);
  const[medium,setmedium]=useState(0);
  const [lower,setlower]=useState(0);
  const[ topprice,settopprice]=useState(0);
  const[middleprice, setmiddleprice]=useState(0)
  const[bottomprice,setbottomprice]=useState(0)
const [totalpayingamount,settotalpayingamount]=useState(0)

  useEffect(()=>{
    
    let title=window.localStorage.getItem("title");
   let language= window.localStorage.getItem("language");
   
    let total=window.localStorage.getItem("total");
    let  address=window.localStorage.getItem("address");
    let u=window.localStorage.getItem("upper");
    let uconvert=parseInt(u);
    
    let m=window.localStorage.getItem("medium");
    let mconvert=parseInt(m);
    let l=window.localStorage.getItem("lower");
    let lconvert=parseInt(l);
    let top=window.localStorage.getItem("upperprice");
    let topconvert=parseInt(top);
    let middle=window.localStorage.getItem("middleprice");
    let middleconvert=parseInt(middle);
    let bottom=window.localStorage.getItem("lowerprice");
    let bottomconvert=parseInt(bottom);


    settitle(title);
    setlanguage(language);
    settotaltickets(total);
    setaddress(address);
    setupper( uconvert);
    setmedium(mconvert);
    setlower(lconvert);
    settopprice(topconvert);
    setmiddleprice(middleconvert);
    setbottomprice(bottomconvert);
    let uppertotalprice=uconvert * topconvert;
    let mediamtotalprice=mconvert * middleconvert ;
    let lowertotalprice=lconvert * bottomconvert ;
    let totalpayingprice=uppertotalprice +  mediamtotalprice + lowertotalprice;
    settotalpayingamount(totalpayingprice);


  },[]);
    return(
        <div>
            <div className="code"> Make payment</div>
<div className="photo">
  
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5gws-NivJNAJDiJCOg09poTpPd5HPMMayw&usqp=CAU" alt="Cinque Terre"  style={{width:"400px"}}/>
  </div>
  

<div className="photo" style={{padding:"10px"}}>
<div style={{marginLeft:"10px"}}>
ORDER SUMMARY<span style={{marginLeft:"150px", border:"1px solid white"}}><b> {totaltickets} Tickets</b></span>
<p>{title} {language} (U/A)</p>
<p>{language}, 2D</p>
<p>{address}</p>

<p className={upper > 0 ? "showclass":"hideclass" }><b>PLATINUM:</b>{upper}Seats(RS.{upper * topprice})</p>
<p className={medium  > 0 ? "showclass":"hideclass" }><b> GOLD:</b>{medium}Seats(RS.{medium *middleprice })</p>
<p  className={lower  > 0 ? "showclass":"hideclass" }><b>EXECUTIVE:</b>{lower} Seats(RS.{ lower * bottomprice })</p>
<hr style={{border:"1px dotted "}}/>
<p style={{backgroundColor:"gray",padding:"9px"}}>Amount Payable<span style={{marginLeft:"150px"}}><b> Rs.{totalpayingamount}.</b></span></p>
  </div>
  
        </div>
        </div>
    )
};
export default Qrcode;