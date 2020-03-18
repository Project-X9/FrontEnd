import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class PremiumJumbotron extends Component {
  render() {
    return (
      <div>
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
