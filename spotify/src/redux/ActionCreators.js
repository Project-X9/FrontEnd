import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const PremiumPost = (id, isPremium) => dispatch => {
  const data = {
    premium: isPremium
  };
  data.date = new Date().toISOString();
  axios.patch(`${baseUrl}users/${id}`, data);
  // .then(response => alert(response.data.premium ));
};
export const fetchUserData = () => dispatch => {
  return fetch(baseUrl + "users")
    .then(response => response.json())
    .then(data => dispatch(addUserData(data)));
};
export const addUserData = data => ({
  type: ActionTypes.ADD_USERDATA,
  payload: data
});
export const GetPassword = id => dispatch => {
  axios
    .get(`${baseUrl}users/${id - 1}`)
    .then(response => JSON.stringify(response.data.password));
};
export const PostPassword = (password, id) => dispatch => {
  const newPassword = { password: password };
  axios.patch(`${baseUrl}users/${id}`, newPassword);
};
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const postFacebookLogin = (email, image, name) => dispatch => {
  const newFacebookLogin = {
    email,
    image,
    name
  };
  newFacebookLogin.date = new Date().toISOString();
  newFacebookLogin.premium=false
  axios.post(`${baseUrl}users`, newFacebookLogin).then(response => {
    //here i want to get the id of the last elment i posted from the
    let id = response.data.id; // comming response which is coming in jason format and then i need
    dispatch(addUserId(id)); //to send it to the function addUserId to add it in my store
    // alert(response.data.id)
  });
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
  sex
) => dispatch => {
  const newFeedback = {
    email,
    confirmemail,
    password,
    name,
    day,
    month,
    year,
    sex
  };

  newFeedback.date = new Date().toISOString();
  newFeedback.premium = false;
  axios
    .post(`${baseUrl}users`, newFeedback) //here where i send the post request to the server
    .then(response => {
      // here i want to get the id of the last elment i posted from the
      // comming response which is coming in jason format and then i need
      for (let index = 0; index < response.data.id + 1; index++) {
        if (index === response.data.id) {
          dispatch(addUserId(index)); //to send it to the function addUserId to add it in my store
        }
      }
      // alert(response.data.id)
    });
  // .then((response) =>alert (JSON.stringify(response)));
  // .then((response) =>dispatch(addUserId(JSON.parse(response.data.id))));
};

export const handleLoginId = id => dispatch => {
  dispatch(addUserId(id));
};

export const addUserId = data => ({
  type: ActionTypes.ADD_USERID,
  payload: data
});
//////////////////////////////////// LOGOUT /////////////////////// 
export const handleLogoutId  = (id)=> dispatch => {
  dispatch(removeUserId(id));
};
export const removeUserId = (id) => ({
  type: ActionTypes.ADD_LOGOUT,
  payload:id
});
/////////////////////////////////////////////////////////////////////
export const getEmail = id => dispatch => {
  return axios
    .get(`${baseUrl}users/${id - 1}`)
    .then(response => JSON.stringify(response.data.email));
};

export const getPassword = id => dispatch => {
  axios.get(`${baseUrl}users/${id - 1}`).then(response => {
    return response.data.password;
  });
};

//////////////////////////////////Account overView///////////////////////////////
