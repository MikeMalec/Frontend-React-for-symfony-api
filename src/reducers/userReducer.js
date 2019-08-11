import {
  SET_USER_TO_SHOW,
  SHOW_USER_POSTS,
  SHOW_MORE_USER_POSTS
} from '../actions/types';

const initialState = {
  userToShow: null,
  userPosts: [],
  amountOfPosts: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TO_SHOW: {
      return {
        ...state,
        userToShow: action.payload.user
      };
    }
    case SHOW_USER_POSTS: {
      return {
        ...state,
        userPosts: action.payload.posts,
        amountOfPosts: action.payload.amountOfPosts
      };
    }
    case SHOW_MORE_USER_POSTS: {
      return {
        ...state,
        userPosts: [...state.userPosts, ...action.payload.posts]
      };
    }
    default:
      return state;
  }
};
