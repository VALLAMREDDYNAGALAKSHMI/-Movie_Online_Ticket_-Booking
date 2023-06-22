import React from 'react';
import Header from './Header';
import Coming from './Coming';
import UpcomingMoviesCard from './UpcomingMoviesCard';
 

const UpcomingMovies =() =>{
    return(
        <div>
            <Header/>
            <Coming/>
            <UpcomingMoviesCard/>
        </div>
    )
};

export default UpcomingMovies;