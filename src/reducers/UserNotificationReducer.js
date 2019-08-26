import {
  GET_USER_NOTIFICATIONS,
  UNSET_USER_NOTIFICATIONS
} from '../actions/types';

const initialState = {
  notifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.payload
      };
    }
    case UNSET_USER_NOTIFICATIONS: {
      return {
        ...state,
        notifications: []
      };
    }
    default:
      return state;
  }
};
