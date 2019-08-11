import {
  SET_LOADING,
  UNSET_LOADING,
  SET_LOADING_AND_ID,
  SET_LOADING_AND_CURRENT_COMPONENT,
  UNSET_LOADING_WITH_COMPONENT,
  SET_LOADING_AND_ADD_CURRENT_TO_GROUP,
  UNSET_CURRENT_GROUP,
  CHECK_LOADING
} from '../actions/types';
const initialState = {
  loading: false,
  currentId: null,
  currentGroup: [],
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
        currentComponent: action.payload
      };
    }
    case SET_LOADING_AND_ADD_CURRENT_TO_GROUP: {
      return {
        ...state,
        loading: true,
        currentGroup: [...state.currentGroup, action.payload.id],
        currentComponent: action.payload.component
      };
    }
    case UNSET_CURRENT_GROUP: {
      return {
        ...state,
        currentGroup: state.currentGroup.filter(id => id !== action.payload)
      };
    }
    case UNSET_LOADING_WITH_COMPONENT: {
      return {
        ...state,
        loading: false,
        currentComponent: null
      };
    }
    case CHECK_LOADING: {
      if (state.currentGroup.length === 0) {
        return {
          ...state,
          loading: false,
          currentComponent: null
        };
      } else {
        return {
          ...state
        };
      }
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
