import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
//import PopularMovies from "./PopularMovies";
/*
const AvailableMovies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY =
    "https://api.themoviedb.org/3/movie/popular?api_key=b009f113e49fcf1c95e69123d1402e19&language=en-US&page";
  const getPopularMovies = async () => {
    const responseData = await axios.get(API_KEY);
    setMovies(responseData.data.results);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <Fragment>
      <PopularMovies movies={movies} />
    </Fragment>
  );
};

export default AvailableMovies;*/
