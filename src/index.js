import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Latestmovies from './Latestmovies';
import UpcomingMovies from './Upcomingmovies';
import Nearbyevents from './Nearbymovies';
import Moviedetails from './Moviedetails';
import SeatSelect from './SeatSelect';
import Qrcode from './Qrcode';


import { BrowserRouter , Route, Link, Routes} 
        from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <Routes>

    <Route exact path="/" element={<App/>} />
        <Route exact path='/latest' element={<Latestmovies/>}/>
        <Route exact path='/upcoming' element={<UpcomingMovies/>}/>
        <Route exact path='/events' element={<Nearbyevents/>}/>
        <Route exact path="/details" element={<Moviedetails/>} />
        <Route exact path="/select" element={<SeatSelect/>} />
        <Route exact path="/payment" element={<Qrcode/>} />
        

  
    </Routes>

</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

