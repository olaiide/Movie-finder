import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import MovieContext from "../../context/movie/movieContext";
import Loader from "../UI/Loader";
import { IMG_API, unavailable } from "../../config/config";
import Unknown from "../../assets/Unknown_person.jpg";
const MovieDetails = styled.div`
  .overview {
    font-size: 18px;
    width: 470px;
    line-height: 1.7;
    font-weight: 490;
  }
  .runtime,
  .rating,
  .release,
  .genre {
    font-size: 17px;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;
const Wrapperr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CharacterTitle = styled.h2`
  text-align: center;
  margin-top: 5rem;
`;
const CharacterWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 40px;
  text-align: center;
  grid-template-columns: repeat(3, 0fr);
`;
const TopcastWrapper = styled.div`
  margin-left: 9rem;
  .cast-poster-wrapper {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
  }
  .cast-poster {
    width: inherit;
    border-radius: 50%;
    height: 200px;
  }
  .cast-name {
    font-weight: 600;
  }
  .cast-character {
    font-weight: 400;
    font-size: 18px;
    color: grey;
  }
`;
const VideoWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
  .trailer-name {
    position: relative;
    bottom: -13px;
  }
`;
const MovieInfo = () => {
  const params = useParams();
  const movieContext = useContext(MovieContext);
  const { moviesVideo, getVideos, getDetails, movieDetails, loadingg } =
    movieContext;
  useEffect(() => {
    getDetails(params.id);
    videosDetails(params.id);
  }, []);

  const {
    poster_path,
    title,
    genres = [],
    release_date,
    overview,
    vote_average,
    runtime,
    credits = { cast: [] },
  } = movieDetails;
  const genresArr = [];

  genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });

  const genreNames = genresArr.join(" | ");
  const videosDetails = () => {
    getVideos(params.id);
  };
  if (loadingg) {
    return <Loader />;
  } else {
    return (
      <div>
        <Wrapper>
          <Wrapperr>
            <img
              className="poster-info"
              src={poster_path ? IMG_API + poster_path : unavailable}
            />
          </Wrapperr>
          <Wrapperr>
            <MovieDetails>
              <h2>{title}</h2>
              <h4 className="genre">{genreNames}</h4>
              <h4 className="rating">
                Rating -{" "}
                <span className={vote_average > 5 ? "green" : "red"}>
                  {vote_average}/10
                </span>
              </h4>
              <h4 className="release">
                Release : <span className="span">{release_date}</span>
              </h4>
              <h4 className="runtime">
                Runtime - <span className="span">{runtime}minutes</span>
              </h4>
              <div className="overview">{overview}</div>
            </MovieDetails>
          </Wrapperr>
        </Wrapper>
        <CharacterTitle>Top Billed Cast</CharacterTitle>

        <CharacterWrapper>
          {credits.cast &&
            credits.cast.slice(0, 6).map((cast) => {
              return (
                <TopcastWrapper>
                  <div className="cast-poster-wrapper">
                    <img
                      className="cast-poster"
                      src={
                        cast.profile_path
                          ? IMG_API + cast.profile_path
                          : Unknown
                      }
                    />
                  </div>
                  <div className="casts">
                    <h3 className="cast-name">{cast.name}</h3>
                    <h3 className="cast-character">as {cast.character}</h3>
                  </div>
                </TopcastWrapper>
              );
            })}
        </CharacterWrapper>
        <VideoWrapper>
          <h2 className="trailer-title">Trailers</h2>

          {moviesVideo &&
            moviesVideo.map((trailer) => {
              return (
                <div className="youtubeVideo">
                  <h4 className="trailer-name">{trailer.name}</h4>
                  <iframe
                    style={{ border: "none" }}
                    width="420"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                  ></iframe>
                </div>
              );
            })}
        </VideoWrapper>
      </div>
    );
  }
};

export default MovieInfo;
