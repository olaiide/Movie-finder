import React, { Fragment, useContext } from "react";
import TopratedMovies from "./TopratedMovies/TopratedMovies";
import SearchedMovies from "./SearchMovies/SearchedMovies";
import MovieContext from "../../context/movie/movieContext";
import PopularMovies from "./PopularMovies/PopularMovies";

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;

  return (
    <Fragment>
      {searchMovies ? (
        <SearchedMovies />
      ) : (
        <Fragment>
          <PopularMovies />
          <TopratedMovies />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Movies;
