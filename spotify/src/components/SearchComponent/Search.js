import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownToggle,
} from "reactstrap";
import "../NowPlayComponent/NowPlay.css";
import { NavLink, Redirect } from "react-router-dom";
import { Loading } from "./../Loading/LoadingComponent";
/**
 * Search for a song dynamically
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      tempId: this.props.data_be.data_be.id,
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    this.state.handleLogout = this.handleLogout.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }
  /**
   * handleLogout for logging out of the user
   */
  handleLogout() {
    this.props.handleLogout_BE();
  }

  render() {
    var redirect = "";
    if (this.props.isSignedIn.isSignedIn === null) {
      redirect = <Redirect to="/webplayer/home" />;
    }
    if (this.props.data_be.isLoading) {
      return <Loading />;
    } else {
      if (this.props.isSignedIn.isSignedIn === true) {
        let userName = (
          <div>
            <Button className="AccountItself">
              <DropdownToggle nav caret className="WritingInsideAccountItself">
                <i class="fa fa-user-secret"></i>
                {this.props.data_be.data_be.name}
              </DropdownToggle>
            </Button>
          </div>
        );

        let showUpgrade1 = "";
        if (this.props.data_be.data_be.premium === false) {
          showUpgrade1 = (
            <NavItem>
              <Button className="NextToAccount" color="success">
                <NavLink className="NextToAccount" to="/premium">
                  UPGRADE
                </NavLink>
              </Button>
            </NavItem>
          );
        } else {
          showUpgrade1 = <span></span>;
        }

        let showUpgrade2 = "";
        if (this.props.data_be.data_be.premium === false) {
          showUpgrade2 = (
            <NavLink className="StaticNavChild Disappear" to="/premium">
              Upgarde to Premium
            </NavLink>
          );
        } else {
          showUpgrade2 = <span></span>;
        }

        var SignedIn = "";
        if (this.props.isSignedIn.isSignedIn === true) {
          SignedIn = (
            <div>
              <div className="row">
                <div className="WebPlayerHomeNav">
                  <div className="container">
                    <Navbar className="NavBar NavStyle" expand="md">
                      <Nav className="mr-auto" href="/signup">
                        <NavItem className="CustomNavitems">
                          <Button className="CustomButton">
                            <NavLink
                              className="nav-link SpecificallyForTheButton"
                              to="/webplayer/librarypage/playlists"
                            >
                              <svg className="CustomSvg" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
                                ></path>{" "}
                              </svg>
                            </NavLink>
                          </Button>
                        </NavItem>
                        <NavItem className="CustomNavitems">
                          <Button className="CustomButton">
                            <NavLink
                              className="nav-link SpecificallyForTheButton"
                              to="/webplayer/search"
                            >
                              <svg className="CustomSvg" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
                                ></path>
                              </svg>
                            </NavLink>
                          </Button>
                         </NavItem>
                      <NavItem>
            





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
                                  to="/account/overview"
                                >
                                  Account
                                </NavLink>
                              </DropdownItem>
                              <DropdownItem className="StaticNavChildContainer">
                                {showUpgrade2}
                              </DropdownItem>
                              <DropdownItem className="StaticNavChildContainer">
                                <Button
                                  onClick={() => {
                                    this.handleLogout();
                                  }}
                                  className="StaticNavChild"
                                >
                                  Log out
                                </Button>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </NavItem>
                      </Nav>
                    </Navbar>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
      return (
        <div>
          {this.props.isSignedIn.isSignedIn === true ? (
            <div className=" DivStyle LibraryPageBody">
              {SignedIn}
              </div>): (
            <div>{redirect}</div>
          )}
              </div>);
    }
  }
}
export default Search;
