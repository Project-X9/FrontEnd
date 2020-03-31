/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
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
import FreePlan from "./FreePlan";
import PremiumPlan from "./PremiumPlan";
import FreeJumbotron from "./FreeJumbotron";
import PremiumJumbotron from "./PremiumJumbotron";
import ChangePass from "./ChangePassword";
import IdObj from "../../Global";

/**
 * Account Overview page
 */
class AccountOverview extends Component {
  /**
   *
   * @param {Object} props
   * @param props.data Essentially contains the data of the users in the database
   * @param props.id Essentially contains the id of one of the users in the database
   */
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      tempId: this.props.id.id,
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    this.state.nullID = this.nullID.bind(this);
  }

  /**
   * Toggles the Navigation bar by switching isNavOpen from true to false and vice versa
   */
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  /**
   * Setting tempId to an empty string, used for testing if the user tries
   *  to enter the page without an ID,
   * he will be redirected to another page
   */
  nullID() {
    this.setState({
      tempId: '',
    });
  }

  /**
   * Responsible for showing everything on the Account Overview page
   * @returns Components that will be displayed on the page
   */
  render() {

    let overviewActive=''
    let editProfileActive=''
    let changePasswordActive=''
    let recoverPlaylistsActive=''
    let redeemActive=''
    let currentURL=window.location.href
    if(currentURL==="http://localhost:3000/account/overview")
    {
      overviewActive='active'; editProfileActive=''; changePasswordActive=''; recoverPlaylistsActive=''; redeemActive='';
    }
    else if(currentURL==="http://localhost:3000/account/changepassword")
    {
      overviewActive=''; editProfileActive=''; changePasswordActive='active'; recoverPlaylistsActive=''; redeemActive='';
    }

    let redirect=''
    if (this.state.tempId === "") {
      alert("No ID") 
      redirect=<Redirect to="/signup" />
    }
   
    const UserData = this.props.data.data.map((data) => {
      if (data.id === this.state.tempId) {
        return (
          <div key={data.id}>
            <div className="row">
              <div className="col Content1">
                <h5>Username</h5>
              </div>
              <div className="col Content2">
                <h5>
                  {' '}
                  {data.name}
                  {' '}
                </h5>
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
                  {data.day}
                  /
                  {data.month}
                  /
                  {data.year}
                </h5>
              </div>
            </div>
            <hr />
          </div>
        );
      }
    });
    const showJumbotron = this.props.data.data.map(data => {
      if (data.id === this.state.tempId) {
        if (data.premium === false) {
          return <FreeJumbotron />;
        }
        return <PremiumJumbotron />;
      }
    });

    const showPlan = this.props.data.data.map(data => {
      if (data.id === this.state.tempId) {
        if (data.premium === false) {
          return <FreePlan />;
        }
        return <PremiumPlan />;
      }
    });

    const showOverview = () => {
        return (
          <div>
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
                  <button
                    onClick={this.state.nullID}
                    className="EditProfile"
                    color="success">
                    <NavLink className="InsideEditProfile" to="/premium">
                      EDIT PROFILE
                    </NavLink>
                  </button>
                </div>
                <div className="row">
                  <h3 className="SmallHeader2">Your plan</h3>
                </div>
                {showPlan}
                <div className="row">
                  <Button className="EditProfile" color="success">
                    <NavLink className="InsideEditProfile" to="/premium">
                      JOIN PREMIUM
                    </NavLink>
                  </Button>
                </div>
                <div className="row">
                  <Button className="EditProfile" color="success">
                    <NavLink className="InsideEditProfile" to="/">
                      SIGN OUT
                    </NavLink>
                  </Button>
            </div>
          </div>
        ); 
    };

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
                onClick={this.state.toggleNav}>
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
                      <DropdownMenu className="StaticNav" right>
                        <DropdownItem className="StaticNavChild1Container">
                          <NavLink
                            className="StaticNavChild1"
                            to="/account/overview">
                            Account
                          </NavLink>
                        </DropdownItem>
                        <DropdownItem className="StaticNavChild1Container">
                        <NavLink
                            className="StaticNavChild2"
                            to="/account/overview">
                            Log out
                          </NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
        <div className="AccountOverviewBody">
          {showJumbotron}
          <div className="container InfoContainer">
            <div className="row InfoContainerRow">
              <div className="col-sm-12 col-md-12 col-lg-4 Linkers">
                <div className="sidebar">
                  <Link className="AppearBig">
                    <i className="fa fa-snapchat-ghost" aria-hidden="true" />
                  </Link>
                  <Link to="/account/overview" className={overviewActive}>
                    <i className="fa fa-home" />
                    Account overview
                  </Link>
                  <Link to="/" className={editProfileActive}>
                    <i className="fa fa-edit" />
                    Edit profile
                  </Link>
                  <Link to="/account/changepassword" className={changePasswordActive}>
                    <i className="fa fa-lock" />
                    Change password
                  </Link>
                  <Link to="/"  className={recoverPlaylistsActive}>
                    <i className="fa fa-hashtag" />
                    Recover playlists
                  </Link>
                  <Link to="/" className={redeemActive}>
                    <i className="fa fa-credit-card" />
                    Redeem
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8 Content">
                <Switch>
                    <Route
                      path="/account/overview"
                      component={showOverview}
                    />
                    <Route
                      path="/account/changepassword"
                      component={() => (
                        <ChangePass
                          PostPassword={this.props.PostPassword}
                          GetPassword={this.props.GetPassword}
                          data={this.props.data}
                          id={this.props.id}
                        />
                      )}
                    />    
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div className="AccountOverviewFooter">
          <div className="container">
            <div className="AccountOverviewFooterFirstRow">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-2">
                  <Link to="/home">
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
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Jobs</Link>
                    </li>
                    <li>
                      <Link to="/">For the Record</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2 LeftAlign">
                  <h5 className="FooterHeader">COMMUNITIES</h5>
                  <ul>
                    <li>
                      <Link to="/">For Artists</Link>
                    </li>
                    <li>
                      <Link to="/">Developers</Link>
                    </li>
                    <li>
                      <Link to="/">Brands</Link>
                    </li>
                    <li>
                      <Link to="/">Investors</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2 LeftAlign">
                  <h5 className="FooterHeader">USEFUL LINKS</h5>
                  <ul>
                    <li>
                      <Link to="">Help</Link>
                    </li>
                    <li>
                      <Link to="/webplayer">Web Player</Link>
                    </li>
                    <li>
                      <Link to="">Free Mobile App</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 icons">
                  <a
                    className="btn btn-social-icon btn-instagram"
                    href="https://www.instagram.com/spotify/?hl=en">
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    className="btn btn-social-icon btn-twitter"
                    href="https://twitter.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="btn btn-social-icon btn-facebook"
                    href="https://www.facebook.com/Spotify/">
                    <i className="fa fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
            <div className="AccountOverviewFooterSecondRow">
              <div className="col-sm-9 col-md-9 linespacing">
                <Link to="/">Legal</Link>
                <Link to="/">Privacy Center</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Cookies</Link>
                <Link to="/">About Ads</Link>
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
