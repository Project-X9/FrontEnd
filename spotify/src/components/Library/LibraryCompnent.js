import React, { Component, useState } from "react";

import { 
    Form,FormGroup,Modal,ModalBody,ModalHeader,Button,Label,Input,Jumbotron, Row, Col,Mo} from 'reactstrap'; 
import {Link} from "react-router-dom";

// import "./Library.css";


class Library extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        
    }
    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();

    }
    render(){
        return(
          <div className="libraryBody">     
            <Button outline onClick={this.toggleModal}
                color="primary" name="login" id="login" ><span className="fa fa-sign-in fa-lg"></span> Login</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="ModalBackGround" 
                    size="lg">
                <div className="modal-content modalcontent">        
                <ModalBody className="p-0 modalbody">
                    <div className="row flexer" >
                        <div className="col-sm-6 col-md-6 col-lg-6 leftPart ">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 ">
                                    <h2 className="theHeader">Get the most out of Spotify with a free account</h2>
                                </div>
                            </div>
                            <div className="row flexer">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <ol className="libraryol">
                                        <li className="libraryli flexer">
                                            <svg className= "librarysvg flexer" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                            <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                            </svg>
                                            No credit card, ever
                                        </li>
                                        <li className="libraryli flexer"><svg className= "librarysvg flexer" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                            <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                            </svg>
                                            Get unlimited podcasts
                                            </li>
                                        <li className="libraryli flexer">
                                        <svg className= "flexer librarysvg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                            <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                        </svg>
                                        Play your favorite music, with ads
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">   
                            <div className="righPart">
                                <div className="innerRight">
                                    <Button className="signupfree"><Link to="/signup"className="linksignup">Sign up free</Link></Button>
                                    <div className="seperator"></div>
                                    <div className="alreadyhaveanaccount">Already have an account?</div>
                                    <Button className="libraryloginbut"><Link to="/signin"className="linkLogin">Log in</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody> 
                </div>
            </Modal>
        </div>      
    );
  }
}

export default Library;