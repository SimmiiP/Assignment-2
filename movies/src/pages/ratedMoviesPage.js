import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromRatedIcon from "../components/cardIcons/removeFromRated";
import WriteReview from "../components/cardIcons/writeReview";

const RatedMoviesPage = () => {
  const {rated: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const ratedMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = ratedMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = ratedMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromRatedIcon movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};


export default RatedMoviesPage;