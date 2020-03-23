import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const PremiumPost = Premium => dispatch => {
  const newPremium = { Premium };
  newPremium.date = new Date().toISOString();
  axios
    .post(`${baseUrl}users`, newPremium)
    .then(response => alert(JSON.stringify(response)));
};
export const PostPassword = password => dispatch => {
  const newPassword = { password };
  newPassword.date = new Date().toISOString();
  axios
    .post(`${baseUrl}users`, newPassword)
    .then(response => alert(JSON.stringify(response)));
};
// export const fetchUserData = () => dispatch => {
//   var myRequest = new XMLHttpRequest();

//   myRequest.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       var myjsObject = JSON.stringify(this.responseText);
//       // alert(myjsObject);
//       dispatch(addUserData(myjsObject));
//     }
//   };
//
export const fetchUserData = () => dispatch => {
  return fetch(baseUrl + "users")
    .then(response => response.json())
    .then(data => dispatch(addUserData(data)));

  // axios.get(`${baseUrl}users/2`)
  // .then(response=>
  //     dispatch(addUserData(response.data)))
};
export const addUserData = data => ({
  type: ActionTypes.ADD_USERDATA,
  payload: data
});
export const GetPassword = () => dispatch => {
  axios
    .get(`${baseUrl}users/2`)
    .then(response => alert(JSON.stringify(response.data.password)));
};
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const postFacebookLogin = (email, image, name) => dispatch => {
  const newFacebookLogin = {
    email,
    image,
    name
  };
  newFacebookLogin.date = new Date().toISOString();

  axios.post(`${baseUrl}users`, newFacebookLogin);

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
  axios
    .post(`${baseUrl}users`, newFeedback) //here where i send the post request to the server
    .then(response => {
      if (response.status === "created") {
        //here i want to get the id of the last elment i posted from the
        // comming response which is coming in jason format and then i need
        dispatch(addUserId(response)); //to send it to the function addUserId to add it in my store
      }
    });
  // .then((response) =>alert (JSON.stringify(response)));
  // .then((response) =>dispatch(addUserId(JSON.parse(response.data.id))));
};
export const addUserId = data => ({
  type: ActionTypes.ADD_USERSTATES,
  payload: data
});

export const getEmail = () => dispatch => {
  axios
    .get(`${baseUrl}users/2`)
    .then(response => alert(JSON.stringify(response.data.email)));
};
//////////////////////////////////Account overView///////////////////////////////
