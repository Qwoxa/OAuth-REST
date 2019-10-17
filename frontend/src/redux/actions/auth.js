import axios from 'axios';
import { createAction } from 'redux-actions';
import { auth } from '../constants';

const signUpRequest = createAction(auth.SIGN_UP_REQUEST);
const signUpSuccess = createAction(auth.SIGN_UP_SUCCESS);
const signUpFailure = createAction(auth.SIGN_UP_FAILURE);

export const signUp = data => {
  return async dispatch => {
    try {
      dispatch(signUpRequest(data));

      const response = await axios.post('/users/signup', data);
      const token = response.data.token;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return dispatch(signUpSuccess(token));

    } catch(err) {
      const message = err.name === 'Network error' ? err.name : err.response.data.error.message;
      return dispatch(signUpFailure({ message, error: true }));
    }
  };
};

const signInRequest = createAction(auth.SIGN_IN_REQUEST);
const signInSuccess = createAction(auth.SIGN_IN_SUCCESS);
const signInFailure = createAction(auth.SIGN_IN_FAILURE);


export const signIn = method => data => {
  return async dispatch => {
    try {
      dispatch(signInRequest(data));
      
      const uri = method === 'jwt' ? '/users/signin' : `/users/oauth/${method}`;
      const payload = method === 'jwt' ? data : { access_token: data };
      const response = await axios.post(uri, payload);
      const token = response.data.token;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return dispatch(signInSuccess(token));

    } catch (err) {
      const message = err.name === 'Network error' ? err.name : err.response.data;
      return dispatch(signInFailure({ message, error: true }));
    }
  };
};


const signOutCreator = createAction(auth.SIGN_OUT);

export const signOut = () => {
  return dispatch => {
    axios.defaults.headers.common['Authorization'] = '';
    localStorage.removeItem('token');

    dispatch(signOutCreator());
  };
};