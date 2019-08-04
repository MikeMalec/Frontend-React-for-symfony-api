import {
  GET_POST_COMMENTS,
  DELETE_POST_COMMENT,
  UPDATE_POST_COMMENT,
  CLEAR_COMMENTS
} from '../actions/types';

const initialState = {
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS: {
      return {
        ...state,
        comments: action.payload.comments
      };
    }
    case UPDATE_POST_COMMENT: {
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id ? action.payload : comment
        )
      };
    }
    case DELETE_POST_COMMENT: {
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };
    }
    case CLEAR_COMMENTS: {
      return {
        ...state,
        comments: []
      };
    }
    default:
      return state;
  }
};
