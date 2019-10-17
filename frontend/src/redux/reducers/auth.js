import { auth } from '../constants';


const token = localStorage.getItem('token');
const defaultState = {
  isAuthenticated: Boolean(token),
  errorMessage: '',
  error: '',
  token
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case auth.SIGN_IN_SUCCESS:
    case auth.SIGN_UP_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload,
        errorMessage: '',
        error: ''
      };
    case auth.SIGN_IN_FAILURE:
    case auth.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
        error: action.type === auth.SIGN_IN_FAILURE 
          ? 'signin'
          : 'signup'
      };
    case auth.SIGN_OUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};