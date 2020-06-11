import React, { Component } from 'react';
import { Col, Row, Container, Button, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, Form, Errors } from 'react-redux-form'
class EditArtistProfile extends Component {
    /**
     * 
     * @param {Object} props
     * 
     */
    constructor(props) {
        super(props);
    }
    /** responsible for patching the info added in the form to the artist for edit profile
     * @param {Object} values the values in the form
     */
    handlePatchedInfo = (values) => {
        //this.props.resetartisteditprofile();
        this.props.postUpdatedArtist(
            this.props.data_be.data_be.artists[0]._id,
            values.name,
            values.email,
            values.bio,
            values.image,
            this.props.token.token
        );
    };
    /**
  * Responsible for rendering the edit profile form and its elements on the screen
  * @returns a form for edit profile
  */
    render() {
        return (
            <Container>
                <Form
                    model="artisteditprofile"
                    onSubmit={(values) => this.handlePatchedInfo(values)}>
                    <Row className="form-group">
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Name :</Label>
                            <Control.text
                                className="form-control add-album-name"
                                model=".name"
                                id="name"
                                name="name"
                                placeholder="New Name"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Email :</Label>
                            <Control.text
                                className="form-control add-album-name"
                                model=".email"
                                id="email"
                                name="email"
                                placeholder="New Email"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Bio :</Label>
                            <Control.textarea
                                className="form-control add-album-name"
                                model=".bio"
                                id="bio"
                                name="bio"
                                placeholder="New Bio"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Image :</Label>
                            <Control.text
                                className="form-control add-album-img-fld"
                                model=".image"
                                id="image"
                                name="image"
                                placeholder="New Image"
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col>
                            <Button className="edit-albums-btn" size="lg">
                                <Link to="/forartists/profile">
                                    Back
                                    </Link>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="edit-albums-btn" type="submit">
                                Save Changes
                                 </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}
export default EditArtistProfile;