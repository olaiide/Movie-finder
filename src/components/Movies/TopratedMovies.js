import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';

const TopratedMovies = () => {
  const movieContext = useContext(MovieContext);
  const { popularMovies, getPopularMovies } = movieContext;

  useEffect(() => {
    if (popularMovies === null) {
      getPopularMovies();
    }
  }, []);

  if (popularMovies && popularMovies.length) {
    console.log(popularMovies);
  }
  
  return (
    <div>
      <h1>Trending Movies</h1>
    </div>
  );
};

export default TopratedMovies;

/* {popularMovies.results.map((movie) => {
        return <h1>{movie.title}</h1>;
      })}*/
