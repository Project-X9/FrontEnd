/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { NavLink, Link, Redirect, Switch, Route} from "react-router-dom";



class HomeNavAndContentSigned extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        tempId: this.props.id.id,
    };
  }

 
  render() {
    const userName = this.props.data.data.map((data) => {
        if (data.id === this.state.tempId) {
          return (
            <div>
             <Button className="AccountItself">
                <DropdownToggle nav caret>
                    <i class="fa fa-user-secret"></i>
                    {data.name}
                </DropdownToggle>
            </Button>
            </div>
          );
        }
      });

      const showUpgrade1 = this.props.data.data.map(data => {
        if (data.id === this.state.tempId) {
          if (data.premium === false) {
            return (
            <NavItem>
                <Button className="NextToAccount" color="success">
                    <NavLink className="NextToAccount" to="/premium">UPGRADE</NavLink>
                </Button> 
            </NavItem>
            )}
          return (<span></span>)
        }
      });

      const showUpgrade2 = this.props.data.data.map(data => {
        if (data.id === this.state.tempId) {
          if (data.premium === false) {
            return (
            <NavLink
                className="StaticNavChild Disappear"
                to="/premium">
                Upgarde to Premium
            </NavLink>
            )}
          return (<span></span>)
        }
      });

      const isSignedIn = this.props.data.data.map((data) => {
        if (data.id === this.state.tempId) {
          return (
            <div>
              <div className="row">
                  <div className="WebPlayerHomeNav">
                      <div className="container">
                          <Navbar className="NavBar NavStyle" sticky="top" expand="md">
                              <Nav className="mr-auto" href="/signup">
                              <NavItem className="customizedNavitems">
                                      <Button className="customizedButton">
                                          <NavLink className="nav-link" to="/webplayer/library">
                                          <svg className="customizedSvg" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                          </NavLink>
                                      </Button>   
                              </NavItem>
                              <NavItem className="customizedNavitems">
                                      <Button className="customizedButton">
                                              <NavLink className="nav-link customizedArrows" to="/webplayer/search">
                                              <svg className="customizedSvg" viewBox="0 0 24 24">
                                              <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                                              </svg>    
                                              </NavLink>
                                      </Button>  
                              </NavItem>
                              </Nav>
                              <Nav navbar className="ml-auto">
                                  {showUpgrade1}
                                  <NavItem>
                                      <UncontrolledDropdown nav inNavbar>
                                      {userName}
                                      <DropdownMenu className="StaticNav" right>
                                          <DropdownItem className="StaticNavChildContainer">
                                          <NavLink
                                              className="StaticNavChild"
                                              to="/account/overview">
                                              Account
                                          </NavLink>
                                          </DropdownItem>
                                          <DropdownItem className="StaticNavChildContainer">
                                          {showUpgrade2}
                                          </DropdownItem>
                                          <DropdownItem className="StaticNavChildContainer">
                                          <NavLink
                                              className="StaticNavChild"
                                              to="accountoverview">
                                              Log out
                                          </NavLink>
                                          </DropdownItem>
                                      </DropdownMenu>
                                      </UncontrolledDropdown>
                                  </NavItem>
                              </Nav>   
                          </Navbar>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="WebPlayerHomeContent">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="GridView">
                          <div className="CardsHome">
                            <div className="row">
                              <div className="col">
                                <div>
                                <div className="CardPhoto">
                                    <div className="ImageHolder">
                                        <img  className="ImageItself" src="https://a10.gaanacdn.com/images/albums/69/2437469/crop_480x480_2437469.jpg" alt=""></img>
                                    </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          
                        
                            <div className="row">
                              <div className="col">
                                <div>
                                <div className="CardPhoto">
                                    <div className="ImageHolder">
                                        <img  className="ImageItself" src="https://i.scdn.co/image/ab67706f000000021c6e257c426955c06bdfb9ef" alt=""></img>
                                    </div>
                                </div>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
          );
        }
        if (''===this.state.tempId) {
          return(
            <div>
              <div className="row">
                  <div className="WebPlayerHomeNav">
                      <div className="container">
                          <Navbar className="NavBar NavStyle" sticky="top" expand="md">
                              <Nav className="mr-auto" href="/signup">
                              <NavItem className="customizedNavitems">
                                      <Button className="customizedButton">
                                          <NavLink className="nav-link" to="/webplayer/library">
                                          <svg className="customizedSvg" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                          </NavLink>
                                      </Button>   
                              </NavItem>
                              <NavItem className="customizedNavitems">
                                      <Button className="customizedButton">
                                              <NavLink className="nav-link customizedArrows" to="/webplayer/search">
                                              <svg className="customizedSvg" viewBox="0 0 24 24">
                                              <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                                              </svg>    
                                              </NavLink>
                                      </Button>  
                              </NavItem>
                              </Nav>
                              <Nav navbar className="ml-auto MakingTheButtonsHorizontal">
                                <NavItem>
                                  <Button className="HomeNotSignedUp" color="success">
                                      <NavLink className="HomeNotSignedUp" to="/signup">SIGN UP</NavLink>
                                  </Button> 
                                </NavItem>
                                <NavItem>
                                  <Button className="HomeNotLoggedin" color="success">
                                      <NavLink className="HomeNotLoggedin" to="/signin">LOG IN</NavLink>
                                  </Button> 
                                </NavItem>
                              </Nav>   
                          </Navbar>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <h1>Hello,uiviuviuviuvuiuiyvuyvutchwveufyewvuywe yuewv cfyuew fcutewvfywevfywev</h1>
              </div>
          </div>
          )
        }
      });

    return (
      <div>
      {isSignedIn}
      </div>
    );
  }
}

export default HomeNavAndContentSigned;
