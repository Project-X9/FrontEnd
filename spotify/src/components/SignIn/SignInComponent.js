import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const confEmail = val => val2 => val === val2;
const required = val => val && val.length;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  handleSubmit(values) {
    // const { email, confirmEmail } = this.state;
    // console.log(`Current State :${JSON.stringify(values)}`);
    this.props.resetSignInForm();
  }
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
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
    return (
      <div className="container signin">
        <div className="row somepadding">
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <Link to="/home">
              <img
                src="assets/images/logo.png"
                height="59"
                width="172"
                alt="spotify"
              />
            </Link>
            <hr />
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <FacebookLogin
              cssClass="facebookButton"
              appId="723287988413715"
              autoLoad={true}
              fields="name,email,picture,birthday"
              callback={this.responseFacebook}
            />
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <strong className="line-thru">or</strong>
          </Col>
          <div className="col-12">
            <h3>Sign In with your email address or username</h3>
          </div>
        </div>
        <div className="row signup-field">
          <div>
            <Form model="sign-in">
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    onChange={this.handleEmailChange}
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
                  <div id="forgot-password">
                    <Link id="forgot-password-link" to="/home">
                      Forgot your Password?
                    </Link>
                  </div>
                  <p id="text-sign-in">Don't Have an Account?</p>
                  <Button id="signupbutton" name="signupbutton">
                    <Link to="/signup" id="signuplink">
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
