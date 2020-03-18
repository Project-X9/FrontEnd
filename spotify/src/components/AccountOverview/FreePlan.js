import React, { Component } from 'react';
import {
  Card, CardBody, CardText, CardSubtitle,
} from 'reactstrap';

class FreePlan extends Component {
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
