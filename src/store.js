import { combineReducers, createStore, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import { createLogger } from "redux-logger";
import reducers from "../src/reducers";

const reducersCombined = combineReducers(reducers);

const options = {
  namespace: "store",
  states: []
};

const skipLoggerActions = []; //THIS ACTIONS WILL NOT BE LOGGED
const mylogger = createLogger({
  predicate: (getState, action) => skipLoggerActions.indexOf(action.type) === -1
});

const store = createStore(
  reducersCombined,
  load(options),
  applyMiddleware(mylogger, save(options))
);

window.store = store;
export default store;
