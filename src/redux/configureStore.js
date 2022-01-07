import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import statsReducer from './stats/main';
import countryStatsReducer from './stats/country';

const reducer = combineReducers({
  data: statsReducer,
  country: countryStatsReducer,
});

const store = createStore(
  reducer, applyMiddleware(thunk, logger),
);

export default store;
