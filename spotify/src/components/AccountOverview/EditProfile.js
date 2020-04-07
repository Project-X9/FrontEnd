import { Redirect } from "react-router-dom";

import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Label } from "reactstrap";

const typeSelected = (val) => val === "male" || val === "female";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempId: this.props.data_be.data_be._id,
    };
    this.handlePatchedInfo = this.handlePatchedInfo.bind(this);
  }

  handlePatchedInfo = (values) => {
    this.props.postupdatedFeedback(
      this.state.tempId,
      values.email,
      parseInt(values.age, 10),
      values.ID
    );
  };

  render() {
    let redirect = "";
    if (this.state.tempId === "") {
      redirect = <Redirect to="/signup" />;
    }

    return (
      <div className="container">
        {redirect}
        <h1 className="headerGreen">Edit Profile</h1>
        <hr />
        <Form
          model="feedback"
          onSubmit={(values) => this.handlePatchedInfo(values)}
        >
          {" "}
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Label>Name</Label>
              <Control.text
                className="form-control"
                model=".ID"
                id="ID"
                name="ID"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Label>Email</Label>
              <Control.text
                className="form-control"
                model=".email"
                id="email"
                name="email"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col xs={12} md={{ size: 6, offset: 3 }}>
              <Label>Age</Label>
              <Control.text
                className="form-control"
                model=".age"
                id="age"
                name="age"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col>
              <Button type="submit" className="signupbtn">
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default EditProfile;
