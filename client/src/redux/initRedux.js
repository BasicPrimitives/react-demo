/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import clientMiddleware from './middleware/clientMiddleware';
import createReducers from './reducer';

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = (x) => x;

if (
  process.env.NODE_ENV !== 'production' &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

export default function create(initialState, helpers) {
  let middleware = [clientMiddleware(helpers)];

  if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    !window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // redux-logger needs this feature
    Object.hasOwnProperty('assign')
  ) {
    middleware = [...middleware, createLogger()];
  }
  const reducers = createReducers();

  return createStore(
    combineReducers({
      ...reducers
    }),
    initialState, // Hydrate the store with server-side data
    compose(applyMiddleware(...middleware), devtools),
  );
}
