import React, { useContext, Route, Switch } from "react";
import MovieContext from "../../../context/movie/movieContext";
import styled from "styled-components";
import SearchedMoviesItem from "./SearchMoviesItem";
import Loader from "../../UI/Loader";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.8fr);
  margin: 2rem 0 0 1.5rem;
`;
const SearchedMovies = () => {
  const movieContext = useContext(MovieContext);
  const { searchMovies, loadingg } = movieContext;
  if (loadingg) {
    return <Loader />;
  } else {
    return (
      <div>
        <Wrapper>
          {loadingg ? (
            <Loader />
          ) : (
            searchMovies &&
            searchMovies.map((movie) => (
              <SearchedMoviesItem movie={movie} key={movie.id} />
            ))
          )}
        </Wrapper>
      </div>
    );
  }
};

export default SearchedMovies;
