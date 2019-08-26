import {
  SET_USER_TO_SHOW,
  SHOW_USER_POSTS,
  SHOW_MORE_USER_POSTS,
  GET_USER_FOLLOWERS,
  GET_USER_FOLLOWED,
  UNSET_USER_TO_SHOW
} from '../actions/types';

const initialState = {
  userToShow: null,
  userPosts: [],
  amountOfPosts: 0,
  userFollowers: [],
  userFollowed: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TO_SHOW: {
      return {
        ...state,
        userToShow: action.payload.user
      };
    }
    case UNSET_USER_TO_SHOW: {
      return {
        ...state,
        userToShow: null,
        userFollowers: [],
        userFollowed: []
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
    case GET_USER_FOLLOWERS: {
      return {
        ...state,
        userFollowers: action.payload
      };
    }
    case GET_USER_FOLLOWED: {
      return {
        ...state,
        userFollowed: action.payload
      };
    }
    default:
      return state;
  }
};
