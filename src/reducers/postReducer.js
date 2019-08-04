import {
  CREATE_POST,
  GET_USER_POSTS,
  CHANGE_CREATED,
  DELETE_POST,
  GET_POST,
  UPDATE_POST,
  SET_POST,
  UNSET_CURRENT_POST,
  GET_POSTS,
  GET_FILTERED_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  currentPost: null,
  created: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        currentPost: null,
        posts: action.payload.posts
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
    case GET_FILTERED_POSTS: {
      return {
        ...state,
        currentPost: null,
        posts: action.payload.posts
      };
    }
    case CREATE_POST: {
      return {
        ...state,
        created: true
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
    case UNSET_CURRENT_POST: {
      return {
        ...state,
        currentPost: null
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
