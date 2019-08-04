import {
  SET_LOADING,
  UNSET_LOADING,
  SET_LOADING_AND_ID,
  SET_LOADING_AND_CURRENT_COMPONENT
} from '../actions/types';
const initialState = {
  loading: false,
  currentId: null,
  currentComponent: null
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
    case SET_LOADING_AND_CURRENT_COMPONENT: {
      return {
        ...state,
        loading: true,
        currentComponent: action.payload.component
      };
    }
    case UNSET_LOADING: {
      return {
        ...state,
        loading: false,
        currentId: null,
        currentComponent: null
      };
    }
    default:
      return state;
  }
};
