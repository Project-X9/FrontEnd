import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import {
  baseUrl,
  SignUpUrl,
  SignInUrl,
  PremiumUrl,
  PlaylistsUrl,
  CategoriesUrl,
  FollowURL,
  UnFollowURL,
  AlbumsUrl,
} from "../shared/baseUrl";
import { ArtistsUrl } from "./../shared/baseUrl";
export const postupdatedFeedback = (id, isemail, isage, isID) => (dispatch) => {
  const newFeedback = {
    email: isemail,
    age: isage,
    name: isID,
  };
  axios.patch(`${PremiumUrl}/${id}`, newFeedback);
};

/**
 * Mocking
 */
export const fetchUserData = () => (dispatch) => {
  return fetch(baseUrl + "users")
    .then((response) => response.json())
    .then((data) => dispatch(addUserData(data)));
  // axios.get(`${baseUrl3}`)
  // .then(data => dispatch(addUserData(JSON.stringify(data))));
};
/**
 * Mocking
 * @param {Object} data 
 */
export const addUserData = (data) => ({
  type: ActionTypes.ADD_USERDATA,
  payload: data,
});
export const GetPassword = (id) => (dispatch) => {
  axios
    .get(`${baseUrl}users/${id - 1}`)
    .then((response) => JSON.stringify(response.data.password));
};
export const PostPassword = (password, id) => (dispatch) => {
  const newPassword = { password: password };
  axios.patch(`${PremiumUrl}/${id}`, newPassword);
};
/**
 * This function handels the sign up with facebook 
 * @param {String} email 
 * @param {URL} image 
 * @param {String} name 
 */
export const postFacebookLogin = (email, image, name) => (dispatch) => {
  const newFacebookLogin = {
    email,
    image,
    name,
  };
  newFacebookLogin.date = new Date().toISOString();
  newFacebookLogin.premium = false;
  axios.post(`${baseUrl}users`, newFacebookLogin).then((response) => {
    //here i want to get the id of the last elment i posted from the
    let id = response.data.id; // comming response which is coming in jason format and then i need
    dispatch(addUserId(id)); //to send it to the function addUserId to add it in my store
    // alert(response.data.id)
  });
  // .then((response) => alert(JSON.parse(response)));
};

/**
 * Mocking
 * @param {Number} id 
 */
export const handleLoginId = (id) => (dispatch) => {
  dispatch(addUserId(id));
};
/**
 * Mocking
 * @param {Number} id 
 */
export const addUserId = (data) => ({
  type: ActionTypes.ADD_USERID,
  payload: data,
});
/**
 * Mocking
 * @param {Number} id 
 */
export const getEmail = (id) => (dispatch) => {
  return axios
    .get(`${baseUrl}users/${id - 1}`)
    .then((response) => JSON.stringify(response.data.email));
};

/**
 * Mocking
 * @param {Number} id 
 */
export const getPassword = (id) => (dispatch) => {
  axios.get(`${baseUrl}users/${id - 1}`).then((response) => {
    return response.data.password;
  });
};
/**
 * Mocking
 * @param {Number} id 
 */
export const handleLogoutId = (id) => (dispatch) => {
  dispatch(removeUserId(id));
  // dispatch(removeUserData());
};
// export const removeUserData= () => ({
//   type: ActionTypes.REMOVE_USERDATA
// });
/**
 * Mocking 
 */
export const removeUserId = (id) => ({
  //it recieves an empty string
  type: ActionTypes.ADD_LOGOUT,
  payload: id,
});
/**
 * Mocking 
 */
export const getArtist = (id) => (dispatch) => {
  axios
    .get(`${baseUrl}artists/${id}`)
    .then((response) => dispatch(console.log(response.name)));
};
/*
export const getPopularSongs = id => dispatch => {
  axios.get(`${baseUrl}artists/${id - 1}`).then(response => {
    return response.data.popularSongs;
  });
}

export const getAlbums = id => dispatch => {
  axios.get(`${baseUrl}artists/${id - 1}`).then(response => {
    return response.data.albums;
  });
}

export const getAbout = id => dispatch => {
  axios.get(`${baseUrl}artists/${id - 1}`).then(response => {
    return response.data.about;
  });
}*/
/**
 * Mocking 
 */
