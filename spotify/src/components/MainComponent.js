import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import Home from "./Homepage/HomeComponent";
import SignUp from "./SignUp/SignUpComponent";
import PremiumComponent from "./PremiumPage/PremuimComponent";
import AccountOverview from "./AccountOverview/AccountOverviewComponent";
import SignIn from "./SignIn/SignInComponent";
import PlayFotter from "./WebPlayer/PlayFotterComponent";
import IdObj from "../Global";

import {
  postFeedback,
  postFacebookLogin,
  PremiumPost,
  GetPassword,
  PostPassword,
  getEmail,
  getPassword,
  fetchUserData,
  handleLoginId
} from "../redux/ActionCreators";

const mapStateToProps = state => ({
  data: state.data,
  id: state.id
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
  PostPassword: (password, id) => dispatch(PostPassword(password, id)),
  GetPassword: id => dispatch(GetPassword(id)),
  getEmail: id => dispatch(getEmail(id)),
  getPassword: id => dispatch(getPassword(id)),
  PremiumPost: id => dispatch(PremiumPost(id)),
  handleLoginId: (id) => dispatch(handleLoginId(id)),
  postFeedback: (email, confirmemail, password, name, day, month, year, sex) =>
    dispatch(
      postFeedback(email, confirmemail, password, name, day, month, year, sex)
    ),
  postFacebookLogin: (email, image, name) =>
    dispatch(postFacebookLogin(email, image, name))
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    // const HomePage=()=>{
    //     return(
    //       <Home />
    //     )

    // }

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
              ///////////
              ///////////for change password
              PostPassword={this.props.PostPassword}
              GetPassword={this.props.GetPassword}
              //////////
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
