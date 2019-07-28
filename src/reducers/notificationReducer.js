import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/types';

const initialState = {
  notification: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload
      };
    }
    case CLEAR_NOTIFICATION: {
      return {
        ...state,
        notification: null
      };
    }
    default:
      return state;
  }
};
