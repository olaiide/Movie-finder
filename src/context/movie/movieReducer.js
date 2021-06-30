import { GET_TRENDING_MOVIES, GET_POPULAR_MOVIES } from '../types';

const movieReducer = (state, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
      };

    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
