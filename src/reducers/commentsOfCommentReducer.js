import {
  GET_POST_COMMENT_COMMENTS,
  DELETE_POST_COMMENT_COMMENT,
  UPDATE_POST_COMMENT_COMMENT
} from '../actions/types';
const initialState = {
  comments: new Map()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COMMENT_COMMENTS: {
      return {
        ...state,
        comments: new Map(state.comments).set(
          action.payload[0],
          action.payload[1].comments
        )
      };
    }
    case DELETE_POST_COMMENT_COMMENT: {
      let comments = state.comments.get(action.payload[0]);
      if (comments) {
        comments = comments.filter(
          comment => comment.id !== action.payload[1].id
        );
        return {
          ...state,
          comments: new Map(state.comments).set(action.payload[0], comments)
        };
      } else {
        return {
          ...state
        };
      }
    }
    case UPDATE_POST_COMMENT_COMMENT: {
      let comments = state.comments.get(action.payload[0]);
      comments = comments.map(comment =>
        comment.id === action.payload[1].id ? action.payload[1] : comment
      );
      return {
        ...state,
        comments: new Map(state.comments).set(action.payload[0], comments)
      };
    }
    default:
      return state;
  }
};
