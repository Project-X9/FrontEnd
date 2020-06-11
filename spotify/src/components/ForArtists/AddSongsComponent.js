import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from "react-router-dom"
class AddSong extends Component {
    /**
   * Responsible for rendering the add song form and its elements on the screen
   * @returns a form for add song
   */
    render() {
        return (
            <Container>
                <Row className="add-album-form">
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={12} xs={12} md={12} lg={3} className="add-album-label">Name :</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input name="albumName" placeholder="New Song Name" className="add-album-name-fld"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={12} xs={12} md={12} lg={3} className="add-album-label">Image URL :</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input type="text" name="imageURL" id="imageURL" placeholder="New Song Image URL" className="add-album-img-fld"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={12} xs={12} md={12} lg={3} className="add-album-label">Song URL :</Label>
                            <Col sm={12} md={12} xs={12} lg={6}>
                                <Input type="text" name="songURL" id="songURL" placeholder="New Song URL" className="add-album-img-fld"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button type="submit" outline="success" className="edit-albums-btn">Submit</Button>
                                <Button outline="success" className="edit-albums-btn">
                                    <Link to="/forartists/songs">Back
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
export default AddSong;