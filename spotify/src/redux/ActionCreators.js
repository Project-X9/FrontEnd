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

//////////////////////////////////////////////EditProfile//////////////////////////////////////////////////
export const postupdatedFeedback = (id, isemail, isage, isID) => (dispatch) => {
  const newFeedback = {
    email: isemail,
    age: isage,
    name: isID,
  };

  axios.patch(`${PremiumUrl}/${id}`, newFeedback);
};
/////////////////////////////////////////////////////////////////////////////////////
export const patchedunfollow = (iduser, idplaylist) => (dispatch) => {
  const data = { id: iduser };
  // data.date = new Date().toISOString();
  console.log(data);
  axios.patch(`${UnFollowURL}/${idplaylist}`, data).then((response) => {
    console.log("Response from sign in", response);

    axios
      .get(`${SignUpUrl}/${iduser}`)
      .then((response2) => dispatch(addUserData_BE(response2.data.data.user)));
  });
};
export const patchedfollow = (iduser, idplaylist) => (dispatch) => {
  const data = { id: iduser };
  // data.date = new Date().toISOString();
  console.log(data);
  axios.patch(`${FollowURL}/${idplaylist}`, data).then((response) => {
    console.log("Response from sign in", response);
    dispatch(addLogin(true));
    axios
      .get(`${SignUpUrl}/${iduser}`)
      .then((response2) => dispatch(addUserData_BE(response2.data.data.user)));
  });
};
/////////////////////////////////////////////////////////////////////////////////////////
export const PremiumPost = (id, isPremium) => (dispatch) => {
  const data = {
    premium: isPremium,
    previouslyPremium: true,
  };
  // data.date = new Date().toISOString();
  axios.patch(`${PremiumUrl}/${id}`, data);
  // .then(response => alert(response.data.premium ));
};
///////////////////////////////////////////////////////////////////////////////
export const fetchUserData = () => (dispatch) => {
  return fetch(baseUrl + "users")
    .then((response) => response.json())
    .then((data) => dispatch(addUserData(data)));
  // axios.get(`${baseUrl3}`)
  // .then(data => dispatch(addUserData(JSON.stringify(data))));
};
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
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
export const addUser = (data) => ({
  type: ActionTypes.ADD_USER,
  payload: data,
});

////////////////////////////////////////
export const handleLoginId = (id) => (dispatch) => {
  dispatch(addUserId(id));
};

export const addUserId = (data) => ({
  type: ActionTypes.ADD_USERID,
  payload: data,
});
export const getEmail = (id) => (dispatch) => {
  return axios
    .get(`${baseUrl}users/${id - 1}`)
    .then((response) => JSON.stringify(response.data.email));
};

export const getPassword = (id) => (dispatch) => {
  axios.get(`${baseUrl}users/${id - 1}`).then((response) => {
    return response.data.password;
  });
};
//////////////////////////////////// LOGOUT ///////////////////////
export const handleLogoutId = (id) => (dispatch) => {
  dispatch(removeUserId(id));
  // dispatch(removeUserData());
};
// export const removeUserData= () => ({
//   type: ActionTypes.REMOVE_USERDATA
// });
export const removeUserId = (id) => ({
  //it recieves an empty string
  type: ActionTypes.ADD_LOGOUT,
  payload: id,
});
/////////////////////////////////////////////////////////////////////
/////////////////GetPlayListData////////by Ahmed M. Hassan//////

//////////////////////////////////Account overView///////////////////////////////

///////////////////////////////////////Artist////////////////////////////////////

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
/////it should take the id when we integrate with the back end
export const fetchUserPlaylist = () => (dispatch) => {
  axios
    .get(`${baseUrl}playlist`)
    .then((response) => dispatch(addUserPlaylist(response.data)));
};
export const addUserPlaylist = (data) => ({
  type: ActionTypes.ADD_PLAYLIST,
  payload: data,
});
/////////////////////////////////////////////////////////////////////
/////////////////GetArtistData////////by Ahmed M. Hassan//////

/////it should take the id when we integrate with the back end
export const fetchArtist = () => (dispatch) => {
  axios
    .get(`${baseUrl}artists`)
    .then((response) => dispatch(addArtist(response.data)));
};
export const addArtist = (data) => ({
  type: ActionTypes.ADD_ARTIST,
  payload: data,
});
/////////////////////////////////////////////////////////////////////
/////////////////GetArtistData////////by Ahmed M. Hassan//////

/////it should take the id when we integrate with the back end
export const fetchAlbum = () => (dispatch) => {
  axios
    .get(`${baseUrl}albums`)
    .then((response) => dispatch(addAlbum(response.data)));
};
export const addAlbum = (data) => ({
  type: ActionTypes.ADD_ALBUM,
  payload: data,
});
// export const removeUserPlayList= () => ({
//   type: ActionTypes.REMOVE_PLAYLIST
// });
////////////////////////////////////////Edit Profile/////////////////////////////////////////////

/////////////////////////////////////////////////////// Not Mocking//////////////////////////////////
//////////////sign in///////////////
export const handleSignIn_BE = (data) => (dispatch) => {
  axios
    .post(SignInUrl, data)
    .then((response) => {
      console.log("Response from sign in", response);
      dispatch(addLogin(true));
      var token=response.data.token
      const Authstr='Bearer '.concat(token)
      axios
        .get(`${SignUpUrl}/${response.data.user._id}`,{headers:{Authorization:Authstr}})
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
export const handleLogout_BE = () => (dispatch) => {
  dispatch(LogOut_BE());
  // dispatch(removeUserData());
};
export const LogOut_BE = () => ({
  type: ActionTypes.ADD_LOGOUT_BE,
});
////////////////////currnt playlist////////////
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
export const handleCurrentAlbums = (id) => (dispatch) => {
  dispatch(CurrentLoading(true));
  axios
    .get(`${AlbumsUrl}/${id}`)
    .then((response) => dispatch(addCurrentPlaylist(response.data.data.album)));

  // dispatch(addCurrentPlaylist(response))
  // dispatch(removeUserData());
};
export const addCurrentPlaylist = (data) => ({
  type: ActionTypes.ADD_CURRENT_PLAYLIST,
  payload: data,
});
export const CurrentLoading = () => ({
  type: ActionTypes.CURRENT_LOADING,
});
