import axios from 'axios';
import {
  SET_USER,
  SET_OPEN_PROJECTS,
  SET_MY_POST,
  SET_MY_BID,
  LOGOUT
} from './types';

export const signin = form => dispatch => {
  return axios.post('http://localhost:3000/users/signin', form).then(res => {
    if (res.status === 200) {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
      sessionStorage.setItem('Email', res.data.email);
    }
  });
};

export const signup = form => dispatch => {
  return axios.post('http://localhost:3000/users/signup', form).then(res => {
    if (res.status === 201) {
      dispatch({
        type: SET_USER,
        payload: form
      });
    }
  });
};

export const editProfile = form => dispatch => {
  const updateForm = {
    ...form
  };
  return axios.post('http://localhost:3000/users/update', form).then(res => {
    if (res.status === 202) {
      dispatch({
        type: SET_USER,
        payload: updateForm
      });
    }
  });
};

export const postProject = form => dispatch => {
  const requestForm = {
    ...form,
    completeDate: '',
    bidId: ''
  };
  return axios.post('http://localhost:3000/projects/create', requestForm);
};

export const getOpenProjects = () => dispatch => {
  return axios.get('http://localhost:3000/projects').then(res => {
    const data = res.data;
    console.log(data);
    dispatch({
      type: SET_OPEN_PROJECTS,
      payload: { openProjects: data }
    });
  });
};

export const createBid = requestBody => dispatch => {
  return axios.post('http://localhost:3000/bids/create', requestBody);
};

export const getMyPosts = name => dispatch => {
  return axios.get(`http://localhost:3000/projects/${name}`).then(res => {
    const data = res.data;
    console.log(data);
    dispatch({
      type: SET_MY_POST,
      payload: { myPosts: data }
    });
  });
};

export const getMyBids = email => dispatch => {
  return axios.get(`http://localhost:3000/bids/${email}`).then(res => {
    const data = res.data;
    dispatch({
      type: SET_MY_BID,
      payload: { myBids: data }
    });
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  sessionStorage.removeItem('Email');
};
