import { combineReducers } from "redux";

import CommonReducer from "./reducers/commonReducer";

const appReducer = combineReducers({
  app: CommonReducer,
});

/* eslint-disable */
const reducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};
/* eslint-enable */
export default CommonReducer;
