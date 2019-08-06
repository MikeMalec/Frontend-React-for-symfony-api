import { SET_USER_TO_SHOW, SHOW_USER_POSTS } from '../actions/types';

const initialState = {
  userToShow: null,
  userPosts: []
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
        userPosts: action.payload.posts
      };
    }
    default:
      return state;
  }
};
