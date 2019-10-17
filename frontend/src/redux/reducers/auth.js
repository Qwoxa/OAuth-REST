import { auth } from '../constants';
const defaultState = {
  isAuthenticated: false,
  token: '',
  errorMessage: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case auth.SIGN_UP_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload,
        errorMessage: ''
      };
    case auth.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};