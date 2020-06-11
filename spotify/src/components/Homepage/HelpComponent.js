import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "./NavbarComponent";
import "./Home.css";
import "../AccountOverview/AccountOverviewComponent.css"
import Footer from "./FooterComponent";
import { Jumbotron, Row, Col, Button, DropdownToggle } from "reactstrap";

/**Class of the main component which is the main page the user sees before logging in, it contains 
 * the 3 component that form the homepage: the navbar, the main interface and the footer. The instance 
 * of this component is created and loaded as soon as the user opens Spotify's website.
 */
class Help extends Component {
  /**A built in function that check if the component is on the screen, in other words
   * makes sure we are on the home page to prevent CSS problems that causes the homepage's 
   * styling to be visible in other pages with different components
   */
  constructor(props) {
    super(props);
    this.state ={
        WhichHelp:1
    }
    this.activateAccountHelp = this.activateAccountHelp.bind(this);
    this.activatePaymentHelp = this.activatePaymentHelp.bind(this);
    this.activateFamilyHelp = this.activateFamilyHelp.bind(this);
    this.activateSecurityHelp = this.activateSecurityHelp.bind(this);
    this.activateSubscribeHelp = this.activateSubscribeHelp.bind(this);
 }
 activateAccountHelp() {
    this.setState ({
        WhichHelp:1
    })
  } 
  activatePaymentHelp() {
    this.setState ({
        WhichHelp:2
    })
  } 
  activateFamilyHelp() {
    this.setState ({
        WhichHelp:3
    })
  } 
  activateSubscribeHelp() {
    this.setState({
        WhichHelp:4
    })
  } 
  activateSecurityHelp() {
    this.setState ({
        WhichHelp:5
    })
  } 
  /**
   * Renders the help page to give information to the users
   */
  render() {
    /**@return: returns the help component. */

    return (
      <div className="Help">
        <NavbarHome isSignedIn={this.props.isSignedIn}
          data_be={this.props.data_be}
          handleLogout_BE={this.props.handleLogout_BE} />
                        <div className="switchers">
                <Button
                  className="secondary Header1"
                  id="ov"
                  onClick={this.activateAccountHelp}
                >
                    <div className="togglersText">Account Help</div>
                </Button>
                <Button
                  className="secondary Header1"
                  id="ab"
                  onClick={ this.activateFamilyHelp}
                >
                  <div className="togglersText">Premium Family</div>
                </Button>
                <Button
                  className="secondary Header1"
                  id="ab"
                  onClick={ this.activatePaymentHelp}
                >
                  <div className="togglersText">Payment Help</div>
                </Button>
                <Button
                  className="secondary Header1"
                  id="ab"
                  onClick={ this.activateSecurityHelp}
                >
                    <div className="togglersText">Privacy and Security</div>
                </Button>
                <Button
                  className="secondary Header1"
                  id="ab"
                  onClick={ this.activateSubscribeHelp}
                >
                    <div className="togglersText">Subscription Options</div>
                </Button>
              </div>
              {this.state.WhichHelp===1&&<div className="outPut">
                <h3>Your username</h3>
                        Your username is designed to identify you on Spotify, so it can’t change. 
                        But you don’t need to remember it to log in, just use your email address 
                        and password, or Facebook.</div>}
                {this.state.WhichHelp===2&&<div className="outPut">
                <h3>Payment Options</h3>
                You can pay for Spotify in lots of ways. To see the payment methods 
                available in your country, go to www.spotify.com/premium and continue 
                through to the checkout. You won’t be charged until you submit any payment info.</div>
                }
                {this.state.WhichHelp===3&&<div className="outPut">
                <h3>Premium Family</h3>
                Premium Family is a discount subscription for up to 6 family members who live together.<br/>
Each member has their own Individual Premium account, so there’s no need to share login details.<br/>
Plus Family Mix - a playlist based on the tastes of everyone on the plan.<br/>
Plan managers can control explicit music for members.</div>}   
                {this.state.WhichHelp===4&&<div className="outPut">
                                <h3>Subscription Options</h3>
                                <table border="1" cellpadding="2" cellspacing="2"><tbody><tr><td colspan="1" rowspan="1">&nbsp;</td><td colspan="1" rowspan="1">Spotify free</td><td colspan="1" rowspan="1">Spotify Premium</td></tr><tr><td colspan="1" rowspan="1">Access to over 50 million songs</td><td colspan="1" rowspan="1">✓</td><td colspan="1" rowspan="1">✓</td></tr><tr><td colspan="1" rowspan="1">Access to podcasts and audiobooks</td><td colspan="1" rowspan="1">✓</td><td colspan="1" rowspan="1">✓</td></tr><tr><td colspan="1" rowspan="1">Travel abroad with your music</td><td colspan="1" rowspan="1">
			<p>For up to 14 days.</p>
			</td><td colspan="1" rowspan="1">✓</td></tr><tr><td colspan="1" rowspan="1">Pick and play any track on mobile</td><td colspan="1" rowspan="1">
			<p>Available on select playlists.</p>
			</td><td colspan="1" rowspan="1">✓</td></tr><tr><td colspan="1" rowspan="1">No ad interruptions</td><td colspan="1" rowspan="1">&nbsp;</td><td colspan="1" rowspan="1">✓</td></tr><tr><td colspan="1" rowspan="1">Listen without an internet connection</td><td colspan="1" rowspan="1">&nbsp;</td><td colspan="1" rowspan="1">✓</td></tr><tr><td colspan="1" rowspan="1">Highest music quality</td><td colspan="1" rowspan="1">&nbsp;</td><td colspan="1" rowspan="1">✓</td></tr></tbody></table></div>}                       
            {this.state.WhichHelp===5&&<div className="outPut">
                <h3>Protect Your Account</h3>
                At Spotify, we care deeply about the security of your personal data. Our Security Team works tirelessly to safeguard your account and your personal information. 
                </div>}     
        <Footer className="homeFooter" />
      </div>
    );
  }
}
export default Help;