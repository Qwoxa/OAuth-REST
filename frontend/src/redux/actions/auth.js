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
      console.log('here');

    } catch(err) {
      const msg = err.name === 'Network error' ? err.name : err.response.data.error.message;
      dispatch(signUpFailure(msg));
    }
  };
};