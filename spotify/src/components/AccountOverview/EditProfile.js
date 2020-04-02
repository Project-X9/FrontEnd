import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditProfile extends Component {
render(){
    return (
        <div>
            <div className="row PageEditProfileBigHeader">
                <h1 className="EditProfileBigHeader">Edit profile</h1>
            </div>
            <Form className="EditProfileContent">
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
                <div className="row">
                    <div className="col">
                        <Label className="EditProfileLabel" for="exampleSelect">Date of birth</Label>
                        <Input className="EditProfileInputSelection" type="select" name="select" id="exampleSelect">
                        <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option>
                        <option>06</option><option>07</option><option>08</option><option>09</option><option>10</option>
                        <option>11</option><option>12</option>
                        </Input>
                    </div>
                    <div className="col  BringingItDown">
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
                    <div className="col  BringingItDown">
                        <Input className="EditProfileInputSelection" type="textarea" name="text" id="exampleText" />
                    </div>
                </div>
            </FormGroup>
            <FormGroup>
                
            </FormGroup>
            
           
            
            <Button>Submit</Button>
            </Form>
        </div>
    );
    }
}

export default EditProfile;
