import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import Home from "./Homepage/HomeComponent";
import SignUp from "./SignUp/SignUpComponent";
import PremiumComponent from "./PremiumPage/PremuimComponent";
import AccountOverview from "./AccountOverview/AccountOverviewComponent";
import WebPlayer from "./WebPlayerHome/WebPlayerComponent"
import SignIn from "./SignIn/SignInComponent";
import PlayFotter from "./WebPlayer/PlayFotterComponent";
import Library from "./Library/LibraryCompnent";
import Artist from"./ArtistInterface/ArtistComponent"

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
  postupdatedFeedback,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => ({
  data: state.data,
  id: state.id,
  playLists: state.playLists,
  artist: state.artist,
  album: state.album,
  userstate:state.userstate,
  isSignedIn:state.isSignedIn,
  data_be:state.data_be,
  currentPlaylist:state.currentPlaylist,
  categories:state.categories
 
});
const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  resetSignInForm: () => {
    dispatch(actions.reset("login"));
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
  handleLoginId: (id) => dispatch(handleLoginId(id)),
  postFeedback: (email, confirmemail, password, name, day, month, year, sex) =>
    dispatch(
      postFeedback(email, confirmemail, password, name, day, month, year, sex)
    ),
  postupdatedFeedback: (id, isemail, isage, isID) =>
    dispatch(postupdatedFeedback(id, isemail, isage, isID)),
  postFacebookLogin: (email, image, name) =>
    dispatch(postFacebookLogin(email, image, name)),
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchUserData();
    this.props.fetchUserPlaylist();
    this.props.fetchArtist();
    this.props.fetchAlbum();
    this.props.handleCurrentPlayList();
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <TransitionGroup> */}
        {/* <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> */}
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/artist" component={() => <Artist />} />
         <Route exact path="/artists"
            component={() => (
              <Library
                id={this.props.id}
                data={this.props.data}
              />
            )}
          />
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
            path="/library"
            component={() => (
              <Library
                id={this.props.id}
                data={this.props.data}
              />
            )}
          />
          <Route
            path="/librarypage"
            component={() => (
              <LibraryPage
                id={this.props.id}
                data={this.props.data}
              />
            )}
          /> */}

          <Route
            exact
            path="/premium"
            component={() => (
              <PremiumComponent
                PremiumPost={this.props.PremiumPost}
                id={this.props.id}
                data={this.props.data}
                data_be={this.props.data_be}
                handleLogout_BE={this.props.handleLogout_BE}
                isSignedIn={this.props.isSignedIn}
              />
            )}
          />
          <Route  
            
            path="/account"
            component={() => (
              <AccountOverview
                postupdatedFeedback={this.props.postupdatedFeedback}
                //////////for overview and change password and edit profile and nowplay
                data={this.props.data}
                id={this.props.id}
                handleLogoutId={this.props.handleLogoutId}
                ///////////
                ///////////for change password
                PostPassword={this.props.PostPassword}
                GetPassword={this.props.GetPassword}
                //////////
                ///////// for edit profile
                EditProfile={this.props.EditProfile}
                /////////
                data_be={this.props.data_be}
                handleLogout_BE={this.props.handleLogout_BE}
                isSignedIn={this.props.isSignedIn}

              />
            )}
          />

          <Route
            path="/webplayer"
            component={() => (
              <WebPlayer
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
            exact
            path="/webplayer"
            component={() => (
              <PlayFotter data={this.props.data} id={this.props.id} />
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
