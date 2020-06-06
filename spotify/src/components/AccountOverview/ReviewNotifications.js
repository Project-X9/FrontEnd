/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {Button} from "reactstrap";
/**
 * Class for the reviewing the notifications 
 */
class ReviewNotifications extends Component {
  /**
   * Responsible for showing a container containing all the notifications sent to the user
   * @returns Components that will be display the notifications, and will be used in AccountOverview.js
   */
  render() {
    let Notifications = "";
    Notifications = this.props.data_be.data_be.notifications.map((notification) => {
      return(
        <div key= {notification._id} className="ReadNotificationsRow">>
          <div className="row">
            <div className="col-9">
              <h5 className="ReadNotificationsEvents"> 
                {notification.event} 
              </h5>
            </div>
            <div className="col-3"> 
              {notification.read===false?(
                  <div>
                    <Button className="ReadNotificationsTrueButton">
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
    return (
      <div>
        <div className="row">
          <h1 className="BigHeader">Notifications</h1>
        </div>
        {Notifications}
      </div>
    );
  }
}
export default ReviewNotifications;
