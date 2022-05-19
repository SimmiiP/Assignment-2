import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AddToRatedIcon from "../components/cardIcons/addToRated";

const NowPlayingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('nowplaying', getNowPlayingMovies)

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
      title='In Cinemas Now'
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
export default NowPlayingMoviePage;