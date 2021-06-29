import { useContext } from "react";
import { MovieContext } from "../../MovieContext/movieContext";

const TopratedMovies = () => {
  const { value, value2 } = useContext(MovieContext);
  const [trendingMoviesValue, setTrendingMoviesValue] = value2;
  console.log(trendingMoviesValue.results);
  return <div></div>;
};

export default TopratedMovies;

/* {trendingMovies.results.map((movie) => {
        return <h1>{movie.title}</h1>;
      })}*/
