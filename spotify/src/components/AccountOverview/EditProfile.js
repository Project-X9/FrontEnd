import React, { Component } from "react";
import {Col, Button, Row,} from 'reactstrap';
import {Control, Form, Errors,} from 'react-redux-form';
const validDay = val => /^([1-9]|0[1-9]|[12]\d|3[01])$/i.test(val);
const validYear = val =>
  /^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/i.test(val); //1812 - 3048
const typeSelected = val => val === "male" || val === "female";
const monthSelected = val => val !== "null";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        
      }


render(){
    return (
        <div>
            
            
        </div>
    );
    }
}

export default EditProfile;
{/* <Form className="EditProfileContent">
            <FormGroup>
                <Label className="EditProfileLabel" for="exampleEmail">Username</Label>
                <Input className="EditProfileInputText" type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label className="EditProfileLabel" for="exampleSelect">Gender</Label>
                <Input className="EditProfileInputSelection" type="select" name="select" id="exampleSelect">
                <option>Male</option>
                <option>Female</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <div className="row EditProfileLabelDate">
                    <Label className="EditProfileLabel" for="exampleSelect">Date of birth</Label>
                </div>
                <div className="row EditJustForBorder">
                    <div className="col">
                        <Input className="EditProfileInputSelection" type="select" name="select" id="exampleSelect">
                        <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option>
                        <option>06</option><option>07</option><option>08</option><option>09</option><option>10</option>
                        <option>11</option><option>12</option>
                        </Input>
                    </div>
                    <div className="col">
                        <Input className="EditProfileInputSelection" type="select" name="select" id="exampleSelect">
                        <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option>
                        <option>06</option><option>07</option><option>08</option><option>09</option><option>10</option>
                        <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>04</option><option>05</option>
                        <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
                        <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>04</option><option>05</option>
                        <option>26</option><option>27</option><option>28</option><option>29</option><option>30</option>
                        <option>31</option>
                        </Input>
                    </div>
                    <div className="col">
                        <Input className="EditProfileInputSelection" type="textarea" name="text" id="exampleText" />
                    </div>
                </div>
            </FormGroup>
            <div className="EditProfileButtonsPositioning"> 
                <Button className="EditProfileSaveButton">SAVE PROFILE</Button>
                <Button className="EditProfileCancelButton">CANCEL</Button>
            </div>
            
            </Form> */}
    //         <Form
    //         model="EditProfile"
    //         onSubmit={values => this.handleSubmit(values)}>
    //         <Row className="form-group">
    //             <Col xs={12} md={{ size: 6, offset: 3 }}>
    //             <Control.text
    //                 className="form-control"
    //                 model=".username"
    //                 placeholder="Username"
    //                 id="username"
    //                 name="username"
    //                 validators={{
    //                 required
    //                 }}
    //             />
    //             <Row className="ml-2">
    //                 <Errors
    //                 className="text-danger error"
    //                 model=".username"
    //                 show="touched"
    //                 messages={{
    //                     required: "Please enter username"
    //                 }}
    //                 />
    //             </Row>
    //             </Col>
    //         </Row>
    //   <Row className="form-group">
    //     <Col xs={4} md={{ size: 2, offset: 3 }}>
    //       <Control.text
    //         className="form-control"
    //         model=".editday"
    //         placeholder="Day"
    //         id="editday"
    //         name="editday"
    //         value={this.state.tempDay}
    //         validators={{
    //           required,
    //           validDay
    //         }}
    //       />
    //       <Errors
    //         className="text-danger error"
    //         model=".editday"
    //         show="touched"
    //         messages={{
    //           validDay: "Enter a valid day of the month"
    //         }}
    //       />
    //     </Col>
    //     <Col xs={4} md={2}>
    //       <Control.select
    //         className="form-control"
    //         model=".editmonth"
    //         name="editmonth"
            
    //         validators={{
    //           monthSelected,
    //           required
    //         }}
    //       >
    //         <option value="null">Month</option>
    //         <option>January</option>
    //         <option>February</option>
    //         <option>March</option>
    //         <option>April</option>
    //         <option>May</option>
    //         <option>June</option>
    //         <option>July</option>
    //         <option>August</option>
    //         <option>September</option>
    //         <option>October</option>
    //         <option>November</option>
    //         <option>December</option>
    //       </Control.select>
    //       <Errors
    //         className="text-danger error"
    //         model=".editmonth"
    //         show="touched"
    //         messages={{
    //           required: "Required",
    //           monthSelected: "Enter the month"
    //         }}
    //       />
    //     </Col>
    //     <Col xs={4} md={2}>
    //       <Control.text
    //         className="form-control"
    //         model=".edityear"
    //         placeholder="Year"
    //         id="edityear"
    //         name="edityear"
    //         value={this.state.tempYear}
    //         validators={{
    //           required,
    //           validYear
    //         }}
    //       />
    //       <Errors
    //         className="text-danger error"
    //         model=".edityear"
    //         show="touched"
    //         messages={{
    //           required: "Enter a year to continue",
    //           validYear: " Enter a valid year"
    //         }}
    //       />
    //     </Col>
    //   </Row>
    //   <Row className="form-group">
    //     <Col xs={12} md={8}>
    //       <div>
    //         <label className="p-3">
    //           <Control.radio
    //             model=".sex"
    //             value="male"
    //             id="editsex"
    //             name="editsex"
    //             validators={{
    //               typeSelected
    //             }}
    //           />{" "}
    //           Male
    //         </label>
    //         <label className="p-3">
    //           <Control.radio
    //             model=".editsex"
    //             value="female"
    //             id="editsex"
    //             name="editsex"
    //             validators={{
    //               typeSelected
    //             }}
    //           />{" "}
    //           Female
    //         </label>
    //         <Errors
    //           className="text-danger error"
    //           model=".editsex"
    //           show="touched"
    //           messages={{
    //             typeSelected: "Enter your gender"
    //           }}
    //         />
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row className="form-group">
    //     <Col xs={12} md={{ size: 6, offset: 3 }}>
    //       <Button model="submit" className="signupbtn">
    //         SignUp
    //       </Button>
    //     </Col>
    //   </Row>
    // </Form>