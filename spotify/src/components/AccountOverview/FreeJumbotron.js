/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl2 } from "../../shared/baseUrl";

/**
 * Class for the FreeJumbotron component which is a jumbotron shown for the free users
 */
class FreeJumbotron extends Component {
  /**
   * Responsible for showing a jumbotron customized for free users
   * @returns Components that will be display the jumbotron, and will be used in AccountOverview.js
   */
  render() {
    let showJumbo="HideAccountOverviewJumbotron";
    let currentURL=window.location.href;
   if(currentURL===baseUrl2 + "account/overview")
    {
      showJumbo="JumbotronContainer";
    }
    return (
      <div className={showJumbo}>
        <Jumbotron className="AccountOverviewBodyJumbo">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <h1 className="Header">Music without limits</h1>
                <p className="UnderHeader">
                  Premium lets you play any song, anytime. You can even listen
                  when you’re offline. No restrictions. No ads.
                </p>
                <Button className="UnderParagraph" color="success">
                  <NavLink className="UnderParagraph" to="/premium">GET PREMIUM</NavLink>
                </Button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <img
                  alt=""
                  className="Phone"
                  src="https://www.scdn.co/i/account/overview/iphone-ddd9e69.png"
                />
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default FreeJumbotron;
