import { auth } from '../constants';
const defaultState = {
  isAuthenticated: false,
  token: '',
  errorMessage: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case auth.SIGN_IN_SUCCESS:
    case auth.SIGN_UP_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload,
        errorMessage: ''
      };
    case auth.SIGN_IN_FAILURE:
    case auth.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message
      };
    case auth.SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};