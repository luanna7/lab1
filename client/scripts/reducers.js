import {
  SET_USER,
  SET_OPEN_PROJECTS,
} from './types';

export const initialState = {
  email: '',
  password: '',
  name: '',
  skills: '',
  aboutMe: '',
  phone: '',
  openProjects: []
};

export default function(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    case SET_OPEN_PROJECTS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
