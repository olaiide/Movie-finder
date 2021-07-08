import React, { Fragment, useContext } from "react";
import MovieContext from "../../context/movie/movieContext";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.8fr);
  margin: 2rem 0 0 1.5rem;
`;
const SearchedMovies = () => {
  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;
  const IMG_API = "https://image.tmdb.org/t/p/w342";

  return (
    <div>
      <Wrapper>
        {searchMovies &&
          searchMovies.map((movie) => {
            return (
              <div className="container">
                <h3 className="title">{movie.title}</h3>
                <img
                  className="movie-poster"
                  src={IMG_API + movie.poster_path}
                />
                <div className="movie-info">
                  <span>{movie.release_date}</span>
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default SearchedMovies;
