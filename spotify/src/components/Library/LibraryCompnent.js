import React, { Component ,useState} from "react";

import { 
    Form,FormGroup,Modal,ModalBody,ModalHeader,Button,Label,Input,Jumbotron, Row, Col} from 'reactstrap'; 
import {NavLink} from "react-router-dom";
import { Image } from 'react-bootstrap';
import "./Library.css";

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
          <div>     
            <Button outline onClick={this.toggleModal}
                color="primary" name="login" id="login" ><span className="fa fa-sign-in fa-lg"></span> Login</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="ModalBackGround" 
                    size="lg">
                <ModalBody className="p-0 modalbody">
                    <Row >
                        <Col xs={6} md={6} className="leftPart">
                            <Row>
                            <h2 className="theHeader">Get the most out of Spotify with a free account</h2>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                <ol>
                                    <li>
                                        <svg className= "pl-28" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                        <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                        </svg>
                                        No credit card, ever
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                        <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                        </svg>
                                        Get unlimited podcasts
                                        </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                        <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                    </svg>
                                    Play your favorite music, with ads
                                    </li>
                                </ol>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={6}>
                            <Row>
                            <Col xs={12}>    
                            <div className="righPart">
                                <div className="innerRight">
                                    <Button className="signupfree">Sign up free</Button>
                                    <div className="seperator"></div>
                                    <div className="alreadyhaveanaccount">Already have an account?</div>
                                    <Button className="login">Log in</Button>
                                </div>
                            </div>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </ModalBody> 
            </Modal>
        </div>      
    );
    

    }
}

export default Library;
