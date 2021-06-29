import axios from "axios";
import React, { useState, useEffect } from "react";
export const MovieContext = React.createContext();

export const MovieProvider = (props) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const API_KEY = "b009f113e49fcf1c95e69123d1402e19";
  const dataPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page1`;
  const dataTrending = `https://api.themoviedb.org/3/movie/top-rated?api_key=${API_KEY}&language=en-US&page1`;
  const trendingMoviesData = async () => {
    const trendingData = await axios.get(dataTrending);
    setTrendingMovies(trendingData.data);
  };
  const popularMoviesData = async () => {
    const popularData = await axios.get(dataPopular);
    setPopularMovies(popularData.data);
  };

  useEffect(() => {
    popularMoviesData();
    trendingMoviesData();
  }, []);
  return (
    <MovieContext.Provider
      value={{
        value: [trendingMovies, setTrendingMovies],
        value2: [popularMovies, setPopularMovies],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