export const fetchUserPlaylist = () => (dispatch) => {
  axios
    .get(`${baseUrl}playlist`)
    .then((response) => dispatch(addUserPlaylist(response.data)));
};
/**
 * Mocking 
 */
export const addUserPlaylist = (data) => ({
  type: ActionTypes.ADD_PLAYLIST,
  payload: data,
});
/**
 * Mocking 
 */
export const fetchArtist = () => (dispatch) => {
  axios
    .get(`${baseUrl}artists`)
    .then((response) => dispatch(addArtist(response.data)));
};
/**
 * Mocking 
 */
export const addArtist = (data) => ({
  type: ActionTypes.ADD_ARTIST,
  payload: data,
});
/**
 * Mocking 
 */
export const fetchAlbum = () => (dispatch) => {
  axios
    .get(`${baseUrl}albums`)
    .then((response) => dispatch(addAlbum(response.data)));
};
/**
 * Mocking 
 */
export const addAlbum = (data) => ({
  type: ActionTypes.ADD_ALBUM,
  payload: data,
});
// export const removeUserPlayList= () => ({
//   type: ActionTypes.REMOVE_PLAYLIST
// });
/////////////////////////////////////////////////////// Not Mocking//////////////////////////////////
/**
 * it takes the user email and password entered in the sign im page and Post it to the database if it exist it will pass
 * and i will get his data by getting userdata by id and set the state of isSignedIn to true also i get the categories to
 *  be rendered in the home of web player if the user is not signed in 
 * and if the user is not exist in the data base i set the isSignedIn to false    
 * @param {Object} data 
 */
export const handleSignIn_BE = (data) => (dispatch) => {
  axios
    .post(SignInUrl, data)
    .then((response) => {
      console.log("Response from sign in", response);
      dispatch(addLogin(true));
      var token = response.data.token;
      const Authstr = "Bearer ".concat(token);
      axios
        .get(`${SignUpUrl}/${response.data.user._id}`, {
          headers: { Authorization: Authstr },
        })
        .then((response2) =>
          dispatch(addUserData_BE(response2.data.data.user))
        );
      axios
        .get(`${CategoriesUrl}`)
        .then((response2) =>
          dispatch(addCategories(response2.data.data.Categories))
        );
    })
    .catch((error) => dispatch(addLogin(false)));
};
/**
 * 
 * @param {*} data 
 */
export const addCategories = (data) => ({
  type: ActionTypes.ADD_CATEGORIES,
  payload: data,
});
export const addUserData_BE = (data) => ({
  type: ActionTypes.ADD_USERDATA_BE,
  payload: data,
});
export const addLogin = (data) => ({
  type: ActionTypes.ADD_LOGIN,
  payload: data,
});
////////////////////////sign up ///////////////////////////////
/**
 * it is not used yet but this will reset the userstate with null 
 */
export const makeSignupRedirectable = () => (dispatch) => {
  dispatch(addUser(null));
};
////////////////////////////////////////fetch Playlist by id/////////////////////
// export const fetchPlaylistById_be = (id) => dispatch => {
//   axios.get(`${PlaylistsUrl}${id}`)
//   .then(response => console.log(response))
// };
// export const addPlayList = data => ({
//   type: ActionTypes.ADD_PLAYLIST_BYID,
//   payload: data
// });
//////////////////////////////log out///////////////////////////
/**
 * When we call it function if dispatch the action of logout so it empty the data considered with the Backend
 */
export const handleLogout_BE = () => (dispatch) => {
  dispatch(LogOut_BE());
  // dispatch(removeUserData());
};
/**
 * The action of Logout
 */
export const LogOut_BE = () => ({
  type: ActionTypes.ADD_LOGOUT_BE,
});
////////////////////currnt playlist////////////
/**
 * This function takes the id of the playlist we are going to render and request the data of it from the data base to be rendered 
 * in the playlist interface and put in a state we called currentplayList  
 * @param {String} id 
 */
