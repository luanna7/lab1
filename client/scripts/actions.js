import axios from 'axios';
import { SET_USER, SET_OPEN_PROJECTS } from './types';

export const signin = (form) => (dispatch) => {
  return axios.post('http://localhost:3000/users/signin', form).then((res) => {
    console.log(form);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    }

  })
}

export const signup = (form) => (dispatch) => {
  console.log(form);
  return axios.post('http://localhost:3000/users/signup', form).then((res) => {
    if (res.status === 201) {
      dispatch({
        type: SET_USER,
        payload: form
      });
    }
  })
}

export const editProfile = (requestBody) => (dispatch) => {
  return axios.post('http://localhost:3000/users/update', requestBody).then((res) => {
    const data = res.data;
    dispatch({
      type: SET_USER,
      payload: data
    });
  })
}

export const postProject = (requestBody) => (dispatch) => {
  return axios.post('http://localhost:3000/projects/create', requestBody);
}

export const getOpenProjects = () => dispatch => {
  return axios.get('http://localhost:3000/projects').then((res) => {
    const data = res.data;
    dispatch({
      type: SET_OPEN_PROJECTS,
      payload: data
    })
  })
}

export const createBid = (freelancer) => dispatch => {
  return axios.post('http://localhost:3000/bids/create', { freelancer });
}
