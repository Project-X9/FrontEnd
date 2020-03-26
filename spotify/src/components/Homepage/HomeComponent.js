import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "./NavbarComponent";
import "./Home.css";
import Footer from "./FooterComponent";

class Home extends Component {
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
        <div className="bg-pic" />
        <div className="row row-simplified homeContent">
          <h1>Music for everyone.</h1>
          <h4>Millions of songs. No credit card needed.</h4>
          <Link to="/signup">
            <button model="submit" className="getSpotifyBtn">
              get spotify free
            </button>
          </Link>
        </div>
        <Footer className="homeFooter" />
      </div>
    );
  }
}
export default Home;
