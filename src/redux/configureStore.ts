import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export default function configureStore() {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewareEnhancer);

  return store;
}
