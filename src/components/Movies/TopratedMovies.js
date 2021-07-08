import { useContext, useEffect } from "react";
import MovieContext from "../../context/movie/movieContext";
import TopratedMoviesItem from "./TopRatedMoviesItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.8fr);
  margin: 3rem 0 0 1.5rem;
`;
const Header = styled.h1`
  margin: 6rem 0 0 1.5rem;
`;
const TopratedMovies = () => {
  const movieContext = useContext(MovieContext);

  const { trendingMovies, getTrendingMovies } = movieContext;

  useEffect(() => {
    getTrendingMovies();
  }, []);
  return (
    <div>
      <Header>Top Rated Movies</Header>
      <Wrapper>
        {trendingMovies &&
          trendingMovies
            .slice(0, 8)
            .map((movie) => (
              <TopratedMoviesItem movie={movie} key={movie.id} />
            ))}
      </Wrapper>
    </div>
  );
};

export default TopratedMovies;
