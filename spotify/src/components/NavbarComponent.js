import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLogo from "./Spotify_Logo_RGB_White.png";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import SignUp from "./SignUpComponent";
import { Navbar } from "reactstrap";

class NavbarSpotify extends Component {
  render() {
    return (
      <nav className="sticky navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="brand-logo">
              <img id="navLogo" src={NavLogo} alt="" />
            </Link>
          </div>
          <div className="nav nav-links">
            <ul className="nav-links navbar-right">
              <li className="nav-element">
                <a href="http://google.com" className="nav-link">
                  Premium
                </a>
              </li>
              <li className="nav-element">
                <a href="http://google.com" className="nav-link">
                  Help
                </a>
              </li>
              <li className="nav-element">
                <a href="http://google.com" className="nav-link">
                  Download
                </a>
              </li>
              <li className="nav-element">|</li>
              <li className="nav-element">
                <Link to="/signup" className="nav-link">
                  Sign up
                </Link>
              </li>
              <li className="nav-element">
                <a href="http://google.com" className="nav-link">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavbarSpotify;
