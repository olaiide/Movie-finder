import React from "react";

const PopularMoviesItem = ({
  movie: { poster_path, title, release_date, vote_average },
}) => {
  const IMG_API = "https://image.tmdb.org/t/p/w342";
  return (
    <div>
      <div className="container">
        <h3 className="title">{title}</h3>
        <img className="movie-poster" src={IMG_API + poster_path} />
        <div className="movie-info">
          <span>{release_date}</span>
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularMoviesItem;
