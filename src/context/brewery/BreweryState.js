import React, { useReducer } from 'react';
import axios from 'axios';
import BreweryContext from './breweryContext';
import BreweryReducer from './breweryReducer';
import { SEARCH_BREWERIES, CLEAR_BREWERIES, SET_LOADING } from '../types';

const BreweryState = (props) => {
  const initialState = {
    breweries: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(BreweryReducer, initialState);

  const searchBreweries = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.openbrewerydb.org/breweries/search?query=${text}`
    );

    dispatch({ type: SEARCH_BREWERIES, payload: res.data });
  };

  const clearBreweries = () => {
    dispatch({ type: CLEAR_BREWERIES });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <BreweryContext.Provider
      value={{
        breweries: state.breweries,
        loading: state.loading,
        searchBreweries,
        clearBreweries,
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
