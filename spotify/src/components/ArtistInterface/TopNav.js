import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Button,
} from "reactstrap";

class TopNav extends Component {
  /**
   *
   * @param {Object} props
   * @param props.isNavOpen Originally set to false as navbar starts closed
   */
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.state.toggleNav = this.toggleNav.bind(this);
  }
  /**
   * Toggles the Navigation bar by switching isNavOpen from true to false and vice versa
   */
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  /**
   * Responsible for rendering the navbar and its elements on the screen
   * @returns a navbar component designed for an un-logged user
   */
  render() {
    return (
      <Navbar className="NavBar" sticky="top" expand="md">
        <div className="container">
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
                  <Button>UPGRADE</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default TopNav;
