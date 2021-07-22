import React, { useState, useContext, useEffect, Fragment } from "react";
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
  font-size: px;
  right: px;

  &::placeholder {
    color: rgba(39, 32, 101, 0.5);
    font-size: 15px;
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

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    getSearchMovies(query);
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery("");
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
            value={query}
          />
        </div>
        <div>
          <Button type="reset" className="button">
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CustomForm;
