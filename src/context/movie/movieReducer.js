import {
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  SET_LOADING,
  GET_DETAILS,
  GET_VIDEOS,
} from "../types";
const movieReducer = (state, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        loading: false,
        trendingMovies: action.payload,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        loading: false,
        popularMovies: action.payload,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.payload,
        loadingg: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loadingg: true,
      };
    case GET_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false,
        loadingg: false,
      };
    case GET_VIDEOS:
      return {
        ...state,
        moviesVideo: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
