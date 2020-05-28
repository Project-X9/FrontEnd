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

import {
  postFeedback,
  postFacebookLogin,
  PremiumPost,
  GetPassword,
  PostPassword,
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
  PlaySong,
  PauseSong,
  ChangeSongProgress,
  ChangeProgressMode,
  ChangeProgressDirty,
  ChangeTotalTime,
  ChangeCurrentTime
} from "../redux/ActionCreators";
import MyAlbums from "./ForArtists/MyAlbumsComponent";
import MySongs from "./ForArtists/MySongsComponent";

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
  song: state.song,
  isPlaying: state.isPlaying,
  progress: state.progress,
  in_set_progress_mode: state.in_set_progress_mode,
  is_progress_dirty: state.is_progress_dirty,
  currentTime: state.currentTime,
  totalTime: state.totalTime,
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
  PlaySong: () => {
    dispatch(PlaySong());
  },
  PauseSong: () => {
    dispatch(PauseSong());
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
          <Route exact path="/home" component={() => <Home />} />
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
              />
            )}
          />
          <Route
            path="/webplayer"
            component={() => (
              <WebPlayer
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
                isSignedIn={this.props.isSignedIn}
                handleCurrentPlayList={this.props.handleCurrentPlayList}
                currentPlaylist={this.props.currentPlaylist}
                handleLogout_BE={this.props.handleLogout_BE}
                isSignedIn={this.props.isSignedIn}
                categories={this.props.categories}
                handleCurrentAlbums={this.props.handleCurrentAlbums}
                handleCurrentArtists={this.props.handleCurrentArtists}
                PlayTheFooter={this.props.PlayTheFooter}
                song={this.props.song}
                PlaySong={this.props.PlaySong}
                PauseSong={this.props.PauseSong}
                isPlaying={this.props.isPlaying}
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
