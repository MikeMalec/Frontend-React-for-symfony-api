import {
  CREATE_POST,
  CHANGE_CREATED,
  DELETE_POST,
  GET_POST,
  UPDATE_POST,
  SET_POST,
  UNSET_CURRENT_POST,
  GET_POSTS,
  GET_FILTERED_POSTS,
  GET_MORE_POSTS,
  GET_MORE_FILTERED_POSTS,
  CLEAR_POSTS,
  GET_USER_PUBLISHED_POSTS,
  GET_USER_UNPUBLISHED_POSTS,
  GET_MORE_USER_PUBLISHED_POSTS,
  GET_MORE_USER_UNPUBLISHED_POSTS,
  CLEAR_ALL_USER_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  userPublishedPosts: [],
  userUnpublishedPosts: [],
  currentPartOfFilteredPosts: null,
  query: null,
  amountOfPublishedPosts: 0,
  amountOfUnpublishedPosts: 0,
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
    case GET_USER_PUBLISHED_POSTS: {
      return {
        ...state,
        userPublishedPosts: action.payload.posts,
        amountOfPublishedPosts: action.payload.amountOfPosts
      };
    }
    case GET_USER_UNPUBLISHED_POSTS: {
      return {
        ...state,
        userUnpublishedPosts: action.payload.posts,
        amountOfUnpublishedPosts: action.payload.amountOfPosts
      };
    }
    case GET_MORE_USER_PUBLISHED_POSTS: {
      return {
        ...state,
        userPublishedPosts: [
          ...state.userPublishedPosts,
          ...action.payload.posts
        ]
      };
    }
    case GET_MORE_USER_UNPUBLISHED_POSTS: {
      return {
        ...state,
        userUnpublishedPosts: [
          ...state.userUnpublishedPosts,
          ...action.payload.posts
        ]
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

    case 'PUBLISH_POST': {
      return {
        ...state,
        userPublishedPosts: [...state.userPublishedPosts, action.payload],
        userUnpublishedPosts: state.userUnpublishedPosts.filter(
          post => post.id !== action.payload.id
        )
      };
    }

    // tutaj dodac delete post unpublished published
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        userPosts: state.userPosts.filter(post => post.id !== action.payload)
      };
    }
    case CLEAR_ALL_USER_POSTS: {
      return {
        ...state,
        userPublishedPosts: [],
        userUnpublishedPosts: []
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
