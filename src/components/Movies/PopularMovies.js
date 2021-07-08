import React, { useContext, useEffect } from "react";
import MovieContext from "../../context/movie/movieContext";
import PopularMoviesItem from "./PopularMoviesItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.8fr);
  margin: 2rem 0 0 1.5rem;
`;
const Header = styled.h1`
  margin: 3.5rem 0 0 1.5rem;
`;
const PopularMovies = () => {
  const movieContext = useContext(MovieContext);

  const { popularMovies, getPopularMovies, loading } = movieContext;

  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <div>
      <Header>Popular Movies</Header>
      <Wrapper>
        {loading
          ? "loading"
          : popularMovies &&
            popularMovies
              .slice(0, 8)
              .map((movie) => (
                <PopularMoviesItem movie={movie} key={movie.id} />
              ))}
      </Wrapper>
    </div>
  );
};

export default PopularMovies;
