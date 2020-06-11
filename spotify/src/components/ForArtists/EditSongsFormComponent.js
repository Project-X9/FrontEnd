import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
class EditSongForm extends Component {
    /**
   * Responsible for rendering the edit song form and its elements on the screen
   * @returns a form for edit song
   */
    render() {
        return (
            <Container>
                <Row className="add-album-form">
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={12} xs={12} md={12} lg={3} className="add-album-label">Name:</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input name="songName" id="songName " placeholder="New Song Name" className="add-album-name"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={12} xs={12} md={12} lg={3} className="add-album-label">Image:</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input type="text" name="imageURL" id="imageURL" placeholder="New Song Image URL" className="add-album-img-fld"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={12} xs={12} md={12} lg={3} className="add-album-label">Song Url:</Label>
                            <Col sm={12} md={12} xs={12} lg={8}>
                                <Input type="text" name="songURL" id="songURL" placeholder="New Song Image URL" className="add-album-img-fld"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button type="submit" outline="success" className="edit-albums-btn">Submit</Button>
                                <Button outline="success" className="edit-albums-btn">
                                    <Link to="/forartists/songs/edit">Back
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
export default EditSongForm;