import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class FreeJumbotron extends Component {
  render() {
    return (
      <div>
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
                  GET PREMIUM
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
