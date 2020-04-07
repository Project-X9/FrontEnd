import { Redirect,Link } from "react-router-dom";

import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Label } from "reactstrap";

const required = val => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = len => val => val && val.length >= len;
// const isNumber = (val) => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validDay = val => /^([1-9]|0[1-9]|[12]\d|3[01])$/i.test(val);
const validYear = val =>
  /^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/i.test(val); //1812 - 3048
const confEmail = val => val2 => val === val2;
const typeSelected = val => val === "male" || val === "female";
const monthSelected = val => val !== "null";


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempId: this.props.data_be.data_be._id,
    };
    this.handlePatchedInfo = this.handlePatchedInfo.bind(this);
  }

  handlePatchedInfo = (values) => {
    this.props.reseteditprofile();
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
          model="editprofie"
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
                placeholder="New Username"
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
                placeholder="New Email"
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
                placeholder="New Age"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col>
              <Button className="EditProfileCancelButton">
                <Link className="EditProfileLinkInsideCancelButton" to="/account/overview">
                  cancel
                </Link>
              </Button>
            </Col>
            <Col>
              <Button type="submit" className="EditProfileSaveButton">
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
