import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link, Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = val => val && val.length;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSuccessful: false
    };
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  handleLogin = values => {
    console.log(values);
    this.props.resetSignInForm();
    this.setState({ email: values.email });
    this.setState({ password: values.password });
    console.log(this.state);
    this.props.resetSignInForm();
    const Password = this.props.GetPassword(9);
    const Email = this.props.getEmail(9);
    if (this.state.email === Email) {
      if (this.state.password === Password) {
        this.setState({
          isSuccessful: true
        });
      }
    }
  };
  handleSuccessfulAuth = event => {
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  responseFacebook(response) {
    if (response.status !== "unknown") {
      this.props.resetFeedbackForm();
      this.props.postFacebookLogin(
        response.email,
        response.image,
        response.name
      );
    }
  }

  render() {
    let redirect = null;
    if (this.state.isSuccessful) {
      redirect = <Redirect to="/accountoverview"></Redirect>;
    }
    const { email, password, isSuccessful } = this.state;
    return (
      <div className="container signin">
        <div className="row somepadding">
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <Link to="/home">
              <img
                src="assets/images/logo2.png"
                height="70"
                width="230"
                alt="spotify"
              />
            </Link>
            <hr />
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <h4>To continue, log in to Spotify</h4>
            <FacebookLogin
              cssClass="facebookButton"
              appId="723287988413715"
              autoLoad={true}
              fields="name,email,picture,birthday"
              callback={this.responseFacebook}
            />
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <strong className="line-thru">OR</strong>
          </Col>
          <div className="col-12">
            <h3>Sign In with your email address or username</h3>
          </div>
        </div>
        <div className="row signup-field">
          <div>
            <Form
              model="feedback"
              onSubmit={values => this.handleLogin(values)}>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    onChange={this.handleChange}
                    className="form-control"
                    model=".email"
                    placeholder="Email or Username"
                    id="email"
                    name="email"
                    validators={{
                      required,
                      validEmail
                    }}
                  />
                  <Row className="ml-2">
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Enter your Email address ,",
                        validEmail: " Invalid Email Address"
                      }}
                    />
                  </Row>
                </Col>
              </Row>
              <Row className="form-group"></Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    type="password"
                    className="form-control"
                    onChange={this.onChange}
                    model=".password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    validators={{
                      required
                    }}
                  />
                  <Row className="ml-2">
                    <Col xs={12}>
                      <Errors
                        className="text-danger"
                        model=".password"
                        show="touched"
                        messages={{
                          required: "Enter your password to continue, "
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Button
                    model="submit"
                    className="signinbtn"
                    id="signinbutton">
                    Sign In
                  </Button>
                  <div id="forgot-password" name="forogot-password">
                    <Link id="forgot-password-link" to="/changePassword">
                      Forgot your Password?
                    </Link>
                  </div>
                  <p id="text-sign-in">Don't Have an Account?</p>
                  <Button id="signupbutton" name="signupbutton">
                    <Link to="/signup" id="signuplink" name="signuplink">
                      SIGN UP FOR SPOTIFY
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
