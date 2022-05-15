import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AddToRatedIcon from "../components/cardIcons/addToRated";

const TrendingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
 const trending = data.results
  
 const mustWatch = trending.filter(m => m.mustWatch)
 localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
 const addToWatchList = (movieId) => true; 

  

  return (
    <PageTemplate
      title='Upcoming Movies'
      trending={trending}
      action={(trending) => {
        return (
          <>
            < AddToPlaylistIcon trending={trending} />
            
          </>
        );
      }}
    />
  );
};
export default TrendingMoviePage;