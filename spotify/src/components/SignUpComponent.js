import React, { Component } from 'react';
import {
  Col, Label, Button, Row,
} from 'reactstrap';
import {
  Control, Form, Errors, actions,
} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validDay = (val) => /^(0[1-9]|[12]\d|3[01])$/i.test(val);
const validYear = (val) => /\d{4}$/i.test(val);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(`Current State :${JSON.stringify(values)}`);
    // alert("Current State :" + JSON.stringify(values));
    this.props.resetFeedbackForm();
    this.props.postFeedback(values.email, values.confirmemail, values.password, values.name, values.day, values.month,
      values.year, values.sex);
  }


  render() {
    return (
      <div className="container signup">
        <div className="row somepadding">
          <Col md={{ size: 8, offset: 2 }}>

            <img src="assets/images/Spotify_Logo_RGB_Green_(2).jpg" height="59" width="172" alt="spotify" />
            <hr />
          </Col>
          <Col md={{ size: 8, offset: 2 }}>
            <a className="btn facebookButton"><b className="textcolour">SIGN UP WITH FACEBOOK</b></a>
          </Col>
          <Col md={{ size: 8, offset: 2 }}>
            <strong className="line-thru">or</strong>
          </Col>
          <div className="col-12">
            <h3>Sign up with your email adress </h3>
          </div>
        </div>
        <div className="row signup-field">
          <div>
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                {/* <Label htmlFor="email" md={2} ></Label> */}
                <Col md={{ size: 8, offset: 2 }}>
                  <Control.text
                    className="form-control"
                    model=".email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    validators={{
                      required, validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: 'Required',
                      validEmail: 'Invalid Email Address',

                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 8, offset: 2 }}>
                  <Control.text
                    className="form-control"
                    model=".confirmemail"
                    placeholder="Confirm Email"
                    id="confirmemail"
                    name="confirmemail"
                    validators={{
                      required, validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".confirmemail"
                    show="touched"
                    messages={{
                      required: 'Required',
                      validEmail: 'Invalid Email Address',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 8, offset: 2 }}>
                  <Control.text
                    type="passwrord"
                    className="form-control"
                    model=".password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    validators={{
                      required, minLength: minLength(7),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: 'Enter your password to continue',
                      minLength: 'Your password is too short',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 8, offset: 2 }}>
                  <Control.text
                    className="form-control"
                    model=".name"
                    placeholder="What should we call you ?"
                    id="name"
                    name="name"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: 'What should we call you ?',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 2, offset: 2 }}>
                  <Control.text
                    className="form-control"
                    model=".day"
                    placeholder="Day"
                    id="day"
                    name="day"
                    validators={{
                      required, validDay,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".day"
                    show="touched"
                    messages={{
                      required: 'Enter a valid day of the month',
                      validDay: 'Enter a valid day of the month',
                    }}
                  />
                </Col>
                <Col md={4}>
                  <Control.select className="form-control" model=".month" name="month">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Control.select>
                </Col>
                <Col md={2}>
                  <Control.text
                    className="form-control"
                    model=".year"
                    placeholder="Year"
                    id="year"
                    name="year"
                    validators={{
                      required, validYear,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".year"
                    show="touched"
                    messages={{
                      required: 'Enter a valid year',
                      validYear: ' Enter a valid year',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={6}>
                  <div>
                    <label className="p-3">
                      <Control.radio model=".sex" value="male" id="sex" name="sex" />
                      {' '}
                      Male
                    </label>
                    <label className="p-3">
                      <Control.radio model=".sex" value="female" id="sex" name="sex" />
                      {' '}
                      Female
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 8, offset: 2 }}>
                  <Button model="submit" className="signupbtn">SignUp</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
