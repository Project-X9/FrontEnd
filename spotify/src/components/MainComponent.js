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
import Library from './Library/LibraryCompnent';
import LibraryPage from  "./Library/LibraryPage";
import Artists from  "./Library/ArtistsComponent";
import PlayList from './Library/PlayListComponent';
import Albums from './Library/AlbumsComponent';
import Artist from "./ArtistInterface/ArtistComponent";

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
  handleLogoutId:id=>dispatch(handleLogoutId(id)),
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
  postFacebookLogin: (email, image, name) =>
    dispatch(postFacebookLogin(email, image, name)),
  getName: id => dispatch(getName(id))
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchUserData();
    this.props.getName;
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

              />
            )}
          />
          <Route
            exact path="/library"
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
          />
          <Route
            exact
            path="/premium"
            component={() => (
              <PremiumComponent
                PremiumPost={this.props.PremiumPost}
                id={this.props.id}
                data={this.props.data}
              />
            )}
          />
          <Route  
            
            path="/account"
            component={() => (
              <AccountOverview 
              //////////for overview and change password
              data={this.props.data} 
              id={this.props.id}
              handleLogoutId={this.props.handleLogoutId}
              ///////////
              ///////////for change password
              PostPassword={this.props.PostPassword}
              GetPassword={this.props.GetPassword}
              //////////
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
                data_be={this.props.data_be}
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
          <Redirect to="/artist" />
        </Switch>
        {/* </CSSTransition> */}
        {/* </TransitionGroup> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
