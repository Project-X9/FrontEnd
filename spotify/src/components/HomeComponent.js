import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarSpotify from "./NavbarComponent";
import "../styles/Home.css";
import Footer from "./FooterComponent";
import { button, Button } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.body.classList.add('homeBody');
    return (
      <div className="Home">
        <NavbarSpotify />
        <div class="bg-pic"></div>
        <div class="row row-simplified homeContent">
          <h1>Music for everyone.</h1>
          <h4>Millions of songs. No credit card needed.</h4>
          <button model="submit" className="getSpotifyBtn">
            get spotify free
          </button>
        </div>
        <Footer className="homeFooter" />
      </div>
    );
  }
}
export default Home;
