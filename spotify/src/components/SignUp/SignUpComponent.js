import React, { Component } from 'react';
import {
  Col, Button, Row, Label, NavLink, ModalBody,Modal
} from 'reactstrap';
import {
  Control, Form, Errors,
} from 'react-redux-form';
import { Link, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import emailjs from 'emailjs-com';

const required = val => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = len => val => val && val.length >= len;
// const isNumber = (val) => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validDay = val => /^([1-9]|0[1-9]|[12]\d|3[01])$/i.test(val);
const validYear = val =>
  /^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/i.test(val); //1812 - 3048
const confEmail = val => val2 => val === val2;
const typeSelected = val => val === "male" || val === "female";
const monthSelected = val => val !== "null";



/**
 * Sign Up Page
 */
class SignUp extends Component {
  /**
   * 
   * @param {Object} props 
   * @param props.postFeedback
   * @param props.resetFeedbackForm
   */
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      selectedOption: false,
      confEmail: "",
      submitted: null,
      existBefore: null,
      FaceBookId: "",
      SignUpId: "",
      submittedFromFacebook: false,
      submittedFromSignUp: false,
      // length:this.props.data.data.length,
      Succeded: null,
      inputValue:null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);

    this.handleSubmitModal=this.handleSubmitModal.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }
  
handleChange(e){
    this.setState({
        inputValue:e.target.value
    })
}

