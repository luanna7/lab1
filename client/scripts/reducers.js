import { SET_USER } from './types';

const initialState = {
  email: '',
  password: '',
  name: '',
};

export default function(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case SET_USER:
      const { name, email } = action.payload;
      return state.set('name', name).set('email', email);
    default:
      return state;
  }
}
