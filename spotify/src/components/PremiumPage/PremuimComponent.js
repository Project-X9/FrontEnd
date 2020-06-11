/**
 * Premium Component
 */
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownToggle,
} from "reactstrap";
import "./PremiumComponent.css";
import { NavLink, Redirect } from "react-router-dom";
import emailjs  from 'emailjs-com';
import"../WebPlayerHome/CreatePlaylist.css"
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import Label from "reactstrap/es/Label";
import Form from "react-bootstrap/Form";
class Premium extends Component {
  /**
   *
   * @param tempId this is for the ID of the user entered right now

   */
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      modal: false,
      isModalOpen: false,
      collapsed: true,
      Premium: this.props.data_be.data_be.premium,
      tempId: this.props.data_be.data_be._id,
      isPrenium: !this.props.data_be.data_be.premium,
      inputValue:''
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    this.togglemodal = this.togglemodal.bind(this);
    this.handleSubmitModal=this.handleSubmitModal.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePremium_be = this.handlePremium_be.bind(this);
    this.state.handleLogout = this.handleLogout.bind(this);
  }
  /**
   *handleSubmit   handles showing the modal and determining whether to send the mail with the generated id if the user is not premium
   * Or not send it from the beginning because he is just opening the modal to cancel his permiumship
   */
  handleSubmit() {
    if(this.state.Premium){    this.props.ControlModal(true);
    }
else{   var min = 1;
    var max = 100;
    var rand =  min + (Math.random() * (max-min));
    rand=Math.ceil(rand);
    var NewObject={
      randomId:rand
    }
    this.props.ControlModal(true);
      this.props.ForSignUpVerification(NewObject);
      var service_id = "gmail";
      var template_id = "template_mEf57s4f";
      var UserID ="user_jUaXMo4Oo1nGtzqQSfk4k"
      emailjs.init("user_jUaXMo4Oo1nGtzqQSfk4k");

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
  /**
   *handleChange  handles setting the state of the input value with
   */
  handleChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  handleSubmitModal(){
    if (this.state.Premium === true){
      this.props.PremiumPost(this.props.data_be.data_be._id, false,this.props.token.token);
      this.props.handleChangeData_BE(this.props.data_be.data_be._id,this.props.token.token)
      this.setState({ Premium: false });
      this.props.ControlModal(false);
    }
    else if(this.state.Premium ===false){
      if (this.state.inputValue == this.props.signupdata.signupdata.randomId){
        this.props.ControlModal(false);
          this.props.PremiumPost(this.props.data_be.data_be._id, true,this.props.token.token);
        this.props.handleChangeData_BE(this.props.data_be.data_be._id,this.props.token.token)
        this.setState({Premium: true});
      } else if (this.state.inputValue != this.props.signupdata.signupdata.randomId) {

      }
    }
  }
  handleLogout() {
    this.props.handleLogout_BE();
  }
  togglemodal() {
    const Temp = !this.state.modal;
    this.setState({ modal: Temp });
  }
  /**
   * Posts the claiming of premium membership
   */
  handlePremium_be() {
    if (this.state.Premium === true) {
      this.props.PremiumPost(this.props.data_be.data_be._id, false);
      this.setState({ Premium: false });
      this.togglemodal();
    } else if (this.state.Premium === false) {
      this.props.PremiumPost(this.props.data_be.data_be._id, true);
      this.setState({ Premium: true });

      this.togglemodal();
    }
  }
  /**
   * Toggles the Navigation bar by switching isNavOpen from true to false and vice versa
   */
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let redirect = "";
    if (this.props.isSignedIn.isSignedIn === null) {
      redirect = <Redirect to="/signup" />;
    }

    let accLogStyleParent = "";
    let accChild = "";
    let logChild = "";
    if (this.state.isNavOpen) {
      accLogStyleParent = "OpenNav";
      accChild = "OpenNavChild";
      logChild = "OpenNavChild";
    } else {
      accLogStyleParent = "CloseNav";
      accChild = "CloseNavChild1";
      logChild = "CloseNavChild2";
    }
    return (
        <div>
          {redirect}
          <div className="AccountOverviewNav">
            <div className="container">
              <Navbar className="NavBar NavStyle" sticky="top" expand="md">
                <NavbarBrand className="mr-auto" href="/home">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                      height="65px"
                      width="200px"
                      alt=""
                  />
                </NavbarBrand>
                <NavbarToggler
                    className="NavBarToggle"
                    onClick={this.state.toggleNav}
                >
                  ☰
                </NavbarToggler>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className="ml-auto">
                    <NavItem>
                      <NavLink className="nav-link" to="/premium">
                        Premium
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        Help
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        Download
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <span className="nav-link HorizontalLine">──</span>
                    </NavItem>
                    <NavItem>
                      <NavLink
                          className="nav-link AccountWhenCollapsed"
                          to="/account/overview"
                      >
                        Account
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <Button
                          onClick={() => {
                            this.handleLogout();
                          }}
                          className="nav-link LogoutWhenCollapsed"
                      >
                        Log out
                      </Button>
                    </NavItem>
                    <NavItem>
                      <NavLink className="ImageWhenCollapsed" to="/home">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                            height="25px"
                            width="70px"
                            alt=""
                        />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <UncontrolledDropdown
                          nav
                          inNavbar
                          className="AccountOverviewDropDown"
                      >
                        <DropdownToggle nav caret className="seperator">
                          <img
                              alt=""
                              className="Profile"
                              src="https://4.bp.blogspot.com/_R0Rc6mb8H6E/S1TTZJCtq8I/AAAAAAAAC9A/a50aYOK5o0o/s320/design-fetish-no-photo-facebook-1.jpg"
                          />
                          Profile
                        </DropdownToggle>
                        <DropdownMenu className="StaticNav" right>
                          <DropdownItem className="StaticNavChildContainer">
                            <NavLink
                                className="StaticNavChild1"
                                to="/account/overview"
                            >
                              Account
                            </NavLink>
                          </DropdownItem>
                          <DropdownItem className="StaticNavChildContainer">
                            <Button
                                onClick={() => {
                                  this.handleLogout();
                                }}
                                className="StaticNavChild2"
                            >
                              Log out
                            </Button>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
          <Jumbotron className="JumboHeaderImg">
            <div className="App Headers">
              <div>
                <header className="Header1">Get Premium free for 1 month.</header>
              </div>
              <div>
                <h2 className="Header2">
                  Just EGP&nbsp;49.99/month after. Cancel anytime.
                </h2>
              </div>
            </div>
            <p>
              <Button className="signupbtn" onClick={()=>{this.handleSubmit()}}>
                Get Premium
              </Button>

              <Modal isOpen={this.props.isModalOpen.isModalOpen} className="">
                <ModalBody className="createPlayListBody">
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
                      {this.props.data_be.data_be.premium===false?(<div><Row>
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
                                    <input type="text" className="inputBox-input_CP" placeholder="Enter Your Received Code" onChange={this.handleChange}/>
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
                      </div>):(<div><Row>
                        <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                          <h1>To Cancel your Premium ship</h1>
                        </Col>
                      </Row>

                        <Row>
                          <Col md={{size:7,offset:5}} xs={12} sm={12} className="create_Cancel_CP">
                            <button class="CancelButton_CP" type="button" onClick={()=>this.props.ControlModal(false)}>CANCEL</button>
                            <button  class="CreateButton_CP" type="button" onClick={()=>this.handleSubmitModal()}>End Your Premium</button>
                          </Col>
                        </Row>
                      </div>)}

                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            </p>
          </Jumbotron>

          <article>
            <h1 className="PremiumMargin">Why Go Premium?</h1>
            <br />
            <br />
            <br />
            <Row xs="2">
              <Col>
                <img
                    src="assets/images/MusicDownload.png"
                    height="142"
                    width="142"
                    alt=""
                />
                <h5 className="mt-0">Download Music.</h5>
                <p>Listen AnyWhere.</p>
              </Col>
              <Col>
                {" "}
                <img
                    src="assets/images/SecondIcon.png"
                    height="142"
                    width="142"
                    alt=""
                />{" "}
                <h5 className="mt-0">No Ad Interruptions.</h5>
                <p>Enjoy NonStop Music.</p>
              </Col>
              <Col>
                {" "}
                <img
                    src="assets/images/ThirdIcon.png"
                    height="142"
                    width="142"
                    alt=""
                />
                <h5 className="mt-0">Play any Song.</h5>
                <p>Even on mobile.</p>
              </Col>
              <Col>
                {" "}
                <img
                    src="assets/images/fourthIcon.png"
                    height="142"
                    width="142"
                    alt=""
                />{" "}
                <h5 className="mt-0">Unlimited Skips.</h5>
                <p>Just hit next.</p>
              </Col>
            </Row>
          </article>
          <Jumbotron className="JmbStyle">
            <h3>Spotify Premium</h3>
            <h2>EGP49.99/Month</h2>
            <hr className="my-2" />
            <h5 style={{ padding: "20px", textAlign: "left" }}>
              <li>Play Any Song.</li>
              <li>Listen Offline.</li>
              <li>No ad interruptions.</li>
              <li>Unlimited Skips.</li>
              <li>High Audio Quality.</li>
            </h5>
            <hr className="my-2" />
            <p>
              <Button
                  model="submit"
                  className="signupbtn"
                  onClick={this.togglemodal}
              >
                Get Premium
              </Button>
            </p>
          </Jumbotron>
        </div>
    );
  }
}

export default Premium;