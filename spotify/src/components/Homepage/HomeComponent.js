import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import NavbarHome from "./NavbarComponent";
import "./Home.css";
import Footer from "./FooterComponent";
import { button, Button } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.classList.add("homeBody");
  }
  componentWillUnmount() {
    document.body.classList.remove("homeBody");
  }
  render() {
    return (
      <div className="Home">
        <NavbarHome />
        <div class="bg-pic"></div>
        <div className="container"></div>
        <div class="row row-simplified homeContent">
          <h1>Music for everyone.</h1>
          <h4>Millions of songs. No credit card needed.</h4>
          <Link to="/signup">
            <button model="submit" className="getSpotifyBtn">
              get spotify free
            </button>
          </Link>
        </div>
        <button model="submit" className="getArtistBtn">
              claim your artist account
        </button>
        <Footer className="homeFooter" />
      </div>
    );
  }
}
export default Home;
