import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "./NavbarComponent";
import "./Home.css";
import Footer from "./FooterComponent";

/**Class of the main component which is the main page the user sees before logging in, it contains 
 * the 3 component that form the homepage: the navbar, the main interface and the footer. The instance 
 * of this component is created and loaded as soon as the user opens Spotify's website.
 */
class Home extends Component {
  /**A built in function that check if the component is on the screen, in other words
   * makes sure we are on the home page to prevent CSS problems that causes the homepage's 
   * styling to be visible in other pages with different components
   */
  componentDidMount() {
    document.body.classList.add("homeBody");
  }
/**The opposite of the componentDidMount() function, used to remove the styling after leaving homepage.
 * Also a built in function.
 */
  componentWillUnmount() {
    document.body.classList.remove("homeBody");
  }
/**
 * Renders the main page to un-logged users loading Spotify
 */
  render() {
     /**@return: returns the homepage component consisting of a navbar component, main part and a footer component. */
    return (
      <div className="Home">
        <NavbarHome />
        <div class="bg-pic"></div>
        <div class="row row-simplified homeContent">
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
