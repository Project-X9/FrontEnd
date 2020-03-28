import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Label } from "reactstrap";
import IdObj from "../../Global";
const required = val => val && val.length;
const minLength = len => val => val && val.length >= len;
const confPass = val => val2 => val === val2;

class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Password: "",
      CurrentPassword: "",
      ConfirmPassword: "",
      tempId: this.props.id.id
    };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }
  handleData = () => {
    let temp;
    this.props.data.data.map(data => {
      if (data.id === this.state.tempId) {
        temp = data.password;
      }
    });
    return temp;
  };

  handleChangePassword = values => {
    const temp = this.handleData();
    if (temp === values.Currentpassword) {
      const post = values.password;
      this.props.PostPassword(post, this.state.tempId);
    } else alert("Password is Incorrect");
  };

  handleConfirmPassword = event => {
    this.setState({
      Password: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="headerGreen">Change Your Password</h1>
        <hr />
        <Form
          model="feedback"
          onSubmit={values => this.handleChangePassword(values)}>
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Label>Current Password</Label>
              <Control.text
                type="password"
                className="form-control"
                model=".Currentpassword"
                placeholder="Password"
                id="Currentpassword"
                name="Currentpassword"
                validators={{
                  required
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Label>New Password</Label>
              <Control.text
                onChange={this.handleConfirmPassword}
                type="password"
                className="form-control"
                model=".password"
                placeholder=" New Password"
                id="password"
                name="password"
                validators={{
                  required,
                  minLength: minLength(7)
                }}
              />
              <Row className="ml-2">
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: "Enter your password to continue, ",
                    minLength: "Your password is too short"
                  }}
                />
              </Row>
            </Col>
          </Row>{" "}
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Label>Confirm Password</Label>
              <Control.text
                type="password"
                className="form-control"
                model=".confirmpassword"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                validators={{
                  required,
                  confPass: confPass(this.state.Password)
                }}
              />
              <Row className="ml-2">
                <Errors
                  className="text-danger"
                  model=".confirmpassword"
                  show="touched"
                  messages={{
                    confPass: "Password does not match"
                  }}
                />
              </Row>
            </Col>
          </Row>
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Button model="submit" className="signupbtn">
                Change Password
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default ChangePass;
