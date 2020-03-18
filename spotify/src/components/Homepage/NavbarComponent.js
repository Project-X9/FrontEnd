import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavLogo from "./Spotify_Logo_RGB_White.png";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import SignUp from "../SignUp/SignUpComponent";
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

class NavbarHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.state.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return (

            <Navbar className="NavBar" sticky={"top"} expand="md">
                   <div className="container">
              <NavbarBrand className="mr-auto" href="/">
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
                    <NavLink className="nav-link" to="">
                      Help
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/">
                      Download
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-link" id="NavSlash">
                    |
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/signup">
                      Sign up
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/login">
                      Log In
                    </NavLink>
                  </NavItem>

                </Nav>
              </Collapse>
              </div>
            </Navbar>
      
    );
  }
}
export default NavbarHome;
