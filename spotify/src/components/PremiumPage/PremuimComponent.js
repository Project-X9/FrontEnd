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

class Premium extends Component {
  /**
   *
   * @param props.data Essentially contains the data of the users in the database
   * @param props.id Essentially contains the id of one of the users in the database

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
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    this.togglemodal = this.togglemodal.bind(this);
    // this.handlePremiumT = this.handlePremiumT.bind(this);
    // this.handlePremiumF = this.handlePremiumF.bind(this);
    this.handlePremium_be = this.handlePremium_be.bind(this);
    this.state.handleLogout = this.handleLogout.bind(this);
  }
  // componentDidMount(){
  //   if(this.state.isPrenium === this.state.premium)
  //   {  this.setState({
  //       isPrenium:!this.state.premium
  //     })}
  // }
  handleLogout() {
    this.props.handleLogout_BE();
  }
  // handleData = () => {
  //   let temp;
  //   this.props.data.data.map(data => {
  //     if (data.id === this.props.id.id) {
  //       temp = data.premium;
  //     }
  //   });
  //   this.setState({ Premium: temp });
  //   return temp;
  // };
  togglemodal() {
    // const Checker = this.handleData();
    const Temp = !this.state.modal;
    this.setState({ modal: Temp });
  }
  /**
   * Posts the claiming of premium membership
   */
  // handlePremiumT() {
  //   if (this.state.Premium === false) {
  //     this.props.PremiumPost(this.props.id.id, true);
  //     this.togglemodal();
  //   }
  // }
  /**
   * Posts the Canceling of premium membership
   */
  // handlePremiumF() {
  //   if (this.state.Premium === true) {
  //     this.props.PremiumPost(this.props.id.id, false);
  //     this.togglemodal();
  //   }
  // }
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
            <Button className="signupbtn" onClick={this.togglemodal}>
              Get Premium
            </Button>
            <Modal isOpen={this.state.modal}>
              <div className="modified-content">
                <ModalHeader>Claiming Premium</ModalHeader>
                <ModalBody>
                  Pay 5 EGP please for claiming your Premium account
                </ModalBody>
                <ModalFooter>
                  <Button
                    hidden={this.state.Premium}
                    color="primary"
                    onClick={this.handlePremium_be}
                  >
                    Claim{" "}
                  </Button>
                  <Button
                    hidden={!this.state.Premium}
                    color="primary"
                    onClick={this.handlePremium_be}
                  >
                    Cancel Premium{" "}
                  </Button>
                  <Button color="secondary" onClick={this.togglemodal}>
                    Cancel
                  </Button>
                </ModalFooter>
              </div>
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
