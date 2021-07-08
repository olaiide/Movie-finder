/*import React, { useState, useContext, useEffect, Fragment } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import MovieContext from "../../context/movie/movieContext";

const Form = styled.form`
  width: 100%;
  color: white;
  max-width: 500px;
  margin-right: 0.3rem;
  .button {
    margin-right: 5rem;
  }
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  padding: 1.05rem 0.5rem;
  color: #272065;
  outline: none;
  border: none;
  height: 2px;
  background-color: #f4f7fa;
  border-radius: 3px;
  line-height: 1.21428571em;
  position: relative;
  right: -80px;

  &::placeholder {
    color: rgba(39, 32, 101, 0.5);
    font-weight: lighter;
    font-size: 14px;
    position: relative;
  }
  &:focus {
    box-shadow: 0px 3px 6px red;
  }
`;
const CustomForm = () => {
  const movieContext = useContext(MovieContext);
  const { searchMovies, getSearchMovies } = movieContext;
  const [query, setQuery] = useState("");

  const IMG_API = "https://image.tmdb.org/t/p/w342";
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getSearchMovies(query);
  };
  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <div>
          <Input
            type="text"
            placeholder="Search for a movie"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <Button className="button">Search</Button>
        </div>
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
      </Form>
    </div>
  );
};

export default CustomForm;*/

// <Button className="button" >Search</Button>
/* {searchMovies &&
        searchMovies.length > 0 &&
        searchMovies.map((movie) => (
          <SearchMoviesItem movie={movie} key={movie.id} />
        ))}*/
