import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MovieUpcomingPage from './pages/movieUpcomingPage';
import {QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import RatedMoviesPage from "./pages/ratedMoviesPage.js";
import PlaylistMoviesPage from "./pages/moviePlaylistPage";
import ActorsPage from "./pages/actorsPage";
import MovieCreditPage from "./pages/movieCreditsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
//New

import LoginPage from "./pages/loginPage";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";
import NowPlayingMoviePage from "./pages/nowPlayingPage";
//New

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />

      <AuthProvider>
        <AuthHeader />
      <MoviesContextProvider>
      <Routes>
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/signup" element={ <SignUpPage /> } />
      <Route path="/movies/nowplaying" element={<NowPlayingMoviePage/>}/>
      <Route path="/movies/upcoming" element={ <MovieUpcomingPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/movies/actors" element={<ActorsPage/>}/>
      <Route path="/movies/actorspage" element={<ActorDetailsPage/>}/>
      <Route element={<ProtectedRoutes />}>
       
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/rated" element={<RatedMoviesPage/>} />
        <Route path="/movies/playlist" element={<PlaylistMoviesPage/>} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="credits/:id" element={ <MovieCreditPage /> } />
        </Route>

      </Routes>
      </MoviesContextProvider>
        </AuthProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));