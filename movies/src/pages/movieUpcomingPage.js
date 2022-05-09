import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getupcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AddToRatedIcon from "../components/cardIcons/addToRated";

const UpcomingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getupcomingMovies)

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
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
            < AddToPlaylistIcon movie={movie} />
            
          </>
        );
      }}
    />
  );
};
export default UpcomingMoviePage;