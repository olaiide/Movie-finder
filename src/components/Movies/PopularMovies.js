import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.8fr);
  row-gap: 100px;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 40rem;
`;
const Container = styled.div`
  width: 280px;
  border-radius: 8px;
  // background: rgb(32, 35, 36);
  .movie-poster {
    width: 100%;
  }
  .movie-info {
    background: rgb(32, 35, 36);
    padding: 1.4rem;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: -6px;
  }
`;

const IMG_API = "https://image.tmdb.org/t/p/w342";

const PopularMovies = (props) => {
  return (
    <Fragment>
      <h2>Popular Movies</h2>
      <Wrapper>
        {props.movies.slice(0, 8).map((movie) => {
          return (
            <Container>
              <h3>{movie.title}</h3>
              <img className="movie-poster" src={IMG_API + movie.poster_path} />
              <div className="movie-info">
                <span>{movie.release_date}</span>
                <span>{movie.vote_average}</span>
              </div>
            </Container>
          );
        })}
      </Wrapper>
    </Fragment>
  );
};
export default PopularMovies;
