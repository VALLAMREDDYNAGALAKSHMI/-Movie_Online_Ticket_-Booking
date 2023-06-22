import React from 'react';
import Header from './Header';
import Latest from './Latest';
import LatestMoviesCard from './LatestMoviesCard';
 

const Latestmovies =() =>{
    return(
        <div>
            <Header/>
            <Latest/>
            <LatestMoviesCard/>
        </div>
    )
}
export default Latestmovies;