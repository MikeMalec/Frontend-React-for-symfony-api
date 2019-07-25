import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  DELETE_NOTIFICATION,
  DELETE_ALERT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_ALERT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  notification: null,
  alert: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        notification: action.payload.message
      };
    case REGISTER_FAIL:
      return {
        ...state,
        alert: action.payload.title
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
        ...state,
        alert: action.payload.message
      };
    }
    case DELETE_NOTIFICATION: {
      return {
        ...state,
        notification: null
      };
    }
    case SET_ALERT: {
      return {
        ...state,
        alert: action.payload
      };
    }
    case DELETE_ALERT: {
      return {
        ...state,
        alert: null
      };
    }
    default:
      return state;
  }
};
