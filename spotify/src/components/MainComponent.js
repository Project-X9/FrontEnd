import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import Home from "./Homepage/HomeComponent";
import SignUp from "./SignUp/SignUpComponent";
import PremiumComponent from "./PremiumPage/PremuimComponent";
import AccountOverview from "./AccountOverview/AccountOverviewComponent";
import WebPlayer from "./WebPlayerHome/WebPlayerComponent";
import SignIn from "./SignIn/SignInComponent";
import ArtistInterface from "./ForArtists/ArtistInterfaceComponent"
import "./ForArtists/ArtistInterfaceComponent.css";
import Library from "./Library/LibraryCompnent";
import PlayFooter from "./PlayFooter/PlayFooter";
import CreatePlayList from "./WebPlayerHome/CreatePlayListModel";
import LoggedHome from "./Homepage/LoggedHomeComponent";
import {
  postFeedback,
  postFacebookLogin,
  PremiumPost,
  GetPassword,
  PostPassword,
  PatchAddPlaylist,
  getEmail,
  getPassword,
  fetchUserData,
  handleLoginId,
  handleLogoutId,
  fetchUserPlaylist,
  fetchArtist,
  fetchAlbum,
  handleSignIn_BE,
  makeSignupRedirectable,
  handleLogout_BE,
  handleCurrentPlayList,
  patchedunfollow,
  patchedfollow,
  postupdatedFeedback,
  handleCurrentAlbums,
  handleCurrentArtists,
  PlayTheFooter,
  PlayShuffle,
  PauseShuffle,
  ChangeSongProgress,
  ChangeProgressMode,
  ChangeProgressDirty,
  ChangeTotalTime,
  ChangeCurrentTime,
  AddPrevSong,
  ForSignUpVerification,
  ControlModal,
  handleChangeData_BE,
  AddSong_inPlaylist_id,
  CreatePlayList_BE,
  ReadNotifications,
  GetSongsByGeneres,
  GetDeletedPlayList,
  RecoverPlayList,
  AddToQueue,
  RemoveQueue
} from "../redux/ActionCreators";
import MyAlbums from "./ForArtists/MyAlbumsComponent";
import MySongs from "./ForArtists/MySongsComponent";
import { AddToQueue } from './../redux/ActionCreators';

