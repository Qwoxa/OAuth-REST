import restApi from '../../api';
import { createAction } from 'redux-actions';
import { auth } from '../constants';

const signUpRequest = createAction(auth.SIGN_UP_REQUEST);
const signUpSuccess = createAction(auth.SIGN_UP_SUCCESS);
const signUpFailure = createAction(auth.SIGN_UP_FAILURE);

export const signUp = data => {
  return async dispatch => {
    try {
      dispatch(signUpRequest(data));

      const response = await restApi.post('/users/signup', data);
      const token = response.data.token;

      localStorage.setItem('token', token);
      dispatch(signUpSuccess(token));

    } catch(err) {
      const msg = err.name === 'Network error' ? err.name : err.response.data.error.message;
      dispatch(signUpFailure(msg));
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
      const response = await restApi.post(uri, payload);
      const token = response.data.token;

      localStorage.setItem('token', token);
      dispatch(signInSuccess(token));

    } catch (err) {
      console.log(err.response);
      const msg = err.name === 'Network error' ? err.name : err.response.data;
      dispatch(signInFailure(msg));
    }
  }
};