import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieCredit from "../components/movieCredit";

const MovieCreditPage = (props) => {
  let location = useLocation();
  const {movie, credits} = location.state;

  return (
    <PageTemplate movie={movie}>
      <MovieCredit Credit={credits} />
    </PageTemplate>
  );
};

export default MovieCreditPage;