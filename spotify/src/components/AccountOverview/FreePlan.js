/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Card, CardBody, CardText, CardSubtitle,
} from 'reactstrap';

/**
 * Class for the freePlan component which is a container shown for the free users
 */
class FreePlan extends Component {
  /**
   * Responsible for showing a container customized for free users
   * @returns Components that will be display the container, and will be used in AccountOverview.js
   */
  render() {
    return (
      <div>
        <div className="row ContainingFree">
          <h2 className="MediumHeader">Spotify Free</h2>
        </div>
        <div className="row CardContainer1">
          <Card className="CardContainer2">
            <CardBody>
              <CardText className="FreePlanText">
                Play music in shuffle mode only, with ads.
              </CardText>
              <hr />
              <CardSubtitle className="FreePlan">Free</CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default FreePlan;
