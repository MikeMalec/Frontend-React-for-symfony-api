import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state
      };
    case REGISTER_FAIL:
      return {
        ...state
      };
    case LOGIN_SUCCESS: {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state
      };
    }
    case LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: null
      };
    }
    default:
      return state;
  }
};
