import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from "react-router-dom"
class AddAlbum extends Component {
    render() {
        return (
            <Container>
                <Row className="add-album-form">
                    <Form>
                        <FormGroup row>
                            <Label for="email" sm={12} xs={12} md={12} lg={3} className="add-album-label">Name:</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input name="albumName" placeholder="New Album Name" className="add-album-name"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={12} xs={12} md={12} lg={3} className="add-album-label">Image:</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input type="text" name="imageURL" id="newImage" placeholder="New Album Image URL" className="add-album-img-fld"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button type="submit" outline="success" className="edit-albums-btn">Submit</Button>
                            </Col>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button outline="success" className="edit-albums-btn">
                                    <Link to="/forartists/albums">Back
                                </Link>
                                </Button>
                            </Col>
                        </FormGroup>

                    </Form>

                </Row>
            </Container>
        );
    }
}
export default AddAlbum;