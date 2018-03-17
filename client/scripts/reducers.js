import {
  SET_USER,
  SET_OPEN_PROJECTS,
} from './types';

const initialState = {
  email: '',
  password: '',
  name: '',
  openProjects: []
};

export default function(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case SET_USER:
      return state.merge(...action.payload);
    case SET_OPEN_PROJECTS:
      return state.set('openProject', action.payload);
    default:
      return state;
  }
}
