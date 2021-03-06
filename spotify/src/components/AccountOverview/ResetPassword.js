/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button,Modal, ModalBody, Label } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import emailjs from 'emailjs-com';
const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
/**
 * Class for the ResetPassword component which allows a user who has signed in but forgot his password to change it
 */
class ResetPassword extends Component {
   /**
   *
   * @param {Object} props
   * @param props.isModalOpen Essentially used to change the state of the modal
   * @param props.ControlModal Essentially controls the state of the modal
   * @param props.PostPassword Essentially used to post the new password
   * @param props.data_be Essentially used to access email and id
   * @param props.ForSignUpVerification Essentially used in the email
   * @param props.signupdata Essentially used for posting the new password of a specific user
   * @param props.resetpassword Essentially needed to apply the changes made
   */
  constructor(props) {
    super(props);
    this.state = {
        inputValue:null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitModal=this.handleSubmitModal.bind(this);
    this.handleChange=this.handleChange.bind(this);
   
  }
  componentDidMount(){
    this.props.resetpassword();
  }

  /**
   * Used for when the user enters text in the code textbox inside the modal
   */
  handleChange(e){
    this.setState({
        inputValue:e.target.value
    })
}

 /**
   * Used to check if the user entered the code correctly, if yes, then it will reset the password
   */
handleSubmitModal() {
    
    if(this.state.inputValue == this.props.signupdata.signupdata.randomId)
    {
      this.props.PostPassword(this.props.signupdata.signupdata.password, this.props.data_be.data_be._id);
      this.props.ControlModal(false)
      this.props.resetpassword();
      //redirect
    }
    else{
      alert("Wrong Code")
      //redirect
    }

}   

/**
 * Used to make a random password and send it to the user via his email
 */
  handleSubmit(values) {
    if (values.password !== "" ) {
        var min = 1;
        var max = 100;
        var rand =  min + (Math.random() * (max-min));
        rand=Math.ceil(rand);
        this.props.ControlModal(true);
        var service_id = "gmail";
        var template_id = "template_mEf57s4f";
        var UserID ="user_jUaXMo4Oo1nGtzqQSfk4k"
        emailjs.init("user_jUaXMo4Oo1nGtzqQSfk4k");
        var NewObject={
            password:values.password,     
            randomId:rand 
          }
        this.props.ForSignUpVerification(NewObject);
        var template_params={
          message_html: rand,
          user_email: this.props.data_be.data_be.email
      }
        emailjs.send(service_id, template_id,template_params)
        .then(function(){ 
           alert("Sent!");
         }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        });

      }

      
     
    }

  render() {
    return (
        <div>
        <div className="row">
          <h1 className="BigHeader">Reset Your Password</h1>
        </div>

       
        <Form
          model="resetpassword"
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <div className="row form-group">
            <div className="col">
              <Label className="ResetPasswordLabel">Reset Password</Label>
              <Control.text
                type="text"
                className="form-control"
                model=".password"
                placeholder="Enter New Password"
                id="password"
                name="password"
                validators={{
                  required,
                  minLength: minLength(7),
                }}
              />
              <div className="row ml-2">
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: "Please enter the new password, ",
                    minLength: "Your new password is too short.",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <Button type="submit" className="ResetPasswordButton" >
                Reset Password
              </Button>
            </div>
          </div>
        </Form>
      
        <Modal isOpen={this.props.isModalOpen.isModalOpen} >
                <ModalBody className="createPlayLsitBody">
                    <div className="row">
                        <div className="col">
                                <div className="row">
                                    <div className="col">
                                      <div className="ResetPasswordXButtonInModal">
                                        <Button className="exitButton_CP" onClick={()=>this.props.ControlModal(false)}>
                                          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                              <title>Close</title>
                                              <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col Create_new_playlist">
                                        <h1>Enter The Confirmation Code Sent To Your Email To Change Password</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col inputField_CP">
                                        <div>
                                            <div className="row">
                                                <div className="col ResetPasswordInsideTextboxInModal">
                                                  <div className="contentSpacing_CP">
                                                      <input type="text" className="inputBox-input_CP ResetPasswordInsideTextboxInModalInside" placeholder="Enter The Code" onChange={this.handleChange}></input>                                          
                                                  </div>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col create_Cancel_CP ResetPasswordLowerButtonsInModal">
                                            <button class="CancelButton_CP" type="button" onClick={()=>this.props.ControlModal(false)}>CANCEL</button>
                                            <button  class="CreateButton_CP" type="button" onClick={()=>this.handleSubmitModal()}>CREATE</button>
                                    </div>
                                </div>
                               
                        </div>
                    </div>
                </ModalBody> 
            
            </Modal>
    </div>
    );
  }
}
export default ResetPassword;