export const handleCurrentPlayList = (id) => (dispatch) => {
  dispatch(CurrentLoading(true));
  axios
    .get(`${PlaylistsUrl}/${id}`)
    .then((response) =>
      dispatch(addCurrentPlaylist(response.data.data.playlist))
    );
  // dispatch(addCurrentPlaylist(response))
  // dispatch(removeUserData());
};
/**
 * This function takes the id of the artist we are going to render and request the data of it from the data base to be rendered 
 * in the playlist interface and put in a state we called currentplayList  
 * @param {String} id 
 */
export const handleCurrentArtists = (id) => (dispatch) => {
  dispatch(CurrentLoading(true));
  axios
    .get(`${ArtistsUrl}/${id}`)
    .then((response) =>
      dispatch(addCurrentPlaylist(response.data.data.artist))
    );
  // dispatch(addCurrentPlaylist(response))
  // dispatch(removeUserData());
};
/**
 * This function takes the id of the Album we are going to render and request the data of it from the data base to be rendered 
 * in the playlist interface and put in a state we called currentplayList  
 * @param {String} id 
 */
export const handleCurrentAlbums = (id) => (dispatch) => {
  dispatch(CurrentLoading(true));
  axios
    .get(`${AlbumsUrl}/${id}`)
    .then((response) => dispatch(addCurrentPlaylist(response.data.data.album)));

  // dispatch(addCurrentPlaylist(response))
  // dispatch(removeUserData());
};
/**
 * This is the action that when it is called the data of the current playlist, Album or Artist is stored in currentPlaylist
 * @param {Object} data 
 */
export const addCurrentPlaylist = (data) => ({
  type: ActionTypes.ADD_CURRENT_PLAYLIST,
  payload: data,
});
/**
 * New technique we are going to use in many functions in the future as waiting the data to be geted from the server 
 * we will put the isLoading of each state with true so we will render a certain component and when the data will came
 * the isLoading will be false and the actual component will be rendered 
 */
export const CurrentLoading = () => ({
  type: ActionTypes.CURRENT_LOADING,
});
/**
 * I takes all this paramater and post it to the data base and if the email is already exist it will set the user state to false 
 * else it will be true 
 * @param {String} email 
 * @param {String} confirmemail 
 * @param {String} password 
 * @param {String} name 
 * @param {Number} day 
 * @param {String} month 
 * @param {Number} year 
 * @param {String} sex 
 */
export const postFeedback = (
  email,
  confirmemail,
  password,
  name,
  day,
  month,
  year,
  sex
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
  newFeedback.premium = false;
  var d = new Date();
  var n = d.getFullYear();
  newFeedback.age = n - year;
  axios
    .post(SignUpUrl, newFeedback)
    .then((response) => dispatch(addUser(true)))
    .catch((error) => dispatch(addUser(false)));
  // for (let index = 0; index < response.data.id + 1; index++) {
  //   if (index === response.data.id) {
  //     dispatch(addUserId(index));
  //   }
  // }
};
/**
 * Takes the data of the user and put it in data_be 
 * @param {Object} data 
 */
export const addUser = (data) => ({
  type: ActionTypes.ADD_USER,
  payload: data,
});
export const patchedunfollow = (iduser, idplaylist) => (dispatch) => {
  const data = { id: iduser };
  // data.date = new Date().toISOString();
  console.log(data);
  axios.patch(`${UnFollowURL}/${idplaylist}`, data);
  // .then((response) => {
  //   console.log("Response from sign in", response);

  //   axios
  //     .get(`${SignUpUrl}/${iduser}`)
  //     .then((response2) => dispatch(addUserData_BE(response2.data.data.user)));
  // });
};
export const patchedfollow = (iduser, idplaylist) => (dispatch) => {
  const data = { id: iduser };
  // data.date = new Date().toISOString();
  console.log(data);
  axios.patch(`${FollowURL}/${idplaylist}`, data);
  // .then((response) => {
  //   console.log("Response from sign in", response);
  //   dispatch(addLogin(true));
  //   axios
  //     .get(`${SignUpUrl}/${iduser}`)
  //     .then((response2) => dispatch(addUserData_BE(response2.data.data.user)));
  // });
};
export const PremiumPost = (id, isPremium) => (dispatch) => {
  const data = {
    premium: isPremium,
    previouslyPremium: true,
  };
  // data.date = new Date().toISOString();
  axios.patch(`${PremiumUrl}/${id}`, data);
  // .then(response => alert(response.data.premium ));
};

