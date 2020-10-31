import { SEARCH_BREWERIES, CLEAR_BREWERIES, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CLEAR_BREWERIES:
      return {
        ...state,
        breweries: null,
        loading: false,
      };
    case SEARCH_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
