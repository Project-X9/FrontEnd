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
import { NavLink, Link } from "react-router-dom";

import FreePlan from "./FreePlan";
import PremiumPlan from "./PremiumPlan";
import FreeJumbotron from "./FreeJumbotron";
import PremiumJumbotron from "./PremiumJumbotron";

class AccountOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      tempId: this.props.id.id.length + 1
    };
    this.state.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    const UserData = this.props.data.data.map(data => {
      if (data.id === this.state.tempId - 1) {
        return (
          <div key={data.id}>
            <div className="row">
              <div className="col Content1">
                <h5>Username</h5>
              </div>
              <div className="col Content2">
                <h5> {data.name} </h5>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col Content1">
                <h5>Email</h5>
              </div>
              <div className="col Content2">
                <h5>{data.email}</h5>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col Content1">
                <h5>Date of birth</h5>
              </div>
              <div className="col Content2">
                <h5>
                  {data.day}/{data.month}/{data.year}
                </h5>
              </div>
            </div>
            <hr />
          </div>
        );
      }
    });
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
        <div className="AccountOverviewNav">
          <div className="container">
            <Navbar className="NavBar" sticky="top" expand="md">
              <NavbarBrand className="mr-auto" href="/signup">
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
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className="seperator">
                        <img
                          alt=""
                          className="Profile"
                          src="https://4.bp.blogspot.com/_R0Rc6mb8H6E/S1TTZJCtq8I/AAAAAAAAC9A/a50aYOK5o0o/s320/design-fetish-no-photo-facebook-1.jpg"
                        />
                        Profile
                      </DropdownToggle>
                      <DropdownMenu className={accLogStyleParent} right>
                        <DropdownItem className={accChild}>
                          <NavLink to="accountoverview">Account</NavLink>{" "}
                        </DropdownItem>
                        <DropdownItem className={logChild}>LogOut</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
        <div className="AccountOverviewBody">
          <FreeJumbotron />
          <PremiumJumbotron />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 Linkers">
                <div className="sidebar">
                  <Link to="/" className="AppearBig">
                    <i className="fa fa-snapchat-ghost" aria-hidden="true" />
                  </Link>
                  <Link to="/accountoverview" className="active">
                    <i className="fa fa-home" />
                    Account overview
                  </Link>
                  <Link to="/" href="#news">
                    <i className="fa fa-edit" />
                    Edit profile
                  </Link>
                  <Link to="/" href="#contact">
                    <i className="fa fa-lock" />
                    Change password
                  </Link>
                  <Link to="/" href="#contact">
                    <i className="fa fa-hashtag" />
                    Recover playlists
                  </Link>
                  <Link to="/" href="#contact">
                    <i className="fa fa-credit-card" />
                    Redeem
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8 Content">
                <div className="row">
                  <h1 className="BigHeader">Account overview</h1>
                </div>
                <div className="row">
                  <h3 className="SmallHeader">Profile</h3>
                </div>

                <div>{UserData}</div>

                <div className="row">
                  <div className="col Content1">
                    <h5>Country</h5>
                  </div>
                  <div className="col Content2">
                    <h5>EG</h5>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <button className="EditProfile" color="success">
                    EDIT PROFILE
                  </button>
                </div>
                <div className="row">
                  <h3 className="SmallHeader2">Your plan</h3>
                </div>
                <FreePlan />
                <PremiumPlan />
                <div className="row">
                  <Button className="EditProfile" color="success">
                    <NavLink to="premium">JOIN PREMIUM</NavLink>
                  </Button>
                </div>
                <div className="row">
                  <Button className="EditProfile" color="success">
                    SIGN OUT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AccountOverviewFooter">
          <div className="container">
            <div className="AccountOverviewFooterFirstRow">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-2">
                  <Link to="http://spotify.com">
                    <img
                      className="logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2 LeftAlign">
                  <h5 className="FooterHeader">COMPANY</h5>
                  <ul>
                    <li>
                      <Link to="http://google.com">About</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">Jobs</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">For the Record</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2 LeftAlign">
                  <h5 className="FooterHeader">COMMUNITIES</h5>
                  <ul>
                    <li>
                      <Link to="http://google.com">For Artists</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">Developers</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">Brands</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">Investors</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2 LeftAlign">
                  <h5 className="FooterHeader">USEFUL LINKS</h5>
                  <ul>
                    <li>
                      <Link to="http://google.com">About</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">Jobs</Link>
                    </li>
                    <li>
                      <Link to="http://google.com">For the Record</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 icons">
                  <a
                    className="btn btn-social-icon btn-instagram"
                    href="https://www.instagram.com/spotify/?hl=en"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    className="btn btn-social-icon btn-twitter"
                    href="https://twitter.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="btn btn-social-icon btn-facebook"
                    href="https://www.facebook.com/Spotify/"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
            <div className="AccountOverviewFooterSecondRow">
              <div className="col-sm-9 col-md-9 linespacing">
                <Link to="http://google.com">Legal</Link>
                <Link to="http://google.com">Privacy Center</Link>
                <Link to="http://google.com">Privacy Policy</Link>
                <Link to="http://google.com">Cookies</Link>
                <Link to="http://google.com">About Ads</Link>
              </div>
              <div className="col-sm-3 col-md-3">
                <p className="stylesecondrow2">© 2020 Spotify AB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountOverview;
