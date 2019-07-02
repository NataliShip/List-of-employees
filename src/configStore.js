import { compose, createStore, combineReducers } from 'redux';
import * as reducers from "./reducers";

export const store = createStore(
    combineReducers(reducers),
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  );

