/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
/**
 * Class for the reviewing the notifications 
 */
class ReviewNotifications extends Component {
  /**
   *
   * @param {Object} props
   * @param props.data_be Essentially contains the data of the users in the database after integrating with backend
   * @param props.isSignedIn Essentially used to check if a user is signed in or not
   * @param props.handleChangeData_BE Essentially used for changing read value of the notification
   * @param props.token Essentially used for changing read value of the notification
   * @param props.ReadNotifications Essentially used for changing read value of the notification
   */

  /**
   * changes Not Read to Read
   */
  changeRead(userID,notificationID)
  {
    this.props.ReadNotifications(userID,notificationID)
    this.props.handleChangeData_BE(userID,this.props.token.token)
  }

  render() {
    let Redirect = "";
    if (this.props.isSignedIn.isSignedIn === null){
      Redirect=<Link to="/overview"></Link>
    }
    let Notifications = "";
    if (this.props.isSignedIn.isSignedIn !== null){
      Notifications = this.props.data_be.data_be.notifications.map((notification) => {
        return(
          <div key= {notification._id} className="ReadNotificationsRow">
            <div className="row">
              <div className="col-9">
                <h5 className="ReadNotificationsEvents"> 
                  {notification.event} 
                </h5>
              </div>
              <div className="col-3"> 
                {notification.read===false?(
                    <div>
                      <Button className="ReadNotificationsTrueButton"
                      onClick={()=>this.changeRead(this.props.data_be.data_be._id,notification._id)}>
                        Not Read
                      </Button>
                    </div>
                    ):(
                    <div className="ReadNotificationsFalse">
                      <h5>
                        Read
                      </h5>
                    </div>
                  )} 
              </div>
            </div>
            <hr />
          </div>
        )
      })
    }
    return (
      <div>
        {Redirect}
        <div className="row">
          <h1 className="BigHeader">Notifications</h1>
        </div>
        {Notifications}
      </div>
    );
  }
}
export default ReviewNotifications;
