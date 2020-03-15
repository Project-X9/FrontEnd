import React, { Component } from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import SignUp from './SignUpComponent';
import { postFeedback, postFacebookLogin } from '../redux/ActionCreators';


const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')); },
  postFeedback: (email, confirmemail, password, name, day, month,
    year, sex) => dispatch(postFeedback(email, confirmemail, password, name, day, month,
    year, sex)),
  postFacebookLogin: (email, image, name) => dispatch(postFacebookLogin(email, image, name)),

});

class Main extends Component {
  componentDidMount() {}

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
          <Route exact path="/signup" component={() => <SignUp resetFeedbackForm={this.props.resetFeedbackForm} postFacebookLogin={this.props.postFacebookLogin} postFeedback={this.props.postFeedback} />} />
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
