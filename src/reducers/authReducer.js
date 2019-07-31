import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOAD_USER
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  currentUser: null
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
    case LOAD_USER: {
      return {
        ...state,
        currentUser: action.payload.user
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
        isAuthenticated: null,
        currentUser: null
      };
    }
    default:
      return state;
  }
};