handleSubmitModal() {
    
    if(this.state.inputValue == this.props.signupdata.signupdata.randomId)
    {
      alert("this.state.password")
      this.props.ControlModal(false)
      this.props.resetFeedbackForm();
      this.state.Succeded = this.props.postFeedback(this.props.signupdata.signupdata); 
    }
    else{
      alert("Wrong Code")
    }

}
  /**
   * Here i check the response from the data base if it already exist the userstate will be 
   * equal to false else it will go the sign in page
   */
  componentDidMount() {
    // this.props.makeSignupRedirectable();
    // this.props.resetFeedbackForm();
    if (this.props.userstate.userstate === true) {
      this.setState({
        submitted: true,
        submittedFromSignUp: true,
        alreadySignedIn: false
      })
    }
    else if (this.props.userstate.userstate === false) {
      this.setState({
        existBefore: true
      })
    }
    if (this.props.isSignedIn.isSignedIn === true) {
      this.setState({
        alreadySignedIn: true
      })
    }
    // this.props.ControlModal(false);
  }

  /**
   * This function takes the data fromthe input fields and assure that the all
   * the data is not empty (don't make the validations) and if all the data required is
   * avaliable it gives the data to the function (PostFeedback) to post the data to the 
   * server and resets the input fields using resetFeedBack form and also state the submitted 
   * state to true to be redirected to the next page.
   * @param {Object} values 
   */
  handleSubmit(values) {
    this.props.resetFeedbackForm();
    if (
      values.email !== "" &&
      values.confirmemail !== "" &&
      values.password !== "" &&
      values.name !== "" &&
      values.day !== "" &&
      values.month !== "" &&
      values.year !== "" &&
      values.sex !== ""
    ) {
      var min = 1;
        var max = 100;
        var rand =  min + (Math.random() * (max-min));
        rand=Math.ceil(rand);
        alert(rand);
        var NewObject={
          email:values.email, 
          confirmemail:values.confirmemail,
          password:values.password, 
          name:values.name,
          day:values.day ,
          month:values.month, 
          year:values.year ,
          sex:values.sex,
          randomId:rand 
        }
        this.props.ControlModal(true);
        this.props.ForSignUpVerification(NewObject);
        var service_id = "ahahmed202025_gmail_com";
        var template_id = "template_6Gzc6XQv";
        var UserID ="user_ZGAt1STrmZuTHMLbdVnkr"
        emailjs.init("user_ZGAt1STrmZuTHMLbdVnkr");
        
        var template_params={
          message_html: rand,
          user_email: values.email
      }
        emailjs.send(service_id, template_id,template_params)
        .then(function(){ 
           alert("Sent!");
         }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        });

      }
     
    }
    // else {
    //   this.props.resetFeedbackForm();
    // }

  
  /**
   * Function to test the excistance of the email
   * @param {String} email
   */
  handleExcistance = (email) => {
    let temp = false;
    this.props.data.data.map(data => {
      if (data.email === email) {
        temp = true;
      }
    });
    return temp;
  };
  /**
   * This function set the this.state.email with the value the user fill in the input 
   * field of email to be able to check the email in the confirm email 
   * @param {Event} event
   */
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  /**
   * This function recieves the responce of the facebook login and uses the same functions i used in handleSubmit to
   * post the users data and set Submitted to true to be redirected
   * @param {Response} response 
   */
  responseFacebook(response) {
    if (response.status !== "unknown") {
      let exist = this.handleExcistance(response.email);
      if (exist) {
        var id = this.handleIdIfExist(response.email)
        // this.props.handleLoginId(id);
        // this.state.tempId=id;  
        this.setState({
          submitted: true,
          FaceBookId: id,
          submittedFromFacebook: true
        });
        this.props.resetFeedbackForm();
      }
      else if (!exist) {
        this.setState({
          submitted: true,
          FaceBookId: this.props.data.data.length + 1,
          submittedFromFacebook: true
        }, () => {
          this.props.resetFeedbackForm()
          this.props.postFacebookLogin(
            response.email,
            response.image,
            response.name
          )
        }
        );
        this.props.resetFeedbackForm();

      }
    }
  }
  
  /**
   * Responsible for showing everything on the Sign Up page
   * @returns Components that will be displayed on the page
   */
  render() {
    let redirected = null;
    let redirectIfSignedIn = null;
    if (this.state.submitted && this.state.submittedFromFacebook) {
      this.props.handleLoginId(this.state.FaceBookId);
      redirected = <Redirect to="/signin"></Redirect>
    }
    else if (this.state.submitted && this.state.submittedFromSignUp) {
      this.setState({
        submitted: false
      })
      this.props.makeSignupRedirectable();
      this.props.handleLoginId(this.state.SignUpId);
      redirected = <Redirect to="/signin"></Redirect>

    }
    if (this.state.alreadySignedIn) {
      redirectIfSignedIn = <Redirect to="/account/overview"></Redirect>
    }
    return (
      <div className="container signup">
        <Modal isOpen={this.props.isModalOpen.isModalOpen} className="">
                <ModalBody className="createPlayLsitBody">
                    <Row>
                        <Col md={12} xs={12} sm={12}>
                                <Row>
                                    <Col md={{ size: 6, offset: 5 }} xs={{ size: 6, offset: 3 }} sm={{ size: 6, offset: 3 }}>
                                        <Button className="exitButton_CP" onClick={()=>this.props.ControlModal(false)}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <title>Close</title>
                                            <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                        </svg>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                        <h1>Enter The Code Send To Your Email</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="inputField_CP" md={12} xs={12} sm={12}>
                                        <div className="inputBox_CP">
                                                <Row>
                                                    <Col md={{size:10, offset:2}} xs={12} sm={12} >
                                                    <div className="contentSpacing_CP">
                                                        <input type="text" className="inputBox-input_CP" placeholder="Code" onChange={this.handleChange}></input>                                          
                                                    </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{size:7,offset:5}} xs={12} sm={12} className="create_Cancel_CP">
                                            <button class="CancelButton_CP" type="button" onClick={()=>this.props.ControlModal(false)}>CANCEL</button>
                                            <button  class="CreateButton_CP" type="button" onClick={()=>this.handleSubmitModal()}>CREATE</button>
                                    </Col>
                                </Row>
                               
                        </Col>
                    </Row>
                </ModalBody> 
            
            </Modal>
        {redirected}
        {redirectIfSignedIn}
        <div className="row somepadding">
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <Link to="/home">
              <img
                src="https://www.adweek.com/wp-content/uploads/2019/11/Spotify-Logo-Black.png"
                height="90"
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
              autoLoad={false}
              fields="name,email,picture,birthday"
              callback={this.responseFacebook}
            />
            {/* <a className="btn facebookButton"><b className="textcolour">SIGN UP WITH FACEBOOK</b></a> */}
          </Col>
          <Col xs={12} md={{ size: 6, offset: 3 }}>
            <strong className="line-thru">or</strong>
          </Col>
          <div className="col-12">
            <h3>Sign up with your email address </h3>
            {this.state.existBefore === true ? (
              <h5 id="invalid">This email already exist</h5>
            ) : (
                <span></span>
              )}
          </div>
        </div>
        <div className="row signup-field">
          <div>
            <Form
              model="feedback"
              onSubmit={values => this.handleSubmit(values)}
              id="myform"
            >
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
                      required,
                      validEmail
                    }}
                  />
                  <Row className="ml-2">
                    <Errors
                      className="text-danger error"
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
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Control.text
                    onChange={this.handleConfEmailChange}
                    className="form-control"
                    model=".confirmemail"
                    placeholder="Confirm Email"
                    id="confirmemail"
                    name="confirmemail"
                    validators={{
                      required,
                      validEmail,
                      confEmail: confEmail(this.state.email)
                    }}
                  />
                  <Row className="ml-2">
                    <Errors
                      className="text-danger error"
                      model=".confirmemail"
                      show="touched"
                      messages={{
                        // required: 'Required',
                        // validEmail: 'Invalid Email Address',
                        confEmail: "Email does not match"
                      }}
                    />
                  </Row>
                </Col>
              </Row>
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
                      required,
                      minLength: minLength(7)
                    }}
                  />
                  <Row className="ml-2">
                    <Errors
                      className="text-danger error"
                      model=".password"
                      show="touched"
                      messages={{
                        required: "Enter your password to continue, ",
                        minLength: " Your password is too short"
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
                  <Row className="ml-2">
                    <Errors
                      className="text-danger error"
                      model=".name"
                      show="touched"
                      messages={{
                        required: "What should we call you ?"
                      }}
                    />
                  </Row>
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
                      required,
                      validDay
                    }}
                  />
                  <Errors
                    className="text-danger error"
                    model=".day"
                    show="touched"
                    messages={{
                      validDay: "Enter a valid day of the month"
                    }}
                  />
                </Col>
                <Col xs={4} md={2}>
                  <Control.select
                    className="form-control"
                    model=".month"
                    name="month"
                    validators={{
                      monthSelected,
                      required
                    }}
                  >
                    <option value="null">Month</option>
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
                    className="text-danger error"
                    model=".month"
                    show="touched"
                    messages={{
                      required: "Required",
                      monthSelected: "Enter the month"
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
                      required,
                      validYear
                    }}
                  />
                  <Errors
                    className="text-danger error"
                    model=".year"
                    show="touched"
                    messages={{
                      required: "Enter a year to continue",
                      validYear: " Enter a valid year"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={8}>
                  <div>
                    <label className="p-3">
                      <Control.radio
                        model=".sex"
                        value="male"
                        id="sex"
                        name="sex"
                        validators={{
                          typeSelected
                        }}
                      />{" "}
                      Male
                    </label>
                    <label className="p-3">
                      <Control.radio
                        model=".sex"
                        value="female"
                        id="sex"
                        name="sex"
                        validators={{
                          typeSelected
                        }}
                      />{" "}
                      Female
                    </label>
                    <Errors
                      className="text-danger error"
                      model=".sex"
                      show="touched"
                      messages={{
                        typeSelected: "Enter your gender"
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                  <Button model="submit" className="signupbtn">
                    {/* <Button onClick={this.testbackend()} className="signupbtn"> */}
                    SignUp
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Label>Already have an account ?</Label><Link className="text-green" to="/signin"> LogIn</Link>
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
