import axios from 'axios';
import { SET_USER } from './types';

export const signin = (requestBody) => (dispatch) => {
  return axios.post('http://localhost:3000/users/signin').then((res) => {
    const data = res.data;
    dispatch({
      type: SET_USER,
      payload: data
    });
  })
}

export const signup = (requestBody) => (dispatch) => {
  return axios.post('http://localhost:3000/users/signup').then((res) => {
    const data = res.data;
    dispatch({
      type: SET_USER,
      payload: data
    });
  })
}
