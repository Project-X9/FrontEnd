/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

/**
 * Class for the freePlan component which is a container shown for the premium users
 */
class Premium extends Component {
  /**
   * Responsible for showing a container customized for premium users
   * @returns Components that will be display the container, and will be used in AccountOverview.js
   */
  render() {
    return (
      <div>
        <div className="row ContainingPremium">
          <div className="col-sm-9 col-md-9 col-lg-9 PremiumHeaderColumn">
            <h2 className="MediumHeader">Spotify Premium</h2>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <img
              alt=""
              className="PremiumImage"
              src="//www.scdn.co/i/account/plans/premium-f84013bcdac8cb7a27599785d5c74d848024afb5.png"
            />
          </div>
        </div>
        <div className="row CardContainer1">
          <Card className="CardContainer2">
            <CardBody>
              <CardText className="FreePlanText">
                Ad-free music, offline listening, and unlimited skips.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default Premium;
