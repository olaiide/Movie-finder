import React, { Fragment, useContext } from "react";
import TopratedMovies from "./TopratedMovies";
import PopularMovies from "./PopularMovies";
import SearchedMovies from "./SearchedMovies";
import PopularMoviesItem from "./PopularMoviesItem";
import MovieContext from "../../context/movie/movieContext";

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;
  //const IMG_API = "https://image.tmdb.org/t/p/w342";
  /*
  return (
    <Fragment>
      {searchMovies ? (
        searchMovies.map((movie) => {
          return (
            <div className="container">
              <h3 className="title">{movie.title}</h3>
              <img className="movie-poster" src={IMG_API + movie.poster_path} />
              <div className="movie-info">
                <span>{movie.release_date}</span>
                <span>{movie.vote_average}</span>
              </div>
            </div>
          );
        })
      ) : (
        <Fragment>
          <PopularMovies />
          <TopratedMovies />
        </Fragment>
      )}
    </Fragment>
  );*/
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
