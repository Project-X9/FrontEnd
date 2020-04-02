/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { baseUrl2 } from "../../shared/baseUrl";

/**
 * Class for the PremiumJumbotron component which is a jumbotron shown for the premium users
 */
class PremiumJumbotron extends Component {
  /**
     * Responsible for showing a jumbotron customized for premium users
     * @returns Components that will be display the jumbotron,
     *  and will be used in AccountOverview.js
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
                <h1 className="Header">Hello!</h1>
                <p className="UnderHeader">
                  Want to edit your profile? Find an old playlist? Put off work
                  for a while? You can do it all here.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <img
                  className="Phone"
                  src="https://www.scdn.co/i/account/overview/iphone-ddd9e69.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default PremiumJumbotron;
