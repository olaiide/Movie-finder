import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import { GET_TRENDING_MOVIES, GET_POPULAR_MOVIES } from '../types';

const MovieState = (props) => {
  const initialState = {
    trendingMovies: null,
    popularMovies: null,
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  const API_KEY = 'b009f113e49fcf1c95e69123d1402e19';
  // const API_KEY = '48eda5793105cff98965e16f004b84d8';
  const dataPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page1`;
  const dataTrending = `https://api.themoviedb.org/3/movie/top-rated?api_key=${API_KEY}&language=en-US&page1`;

  // Get Trending Movies
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

  // Get Popular Movies
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

  return (
    <MovieContext.Provider
      value={{
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies,
        getTrendingMovies,
        getPopularMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
