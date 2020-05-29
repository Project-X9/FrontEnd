/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Card, CardBody, CardText, CardSubtitle,
} from 'reactstrap';
import { NavLink} from "react-router-dom";
import {Button} from "reactstrap";
/**
 * Class for the freePlan component which is a container shown for the free users
 */
class ReviewNotifications extends Component {
  /**
   * Responsible for showing a container customized for free users
   * @returns Components that will be display the container, and will be used in AccountOverview.js
   */
  render() {
    return (
        <div>
        <div className="row">
          <h1 className="BigHeader">Notifications</h1>
        </div>

       
        <div className="row">
          <div className="col Content1">
            <h5>Username</h5>
          </div>
          <div className="col Content2">
            <h5> {this.props.data_be.data_be.name} </h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col Content1">
            <h5>Email</h5>
          </div>
          <div className="col Content2">
            <h5>{this.props.data_be.data_be.email}</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col Content1">
            <h5>Age</h5>
          </div>
          <div className="col Content2">
            <h5>{this.props.data_be.data_be.age}</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col Content1">
            <h5>Country</h5>
          </div>
          <div className="col Content2">
            <h5>EG</h5>
          </div>
        </div>
        <hr />
       
       
        <div className="row">
          <Button onClick={() => {
            this.handleLogout();
          }}
            className="EditProfile" color="success">
            <NavLink className="InsideEditProfile" to="/">
              SIGN OUT
            </NavLink>
          </Button>
        </div>
      </div>
    );
  }
}
export default ReviewNotifications;
