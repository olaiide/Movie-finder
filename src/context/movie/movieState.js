import axios from "axios";
import React, { useReducer, useState } from "react";
import {
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
} from "../types";
import MovieContext from "./movieContext";
import movieReducer from "./movieReducer";

const MovieState = (props) => {
  const initialState = {
    trendingMovies: null,
    popularMovies: null,
    searchMovies: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const API_KEY = "b009f113e49fcf1c95e69123d1402e19";
  const dataPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page1`;
  const dataTrending = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  //get trending movies
  const getTrendingMovies = async () => {
    try {
      const res = await axios.get(dataTrending);
      dispatch({
        type: GET_TRENDING_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //get popular movies
  const getPopularMovies = async () => {
    try {
      const res = await axios.get(dataPopular);
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //search movies
  const getSearchMovies = async (movieTitle) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${movieTitle}`
      );
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MovieContext.Provider
      value={{
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies,
        searchMovies: state.searchMovies,
        loading: state.loading,
        getTrendingMovies,
        getPopularMovies,
        getSearchMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
