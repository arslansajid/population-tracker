import initialState from "./initialState";
import {
  SET_SELECTED_COUNTRY,
  SET_COUNTRIES,
  SET_GRAPH_DATA,
  TOGGLE_GRPAH_DIALOG,
  SET_SEARCH_RESULTS,
  RESET_SEARCH_RESULTS,
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_GRAPH_DATA:
      return {
        ...state,
        graphData: action.payload,
      };
    case TOGGLE_GRPAH_DIALOG:
      return {
        ...state,
        showGraphDialog: !state.showGraphDialog,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        graphData: action.payload,
      };
    case RESET_SEARCH_RESULTS:
      return {
        ...state,
        showGraphDialog: [],
      };

    default:
      return state;
  }
};

export default reducer;
