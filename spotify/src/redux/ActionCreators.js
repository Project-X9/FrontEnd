import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const PremiumPost = (Premium) => (dispatch) => {
  const newPremium = { Premium };
  newPremium.date = new Date().toISOString();
  axios
    .post(`${baseUrl}users`, newPremium)
    .then((response) => alert(JSON.stringify(response)));
};
export const PostPassword = (password) => (dispatch) => {
  const newPassword = { password };
  newPassword.date = new Date().toISOString();
  axios
    .post(`${baseUrl}users`, newPassword)
    .then((response) => alert(JSON.stringify(response)));
};
export const fetchUserData = () => (dispatch) => {
  
  return fetch(baseUrl + 'users')
  .then(response => response.json())
  .then(data => dispatch(addUserData(data)))
  };
  export const addUserData = (data) => ({
    type: ActionTypes.ADD_USERDATA,
    payload: data
    });
export const GetPassword = () => (dispatch) => {
  axios
    .get(`${baseUrl}users/2`)
    .then((response) => alert(JSON.stringify(response.data.password)));
};
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const postFacebookLogin = (email, image, name) => (dispatch) => {
  const newFacebookLogin = {
    email,
    image,
    name,
  };
  newFacebookLogin.date = new Date().toISOString();

  axios
    .post(`${baseUrl}users`, newFacebookLogin);
    // .then((response) => alert(JSON.parse(response)));
};

export const postFeedback = (
  email,
  confirmemail,
  password,
  name,
  day,
  month,
  year,
  sex,
  ) => (dispatch) => {
  const newFeedback = {
    email,
    confirmemail,
    password,
    name,
    day,
    month,
    year,
    sex,
  };
  newFeedback.date = new Date().toISOString();
  axios
    .post(`${baseUrl}users`, newFeedback);
    // .then((response) =>alert (JSON.stringify(response)));
    // .then((response) =>dispatch(addUserId(JSON.parse(response.data.id))));
};
export const addUserId = (data) => ({
  type: ActionTypes.ADD_USERSTATES,
  payload: data
  });

//////////////////////////////////Account overView///////////////////////////////
