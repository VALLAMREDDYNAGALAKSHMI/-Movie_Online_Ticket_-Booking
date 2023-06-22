import React from "react";
import Header from './Header';
import Near from './Near';
import EventsCard  from './EventsCard ';
 const Nearbyevents =()=>{
    return(
        <div>
         <Header/>
         <Near/>
         <EventsCard />   
        </div>
    )
 };
 export default  Nearbyevents;