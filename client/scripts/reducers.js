import {
  SET_USER,
  SET_OPEN_PROJECTS,
  SET_MY_POST,
  SET_MY_BID,
  LOGOUT
} from './types';

export const initialState = {
  email: '',
  password: '',
  name: '',
  skills: '',
  aboutMe: '',
  phone: '',
  openProjects: [],
  myPosts: [],
  myBids: [],
};

export default function(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };
    case SET_OPEN_PROJECTS:
      return {
        ...state,
        ...action.payload
      };
    case SET_MY_POST:
      return {
        ...state,
        ...action.payload
      };
    case SET_MY_BID:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
