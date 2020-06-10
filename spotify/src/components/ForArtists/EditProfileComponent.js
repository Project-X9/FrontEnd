import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Input, Label } from 'reactstrap'
class EditArtistProfile extends Component {
    render() {
        return (
            <Container>
                <Row className="add-album-form">
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={6} xs={6} md={6} lg={2} className="add-album-label">Name:</Label>
                            <Col sm={12} md={12} xs={12} lg={6}>
                                <Input name="albumName" placeholder="New Name" className="add-album-name"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="email" sm={6} xs={6} md={6} lg={2} className="add-album-label">Email:</Label>
                            <Col sm={12} md={12} xs={12} lg={6}>
                                <Input type="email" name="albumName" placeholder="New Email" className="add-album-name"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="bio" sm={6} xs={6} md={6} lg={2} className="add-album-label">Bio:</Label>
                            <Col sm={12} md={12} xs={12} lg={6}>
                                <Input type="textarea" name="albumName" placeholder="New Bio" className="add-album-name"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={6} xs={6} md={6} lg={2} className="add-album-label">Image:</Label>
                            <Col sm={12} md={12} xs={12} lg={6}>
                                <Input type="text" name="imageURL" id="newImage" placeholder="New Image URL" className="add-album-img-fld"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button type="submit" outline="success">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </Row>
            </Container>
        );
    }
}
export default EditArtistProfile;