import axios from "axios";
import React, { useReducer, useState } from "react";
import {
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  SET_LOADING,
  GET_VIDEOS,
  GET_DETAILS,
} from "../types";
import MovieContext from "./movieContext";
import movieReducer from "./movieReducer";

const MovieState = (props) => {
  const initialState = {
    trendingMovies: null,
    popularMovies: null,
    searchMovies: null,
    moviesVideo: null,
    movieDetails: {},
    loading: true,
    loadingg: false,
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
    setLoading();
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
  const getVideos = async (movieId) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      dispatch({
        type: GET_VIDEOS,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //Get details
  const getDetails = async (id) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
      );
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //Loader for searching movies
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <MovieContext.Provider
      value={{
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies,
        searchMovies: state.searchMovies,
        moviesVideo: state.moviesVideo,
        movieDetails: state.movieDetails,
        loading: state.loading,
        loadingg: state.loadingg,
        getTrendingMovies,
        getPopularMovies,
        getSearchMovies,
        getVideos,
        getDetails,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;

//https://api.themoviedb.org/3/movie/379686?api_key=b009f113e49fcf1c95e69123d1402e19&append_to_response=credits

//https://api.themoviedb.org/3/credit/379686?api_key=b009f113e49fcf1c95e69123d1402e19
