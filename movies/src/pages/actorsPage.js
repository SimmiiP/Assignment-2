import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateActorListPage'
import { getPeople } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AddToRatedIcon from "../components/cardIcons/addToRated";

const ActorsPage  = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('people', getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
 const people = data.results
  
 const mustWatch = people.filter(m => m.mustWatch)
 localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
 const addToWatchList = (personId) => true; 

  

  return (
    <PageTemplate
      title='Popular Actors'
      people={people}
      action={(people) => {
        return (
          <>
          
            
          </>
        );
      }}
    />
  );
};
export default ActorsPage;