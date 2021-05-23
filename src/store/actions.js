import {
  SET_SELECTED_COUNTRY,
  SEND_MESSAGE,
  SET_COUNTRIES,
  SET_GRAPH_DATA,
  TOGGLE_GRPAH_DIALOG,
  SET_SEARCH_RESULTS,
  RESET_SEARCH_RESULTS,
} from "./types";


export const setSelectedUser = (country) => ({
  type: SET_SELECTED_COUNTRY,
  payload: country,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const setCountries = (countries) => ({
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


export const setSearchResults = (data) => ({
  type: SET_SEARCH_RESULTS,
  payload: data,
});

export const resetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS,
});
