import axios from 'axios';
import { createAction } from 'redux-actions';
import { content } from '../constants';

const requestContent = createAction(content.REQUEST_CONTENT);
const requestContentSuccess = createAction(content.REQUEST_CONTENT_SUCCESS);
const requestContentFailure = createAction(content.REQUEST_CONTENT_FAILURE);

export const getContent = path => {
  return async dispatch => {
    try {
      dispatch(requestContent(path));

      const response = await axios.get(`/${path}`);
      const data = { path, data: response.data };

      return dispatch(requestContentSuccess(data));

    } catch(err) {
      const message = err.name === 'Network error' ? err.name : err.response.data.error.message;
      return dispatch(requestContentFailure({ message, path, error: true }));
    }
  };
};