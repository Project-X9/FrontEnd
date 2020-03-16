import React, { Component } from 'react';
import {
  Col, Button, Row,
} from 'reactstrap';
import {
  Control, Form, Errors,
} from 'react-redux-form';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validDay = (val) => /^([1-9]|0[1-9]|[12]\d|3[01])$/i.test(val);
const validYear = (val) => /^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/i.test(val); //1812 - 3048
const confEmail=(val) => (val2) => val === val2;
const typeSelected=(val) => (val === 'male' || val ==='female') ;
const monthSelected=(val) => (val !== "null");
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      selectedOption: false
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);

  }
  
  handleSubmit(values) {
    // const { email, confirmEmail } = this.state;
      // console.log(`Current State :${JSON.stringify(values)}`);
      this.props.resetFeedbackForm();
      this.props.postFeedback(values.email, values.confirmemail, values.password, values.name, values.day, values.month,
        values.year, values.sex);
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };
  responseFacebook (response) {
    if (response.status !== "unknown")
    {
      this.props.resetFeedbackForm();
      this.props.postFacebookLogin(response.email,response.image,response.name); 
    }
  }
  
  render() {
    return (
      <div className="container signup">
        <div className="row somepadding">
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <Link to='/home'><img src="assets/images/Spotify_Logo_RGB_Green_(2).jpg" height="59" width="172" alt="spotify"/></Link>
            <hr />
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
          <FacebookLogin
              cssClass="facebookButton"
              appId="723287988413715"
              autoLoad={true}
              fields="name,email,picture,birthday"
              callback={this.responseFacebook}/>
            {/* <a className="btn facebookButton"><b className="textcolour">SIGN UP WITH FACEBOOK</b></a> */}
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <strong className="line-thru">or</strong>
          </Col>
          <div className="col-12">
            <h3>Sign up with your email address </h3>
          </div>
        </div>
        <div className="row signup-field">
          <div>
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    onChange={this.handleEmailChange}
                    className="form-control"
                    model=".email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    validators={{
                      required, validEmail
                    }}
                  />
                  <Row className='ml-2'>
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: 'Enter your Email address ,',
                      validEmail: ' Invalid Email Address',
                    }}
                  />
                  </Row>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    className="form-control"
                    model=".confirmemail"
                    placeholder="Confirm Email"
                    id="confirmemail"
                    name="confirmemail"
                    validators={{
                      required, validEmail,confEmail : confEmail(this.state.email)
                    }}
                  />
                  <Row className='ml-2'>
                  <Errors
                    className="text-danger"
                    model=".confirmemail"
                    show="touched"
                    messages={{
                      // required: 'Required',
                      // validEmail: 'Invalid Email Address',
                      confEmail:'Email does not match'
                    }}
                  /></Row>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    type="passwrord"
                    className="form-control"
                    model=".password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    validators={{
                      required, minLength: minLength(7)
                    }}
                  />
                  <Row className='ml-2'>                  
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: 'Enter your password to continue, ',
                      minLength: ' Your password is too short',
                    }}
                  />
                  </Row>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    className="form-control"
                    model=".name"
                    placeholder="What should we call you ?"
                    id="name"
                    name="name"
                    validators={{
                      required
                    }}
                  />
                  <Row className='ml-2'>
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: 'What should we call you ?',
                    }}
                  /></Row>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={4} md={{ size: 2, offset: 3 }}>
                  <Control.text
                    className="form-control"
                    model=".day"
                    placeholder="Day"
                    id="day"
                    name="day"
                    validators={{
                      required, validDay
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".day"
                    show="touched"
                    messages={{
                      validDay: 'Enter a valid day of the month'
                    }}
                  />
                </Col>
                <Col xs={4} md={2}>
                  <Control.select className="form-control" model=".month" name="month"  validators={{
                      monthSelected,required
                    }}>
                    <option value='null'>Month</option>
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
                  <Errors
                    className="text-danger"
                    model=".month"
                    show="touched"
                    messages={{
                      required:"Required",
                      monthSelected: 'Enter the month'
                    }}
                  />
                </Col>
                <Col xs={4} md={2}>
                  <Control.text
                    className="form-control"
                    model=".year"
                    placeholder="Year"
                    id="year"
                    name="year"
                    validators={{
                      required, validYear
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".year"
                    show="touched"
                    messages={{
                      required: 'Enter a year to continue',
                      validYear: ' Enter a valid year'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={8}>
                  <div>
                    <label className="p-3">
                      <Control.radio model=".sex" value="male" id="sex" name="sex" 
                       validators={{
                          typeSelected 
                      }}/>
                      {' '}
                      Male
                    </label>
                    <label className="p-3">
                      <Control.radio model=".sex" value="female" id="sex" name="sex"           
                      validators={{
                        typeSelected 
                          }} />
                      {' '}
                      Female
                    </label>
                    <Errors
                    className="text-danger"
                    model=".sex"
                    show="touched"
                    messages={{
                      typeSelected: 'Enter your gender'
                    }}
                  />
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
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
