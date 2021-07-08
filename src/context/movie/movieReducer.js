import {
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
} from "../types";
const movieReducer = (state, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
        loading: false,
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
        loading: false,
        searchMovies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
