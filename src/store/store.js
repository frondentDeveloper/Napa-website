import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

import reducers from "./reducers";
import apiMiddleware from "../middlewares/apiMiddleware";
import loggerMiddleware from "../middlewares/loggerMiddleware";

export default createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(
    ...[apiMiddleware, thunkMiddleware, loggerMiddleware].filter(Boolean),
  ),
);
