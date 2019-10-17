import { content } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case content.REQUEST_CONTENT_FAILURE:
    case content.REQUEST_CONTENT_SUCCESS:
        return {
            ...state,
            [action.payload.path]: {
                ...action.payload,
                fetched: true
            }
        };
    default:
      return state;
  }
};