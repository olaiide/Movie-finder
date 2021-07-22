import React from "react";
import { Link } from "react-router-dom";
import { IMG_API, unavailable } from "../../../config/config";
const PopularMoviesItem = ({
  movie: { poster_path, title, release_date, vote_average, id },
}) => {
  return (
    <div>
      <div className="container">
        <h3 className="title">{title}</h3>
        <Link to={`/movie/${id}`}>
          <img
            className="movie-poster"
            src={poster_path ? IMG_API + poster_path : unavailable}
          />
        </Link>
        <div className="movie-info">
          <span>{release_date}</span>
          <span className={vote_average > 5 ? "green" : "red"}>
            {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularMoviesItem;
