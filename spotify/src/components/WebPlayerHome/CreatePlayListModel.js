import React, { Component} from "react";

import { Modal,ModalBody,Button, Row, Col} from 'reactstrap'; 

import "./CreatePlaylist.css";

/**
 * the modal that appears when the user clicked the library page and he is not signed in
 */
class CreatePlayList extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
            inputValue:null,
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    toggleModalNew(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        
    }
    handleSubmit() {
        alert(this.state.inputValue);
        this.toggleModal();

    }
    render(){
        return(
          <div className="">     
            <Button outline onClick={this.toggleModal}
                color="primary" name="login" id="login" ><span className="fa fa-sign-in fa-lg"></span> Login</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModalNew} className="">
                <ModalBody className="createPlayLsitBody">
                    <Row>
                        <Col md={12} xs={12} sm={12}>
                                <Row>
                                    <Col md={{ size: 6, offset: 5 }} xs={{ size: 6, offset: 3 }} sm={{ size: 6, offset: 3 }}>
                                        <Button className="exitButton_CP" onClick={()=>this.toggleModalNew()}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <title>Close</title>
                                            <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                        </svg>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                        <h1>Create new playlist</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="inputField_CP" md={12} xs={12} sm={12}>
                                        <div className="inputBox_CP">
                                                <Row>
                                                    <Col md={{size:10, offset:2}} xs={12} sm={12} >
                                                    <div className="contentSpacing_CP">
                                                        <h4 className="inputBox-label_CP">Playlist Name</h4>
                                                        <input type="text" className="inputBox-input_CP" placeholder="New Playlist" onChange={this.handleChange}></input>                                          
                                                    </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{size:7,offset:5}} xs={12} sm={12} className="create_Cancel_CP">
                                            <button class="CancelButton_CP" type="button" onClick={()=>this.toggleModalNew()}>CANCEL</button>
                                            <button  class="CreateButton_CP" type="button" onClick={()=>this.handleSubmit()}>CREATE</button>
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

export default CreatePlayList;