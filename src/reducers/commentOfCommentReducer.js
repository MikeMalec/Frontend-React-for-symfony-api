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
      const [id, comments] = action.payload;
      return {
        ...state,
        comments: new Map(state.comments).set(id, comments)
      };
    }
    case DELETE_POST_COMMENT_COMMENT: {
      const [id, commentForDelete] = action.payload;
      let comments = state.comments.get(id);
      if (comments) {
        comments = comments.filter(
          comment => comment.id !== commentForDelete.id
        );
        return {
          ...state,
          comments: new Map(state.comments).set(id, comments)
        };
      } else {
        return {
          ...state
        };
      }
    }
    case UPDATE_POST_COMMENT_COMMENT: {
      const [id, updatedComment] = action.payload;
      let comments = state.comments.get(id);
      comments = comments.map(comment =>
        comment.id === updatedComment.id ? updatedComment : comment
      );
      return {
        ...state,
        comments: new Map(state.comments).set(id, comments)
      };
    }
    default:
      return state;
  }
};
