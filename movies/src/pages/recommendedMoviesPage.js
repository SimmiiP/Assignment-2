import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getRecommendedMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AddToRatedIcon from "../components/cardIcons/addToRated";


const RecommendedMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('recommendations', getRecommendedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
 const movies = data.results
  
 const mustWatch = movies.filter(m => m.mustWatch)
 localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
 const addToWatchList = (movieId) => true; 

  

  return (
    <PageTemplate
      title='Recomended Movies'
      recommendations={movies}
      action={(movies) => {
        return (
          <>
            < AddToPlaylistIcon recommendations={movies} />
            
          </>
        );
      }}
    />
  );
};
export default RecommendedMoviePage;