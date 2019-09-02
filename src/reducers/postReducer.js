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
  GET_FILTERED_POSTS,
  GET_MORE_POSTS,
  GET_MORE_USER_POSTS,
  GET_MORE_FILTERED_POSTS,
  CLEAR_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  userPosts: [],
  currentPartOfFilteredPosts: null,
  query: null,
  amountOfPosts: 0,
  currentPost: null,
  created: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        currentPost: null,
        posts: action.payload.posts,
        amountOfPosts: action.payload.amountOfPosts
      };
    }
    case GET_POST: {
      return {
        ...state,
        currentPartOfFilteredPosts: null,
        query: null,
        currentPost: action.payload.post
      };
    }
    case GET_MORE_POSTS: {
      return {
        ...state,
        posts: [...state.posts, action.payload].flat(Infinity)
      };
    }
    case GET_USER_POSTS: {
      return {
        ...state,
        userPosts: action.payload.posts,
        amountOfPosts: action.payload.amountOfPosts
      };
    }
    case GET_MORE_USER_POSTS: {
      return {
        ...state,
        userPosts: [...state.userPosts, ...action.payload.posts]
      };
    }
    case GET_FILTERED_POSTS: {
      const [query, data] = action.payload;
      return {
        ...state,
        currentPost: null,
        posts: [],
        query: query,
        currentPartOfFilteredPosts: data.posts,
        amountOfPosts: data.amountOfPosts
      };
    }
    case GET_MORE_FILTERED_POSTS: {
      return {
        ...state,
        currentPartOfFilteredPosts: [
          ...state.currentPartOfFilteredPosts,
          ...action.payload.posts
        ]
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
        created: true
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        userPosts: state.userPosts.filter(post => post.id !== action.payload)
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
    case CLEAR_POSTS: {
      return {
        ...state,
        posts: []
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
