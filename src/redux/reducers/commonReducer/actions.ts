import {
  SET_SELECTED_COUNTRY,
  SET_COUNTRIES,
  SET_GRAPH_DATA,
  TOGGLE_GRPAH_DIALOG,
  SET_SEARCH_RESULTS,
  RESET_SEARCH_RESULTS,
} from "./types";


export const setSelectedCountry = (country:ICountry) => ({
  type: SET_SELECTED_COUNTRY,
  payload: country,
});

export const setCountries = (countries: ICountry[]) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setGraphData = (data) => ({
  type: SET_GRAPH_DATA,
  payload: data,
});

export const toggleGraphDialog = () => ({
  type: TOGGLE_GRPAH_DIALOG,
});

export const setSearchResults = (data: ICountry[]) => ({
  type: SET_SEARCH_RESULTS,
  payload: data,
});

export const resetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS,
});
