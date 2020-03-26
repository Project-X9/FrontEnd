import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link, Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import IdObj from "../../Global";
const validUserName = val =>
  /^[a-zA-Z0-9_.-]*$/.test(val) ||
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = val => val && val.length;
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSuccessful: null,
      loginId: null,
      ifExist: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleId = this.handleId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handleuUserName = this.handleuUserName.bind(this);
  }
  handlePassword = () => {
    let temp;
    this.props.data.data.map(data => {
      if (data.id === this.state.loginId) {
        temp = data.password;
      }
    });
    return temp;
  };
  handleUser = () => {
    let temp;
    let temp2;
    this.props.data.data.map(data => {
      if (data.id === this.state.loginId) {
        temp = data;
      }
    });
    if (temp) {
      temp2 = (({ id, name, email, day, month, year }) => ({
        id,
        name,
        email,
        day,
        month,
        year
      }))(temp);
      return temp2;
    } else return null;
  };
  setUser = user => {
    IdObj.Id = user.id;
    IdObj.name = user.name;
    IdObj.email = user.email;
    IdObj.year = user.year;
    IdObj.month = user.month;
    IdObj.day = user.day;
  };
  handleLogin = values => {
    this.props.resetSignInForm();
    let userId = this.handleId(values.email);
    let userEmail;
    let userPassword;
    let user;
    let userName;
    this.setState(
      {
        loginId: userId
      },
      () => {
        userEmail = this.handleEmail();
        userName = this.handleuUserName();
        userPassword = this.handlePassword();
        user = this.handleUser();
        if (userEmail === values.email || userName === values.email) {
          if (userPassword === values.password) {
            this.setState({
              isSuccessful: true
            });
            this.setUser(user);
          } else this.setState({ isSuccessful: false, loginId: null });
        } else this.setState({ isSuccessful: false });
      }
    );
  };
  handleId = email => {
    let temp;
    this.props.data.data.map(data => {
      if (data.email === email || data.name === email) {
        temp = data.id;
      }
    });
    return temp;
  };
  handleEmail = () => {
    let temp;
    this.props.data.data.map(data => {
      if (data.id === this.state.loginId) {
        temp = data.email;
      }
    });
    return temp;
  };
  handleuUserName = () => {
    let temp;
    this.props.data.data.map(data => {
      if (data.id === this.state.loginId) {
        temp = data.name;
      }
    });
    return temp;
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  responseFacebook(response) {
    if (response.status !== "unknown") {
      this.props.resetSignInForm();
      let userId = this.handleId(response.email);
      this.setState({ loginId: userId }, () => {
        if (userId === null)
          this.setState({ ifExist: false, isSuccessful: null });
        else this.setState({ ifExist: true, isSuccessful: true });
      });
    }
  }

  render() {
    let redirect = null;
    if (this.state.isSuccessful === true) {
      redirect = <Redirect to="/accountoverview"></Redirect>;
    }
    if (this.state.ifExist === false) {
      redirect = <Redirect to="/signup"></Redirect>;
    }
    return (
      <div className="container signin">
        {" "}
        {redirect}
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
            {this.state.isSuccessful === false ? (
              <h5 id="invalid">Invalid Username/Email or Password</h5>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className="row signup-field">
          <div>
            <Form model="login" onSubmit={values => this.handleLogin(values)}>
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
                      validUserName
                    }}
                  />
                  <Row className="ml-2">
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Enter your Email address ,",
                        validEmail: "Invalid Email Address",
                        successfulLogin: "Invalid Email or Password"
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
                    onChange={this.handleChange}
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
                          required: "Enter your password to continue",
                          successfulLogin: "Invalid Email or Password"
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
