import React from "react";
import Navbar from './Navbar';
import MovieSlider from './movieSlider';
import Recommendedmovies from './recommendedmovies';

function App() {
  return (
    <div>
<Navbar/>
<MovieSlider/>
<Recommendedmovies/>
    </div>
  );
}

export default App;
