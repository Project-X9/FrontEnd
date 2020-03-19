import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import Home from "./Homepage/HomeComponent";
import SignUp from "./SignUp/SignUpComponent";
import PremiumComponent from "./PremiumPage/PremuimComponent";
import ChangePass from "./ChangePassword/ChangePassword";
import AccountOverview from "./AccountOverview/AccountOverviewComponent";
import SignIn from "./SignIn/SignInComponent";
import {
  postFeedback,
  postFacebookLogin,
  PremiumPost,
  GetPassword,
  PostPassword,
  fetchUserData
} from '../redux/ActionCreators';

const mapStateToProps = (state) => ({
  data:state.data,
  id:state.id
});
const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  resetSignInForm: () => {
    dispatch(actions.reset("sign-in"));
  },
  fetchUserData: () => {
    dispatch(fetchUserData());
  },
  PostPassword: (password, id) => dispatch(PostPassword(password, id)),
  GetPassword: id => dispatch(GetPassword(id)),
  PremiumPost: password => dispatch(PremiumPost(password)),
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
              />
            )}
          />
          <Route
            exact
            path="/changePassword"
            component={() => (
              <ChangePass
                PostPassword={this.props.PostPassword}
                GetPassword={this.props.GetPassword}
              />
            )}
          />
          <Route
            exact
            path="/premium"
            component={() => (
              <PremiumComponent PremiumPost={this.props.PremiumPost} />
            )}
          />
          <Route
            exact
            path="/accountoverview"
            component={() => (
              <AccountOverview
                fetchUserData={this.props.fetchUserData}
                data={this.props.data}
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