const mapStateToProps = (state) => ({
  data: state.data,
  id: state.id,
  playLists: state.playLists,
  artist: state.artist,
  album: state.album,
  userstate: state.userstate,
  isSignedIn: state.isSignedIn,
  data_be: state.data_be,
  currentPlaylist: state.currentPlaylist,
  categories: state.categories,
  fullsongs: state.fullsongs,
  fullartists: state.fullartists,
  song: state.song,
  shuffle: state.shuffle,
  progress: state.progress,
  in_set_progress_mode: state.in_set_progress_mode,
  is_progress_dirty: state.is_progress_dirty,
  currentTime: state.currentTime,
  totalTime: state.totalTime,
  prevsong:state.prevsong,
  signupdata:state.signupdata,
  isModalOpen:state.isModalOpen,
  token:state.token,
  songid:state.songid,
  genretracks:state.genretracks,
  deletedPlaylists:state.deletedPlaylists

});
const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  resetSignInForm: () => {
    dispatch(actions.reset("login"));
  },
  reseteditprofile: () => {
    dispatch(actions.reset("editprofie"));
  },
  resetpassword: () => {
    dispatch(actions.reset("resetpassword"));
  },
  resetChangePasswordForm: () => {
    dispatch(actions.reset("changepassword"));
  },
  fetchUserData: () => {
    dispatch(fetchUserData());
  },
  handleLogout_BE: () => {
    dispatch(handleLogout_BE());
  },
  fetchUserPlaylist: () => {
    dispatch(fetchUserPlaylist());
  },
  handleCurrentPlayList: (data) => {
    dispatch(handleCurrentPlayList(data));
  },
  handleCurrentArtists: (data) => {
    dispatch(handleCurrentArtists(data));
  },
  handleCurrentAlbums: (data) => {
    dispatch(handleCurrentAlbums(data));
  },
  fetchArtist: () => {
    dispatch(fetchArtist());
  },
  makeSignupRedirectable: () => {
    dispatch(makeSignupRedirectable());
  },
  fetchAlbum: () => {
    dispatch(fetchAlbum());
  },
  handleSignIn_BE: (data) => {
    dispatch(handleSignIn_BE(data));
  },
  handleLogoutId: (id) => dispatch(handleLogoutId(id)),
  PatchAddPlaylist:(idPlaylist,idSong) =>dispatch(PatchAddPlaylist(idPlaylist,idSong)),
  PostPassword: (password, id) => dispatch(PostPassword(password, id)),
  GetPassword: (id) => dispatch(GetPassword(id)),
  getEmail: (id) => dispatch(getEmail(id)),
  getPassword: (id) => dispatch(getPassword(id)),
  PremiumPost: (id, isPremium) => dispatch(PremiumPost(id, isPremium)),
  patchedunfollow: (idUser, idPlaylist) =>
    dispatch(patchedunfollow(idUser, idPlaylist)),
  patchedfollow: (idUser, idPlaylist) =>
    dispatch(patchedfollow(idUser, idPlaylist)),
  handleLoginId: (id) => dispatch(handleLoginId(id)),
  postFeedback: (email, confirmemail, password, name, day, month, year, sex) =>
    dispatch(
      postFeedback(email, confirmemail, password, name, day, month, year, sex)
    ),
  postupdatedFeedback: (id, isemail, isage, isID) =>
    dispatch(postupdatedFeedback(id, isemail, isage, isID)),
  postFacebookLogin: (email, image, name) =>
    dispatch(postFacebookLogin(email, image, name)),
  PlayTheFooter: (songSrc) => {
    dispatch(PlayTheFooter(songSrc));
  },
  PlayShuffle: () => {
    dispatch(PlayShuffle());
  },
  PauseShuffle: () => {
    dispatch(PauseShuffle());
  },
  ChangeSongProgress: (progress) => {
    dispatch(ChangeSongProgress(progress));
  }
  ,
  ChangeProgressMode: (progressMode) => {
    dispatch(ChangeProgressMode(progressMode));
  },
  ChangeProgressDirty: (progressDirty) => {
    dispatch(ChangeProgressDirty(progressDirty));
  }
  ,
  ChangeTotalTime: (time) => {
    dispatch(ChangeTotalTime(time));
  },
  ChangeCurrentTime: (time) => {
    dispatch(ChangeCurrentTime(time));
  }
  ,
  AddPrevSong: (song) => {
    dispatch(AddPrevSong(song));
  }
  , ForSignUpVerification: (data) => {
    dispatch(ForSignUpVerification(data));
  }
  , ControlModal: (data) => {
    dispatch(ControlModal(data));
  },
  handleChangeData_BE: (id, token) => {
    dispatch(handleChangeData_BE(id, token));
  }
 ,AddSong_inPlaylist_id: (data) => {
  dispatch(AddSong_inPlaylist_id(data));
}, CreatePlayList_BE: (userId,playlistName,token) => {
  dispatch(CreatePlayList_BE(userId,playlistName,token));
}
,ReadNotifications: (userId,notfId,token) => {
  dispatch(ReadNotifications(userId,notfId,token));
},
GetSongsByGeneres: (categoryId) => {
  dispatch(GetSongsByGeneres(categoryId));
},
GetDeletedPlayList: (userid,token) => {
  dispatch(GetDeletedPlayList(userid,token));
},
RecoverPlayList: (userid,playlistid,token) => {
  dispatch(RecoverPlayList(userid,playlistid,token));
},
AddToQueue: (userid,trackid,token) => {
  dispatch(AddToQueue(userid,trackid,token));
},
RemoveQueue: (userid,trackid,token) => {
  dispatch(RemoveQueue(userid,trackid,token));
}
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchUserData();
    this.props.fetchUserPlaylist();
    this.props.fetchArtist();
    this.props.fetchAlbum();
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <TransitionGroup> */}
        {/* <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> */}
        <Switch>
          {this.props.isSignedIn.isSignedIn == null && (<Route exact path="/home" component={() => <Home isSignedIn={this.props.isSignedIn}
            data_be={this.props.data_be} />}
            handleLogout_BE={this.props.handleLogout_BE}
            data_be={this.props.data_be} />)}
          {this.props.isSignedIn.isSignedIn != null && (<Route exact path="/home" component={() => <LoggedHome
            id={this.props.id}
            data={this.props.data}
            playLists={this.props.playLists}
            data_be={this.props.data_be}
            currentPlaylist={this.props.currentPlaylist}
            fullsongs={this.props.fullsongs}
            isSignedIn={this.props.isSignedIn}
            handleLogout_BE={this.props.handleLogout_BE} />} />)}
          <Route
            exact
            path="/signup"
            component={() => (
              <SignUp
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFacebookLogin={this.props.postFacebookLogin}
                postFeedback={this.props.postFeedback}
                id={this.props.id}
                data={this.props.data}
                handleLoginId={this.props.handleLoginId}
                userstate={this.props.userstate}
                makeSignupRedirectable={this.props.makeSignupRedirectable}
                isSignedIn={this.props.isSignedIn}
                ForSignUpVerification={this.props.ForSignUpVerification}
                signupdata={this.props.signupdata}
                isModalOpen={this.props.isModalOpen}
                ControlModal={this.props.ControlModal}

              />
            )}
          />
          {/* <Route
            exact
            path="/footer"
            component={() => (
              <PlayFooter />
            )}
          /> */}

          <Route
            exact
            path="/premium"
            component={() => (
              <PremiumComponent
                ///////////for Handling the premium membership of the user
                PremiumPost={this.props.PremiumPost}
                id={this.props.id}
                data={this.props.data}
                /////getting all the info of the user
                data_be={this.props.data_be}
                ///////logging of the user
                handleLogout_BE={this.props.handleLogout_BE}
                isSignedIn={this.props.isSignedIn}
                handleChangeData_BE={this.props.handleChangeData_BE}
                token={this.props.token}
                ForSignUpVerification={this.props.ForSignUpVerification}
                signupdata={this.props.signupdata}
                isModalOpen={this.props.isModalOpen}
                ControlModal={this.props.ControlModal}
              />
            )}
          />

          <Route
            path="/account"
            component={() => (
              <AccountOverview
                //////////for overview and change password and edit profile and nowplay
                data={this.props.data}
                id={this.props.id}
                handleLogoutId={this.props.handleLogoutId}
                ///////////
                ///////////for change password
                PostPassword={this.props.PostPassword}
                GetPassword={this.props.GetPassword}
                resetChangePasswordForm={this.props.resetChangePasswordForm}
                reseteditprofile={this.props.reseteditprofile}
                //////////
                ///////// for edit profile
                postupdatedFeedback={this.props.postupdatedFeedback}
                /////////
                data_be={this.props.data_be}
                handleLogout_BE={this.props.handleLogout_BE}
                isSignedIn={this.props.isSignedIn}
                ///////////////////////////
                ///////// for reset password
                isModalOpen={this.props.isModalOpen}
                ControlModal={this.props.ControlModal}
                ForSignUpVerification={this.props.ForSignUpVerification}
                signupdata={this.props.signupdata}
                resetpassword={this.props.resetpassword}
                /////////
                handleChangeData_BE={this.props.handleChangeData_BE}
                token={this.props.token}
                ReadNotifications={this.props.ReadNotifications}

                GetDeletedPlayList={this.props.GetDeletedPlayList}
                deletedPlaylists={this.props.deletedPlaylists}
                RecoverPlayList={this.props.RecoverPlayList}
              />
            )}
          />
          <Route
            path="/webplayer"
            component={() => (
              <WebPlayer
              fullsongs={this.props.fullsongs}
              fullartists={this.props.fullartists}
                //////////
                patchedunfollow={this.props.patchedunfollow}
                patchedfollow={this.props.patchedfollow}
                //////////for Home page and Library page
                data={this.props.data}
                id={this.props.id}
                playLists={this.props.playLists}
                artist={this.props.artist}
                album={this.props.album}
                handleLogoutId={this.props.handleLogoutId}
                ///////////
                data_be={this.props.data_be}
                handleCurrentPlayList={this.props.handleCurrentPlayList}
                currentPlaylist={this.props.currentPlaylist}
                handleLogout_BE={this.props.handleLogout_BE}
                isSignedIn={this.props.isSignedIn}
                categories={this.props.categories}
                handleCurrentAlbums={this.props.handleCurrentAlbums}
                handleCurrentArtists={this.props.handleCurrentArtists}
                PlayTheFooter={this.props.PlayTheFooter}
                song={this.props.song}
                PlayShuffle={this.props.PlayShuffle}
                PauseShuffle={this.props.PauseShuffle}
                shuffle={this.props.shuffle}
                ChangeSongProgress={this.props.ChangeSongProgress}
                progress={this.props.progress}
                ChangeProgressMode={this.props.ChangeProgressMode}
                in_set_progress_mode={this.props.in_set_progress_mode}
                ChangeProgressDirty={this.props.ChangeProgressDirty}
                is_progress_dirty={this.props.is_progress_dirty}
                ChangeTotalTime={this.props.ChangeTotalTime}
                ChangeCurrentTime={this.props.ChangeCurrentTime}
                currentTime={this.props.currentTime}
                totalTime={this.props.totalTime}
                AddPrevSong={this.props.AddPrevSong}
                prevsong={this.props.prevsong}
                handleChangeData_BE={this.props.handleChangeData_BE}
                token={this.props.token}
                AddSong_inPlaylist_id={this.props.AddSong_inPlaylist_id}
                songid={this.props.songid}
                isModalOpen={this.props.isModalOpen}
                ControlModal={this.props.ControlModal}
                CreatePlayList_BE={this.props.CreatePlayList_BE}
                GetSongsByGeneres={this.props.GetSongsByGeneres}
                genretracks={this.props.genretracks}
                PatchAddPlaylist={this.props.PatchAddPlaylist}
                RemoveQueue={this.props.RemoveQueue}
                AddToQueue={this.props.AddToQueue}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            component={() => (
              <SignIn
                resetSignInForm={this.props.resetSignInForm}
                postFacebookLogin={this.props.postFacebookLogin}
                // handleLoginId={this.props.handleLoginId}
                data={this.props.data}
                id={this.props.id}
                handleLoginId={this.props.handleLoginId}
                isSignedIn={this.props.isSignedIn}
                handleSignIn_BE={this.props.handleSignIn_BE}

              />
            )}
          />
          <Route
            path="/forartists"
            component={() => (
              <ArtistInterface
              />
            )}
          />
          <Redirect to="/signup" />
        </Switch>
        {/* </CSSTransition> */}
        {/* </TransitionGroup> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
