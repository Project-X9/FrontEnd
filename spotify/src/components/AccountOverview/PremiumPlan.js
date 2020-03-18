import React, { Component } from 'react';
import {
  Card, CardBody, CardText, CardSubtitle,
} from 'reactstrap';

class Premium extends Component {
  render() {
    return (
      <div>
        <div className="row ContainingPremium">
          <div className="col-sm-9 col-md-9 col-lg-9 PremiumHeaderColumn">
            <h2 className="MediumHeader">Spotify Premium</h2>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <img
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
