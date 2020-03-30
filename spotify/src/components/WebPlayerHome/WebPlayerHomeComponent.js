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



class WebPlayerHome extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.state.toggleNav = this.toggleNav.bind(this);
  }

  
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

 
  render() {

    return (
      <div>
        <div className="WebPlayerHomeBody">
            <div className="container InfoContainer">
                <div className="row InfoContainerRow">
                    <div className="Linkers">
                        <div className="sidebar">
                        <Link to="/" className="AppearBig">
                            <i className="fa fa-snapchat-ghost" aria-hidden="true" />
                        </Link>
                        <Link to="/" >
                            <i className="fa fa-home" />
                            Account overview
                        </Link>
                        <Link to="/" href="#news" >
                            <i className="fa fa-edit" />
                            Edit profile
                        </Link>
                        <Link to="/" href="#contact" >
                            <i className="fa fa-lock" />
                            Change password
                        </Link>
                        <Link to="/" href="#contact">
                            <i className="fa fa-hashtag" />
                            Recover playlists
                        </Link>
                        <Link to="/" href="#contact" >
                            <i className="fa fa-credit-card" />
                            Redeem
                        </Link>
                        </div>
                    </div>
                    <div className="col Content">
                        <div className="row">
                            <div className="WebPlayerHomeNav">
                                <div className="container">
                                    <Navbar className="NavBar NavStyle" sticky="top" expand="md">
                                        <Nav className="mr-auto" href="/signup">
                                        <NavItem className="customizedNavitems">
                                                <Button className="customizedButton">
                                                    <NavLink className="nav-link" to="/">
                                                    <svg className="customizedSvg" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                                    </NavLink>
                                                </Button>   
                                        </NavItem>
                                        <NavItem className="customizedNavitems">
                                                <Button className="customizedButton">
                                                        <NavLink className="nav-link customizedArrows" to="/">
                                                        <svg className="customizedSvg" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                                                        </svg>    
                                                        </NavLink>
                                                </Button>  
                                        </NavItem>
                                        </Nav>
                                        <Nav navbar className="ml-auto">
                                            <NavItem>
                                            <Button className="NextToAccount" color="success">
                                                <NavLink className="NextToAccount" to="/premium">UPGRADE</NavLink>
                                            </Button> 
                                            </NavItem>
                                            <NavItem>
                                                <UncontrolledDropdown nav inNavbar>
                                                <Button className="AccountItself">
                                                    <DropdownToggle nav caret>
                                                        <i class="fa fa-user-secret"></i>
                                                        Profile
                                                    </DropdownToggle>
                                                </Button>
                                                <DropdownMenu className="StaticNav" right>
                                                    <DropdownItem className="StaticNavChildContainer">
                                                    <NavLink
                                                        className="StaticNavChild"
                                                        to="accountoverview">
                                                        Account
                                                    </NavLink>{" "}
                                                    </DropdownItem>
                                                    <DropdownItem className="StaticNavChildContainer">
                                                    <NavLink
                                                        className="StaticNavChild Disappear"
                                                        to="accountoverview">
                                                        Upgarde
                                                    </NavLink>{" "}
                                                    </DropdownItem>
                                                    <DropdownItem className="StaticNavChildContainer">
                                                    <NavLink
                                                        className="StaticNavChild"
                                                        to="accountoverview">
                                                        Log out
                                                    </NavLink>{" "}
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="AccountOverviewFooter">
          <div className="container">
           
          </div>
        </div>
    </div>
    );
  }
}

export default WebPlayerHome;
