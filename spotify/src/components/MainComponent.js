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
import PlayFotter from "./WebPlayer/PlayFotterComponent";
import Library from "./Library/LibraryCompnent";


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
  EditProfile,
  handleSignIn_BE,
  makeSignupRedirectable
} from "../redux/ActionCreators";

const mapStateToProps = state => ({
  data: state.data,
  id: state.id,
  playLists: state.playLists,
  artist: state.artist,
  album: state.album,
  userstate:state.userstate,
  isSignedIn:state.isSignedIn,
  data_be:state.data_be,
 
});
const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  resetSignInForm: () => {
    dispatch(actions.reset("login"));
  },
  fetchUserData: () => {
    dispatch(fetchUserData());
  },
  fetchUserPlaylist: () => {
    dispatch(fetchUserPlaylist());
  },
  fetchArtist: () => {
    dispatch(fetchArtist());
  },
  makeSignupRedirectable:() =>{
    dispatch(makeSignupRedirectable());
  },
  fetchAlbum: () => {
    dispatch(fetchAlbum());
  },
  handleSignIn_BE: (data) => {
    dispatch(handleSignIn_BE(data));
  },
  handleLogoutId: id => dispatch(handleLogoutId(id)),
  PostPassword: (password, id) => dispatch(PostPassword(password, id)),
  GetPassword: id => dispatch(GetPassword(id)),
  getEmail: id => dispatch(getEmail(id)),
  getPassword: id => dispatch(getPassword(id)),
  PremiumPost: (id, isPremium) => dispatch(PremiumPost(id, isPremium)),
  handleLoginId: id => dispatch(handleLoginId(id)),
  postFeedback: (email, confirmemail, password, name, day, month, year, sex) =>
    dispatch(
      postFeedback(email, confirmemail, password, name, day, month, year, sex)
    ),

    EditProfile: (name, day, month, year, sex,id) =>
    dispatch(
      EditProfile(name, day, month, year, sex,id)
    ),
  postFacebookLogin: (email, image, name) =>
    dispatch(postFacebookLogin(email, image, name))

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
              />
            )}
          />
          <Route
            exact
            path="/library"
            component={() => (
              <Library id={this.props.id} data={this.props.data} />
            )}
          />

          <Route
            exact
            path="/premium"
            component={() => (
              <PremiumComponent
                PremiumPost={this.props.PremiumPost}
                id={this.props.id}
                data={this.props.data}
                data_be={this.props.data_be}
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
              //////////
              ///////// for edit profile
              EditProfile={this.props.EditProfile}
              /////////
              data_be={this.props.data_be} 
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
                // fetchPlaylistById_be={this.props.fetchPlaylistById_be}
                // playlist_BE={this.props.playlist_BE}
                ///////////
                data_be={this.props.data_be}
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
