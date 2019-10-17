import { createStore, applyMiddleware } from 'redux';
import jwtDecode from 'jwt-decode';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const checkTokenExpirationMiddleware = store => next => action => {
  const token = localStorage.getItem('token');
  if (!token) {
    return next(action);
  } else if (jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    return next(action);
  } else {
    return next(action);
  }
};

export default createStore(
  rootReducer,
  applyMiddleware(thunk, logger, checkTokenExpirationMiddleware)
);