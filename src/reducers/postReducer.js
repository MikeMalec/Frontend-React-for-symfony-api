import {
  CREATE_POST,
  GET_USER_POSTS,
  CHANGE_CREATED,
  DELETE_POST,
  GET_POST,
  UPDATE_POST,
  SET_POST
} from '../actions/types';

const initialState = {
  posts: [],
  currentPost: null,
  created: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST: {
      return {
        ...state,
        created: true
      };
    }
    case GET_POST: {
      return {
        ...state,
        currentPost: action.payload.post
      };
    }
    case GET_USER_POSTS: {
      return {
        ...state,
        currentPost: null,
        posts: action.payload.posts
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        created: true,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    }
    case SET_POST: {
      return {
        ...state,
        currentPost: action.payload
      };
    }
    case CHANGE_CREATED: {
      return {
        ...state,
        created: false
      };
    }
    default:
      return state;
  }
};
