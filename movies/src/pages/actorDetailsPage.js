import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorsPage";
import usePeople from "../hooks/usePeople";
import { getPeople } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: people, error, isLoading, isError } = useQuery(
    ["people", { id: id }],
    getPeople
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {people ? (
        <>
          <PageTemplate people={people}>
            <ActorDetails people={people} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actors details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;


