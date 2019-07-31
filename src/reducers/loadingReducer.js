import {
  SET_LOADING,
  UNSET_LOADING,
  SET_LOADING_AND_ID
} from '../actions/types';
const initialState = {
  loading: false,
  currentId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_LOADING_AND_ID: {
      return {
        ...state,
        loading: true,
        currentId: action.payload
      };
    }
    case UNSET_LOADING: {
      return {
        ...state,
        loading: false,
        currentId: null
      };
    }
    default:
      return state;
  }
};
