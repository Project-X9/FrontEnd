import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Input, Label } from 'reactstrap'
class AddSong extends Component {
    render() {
        return (
            <Container>
                <Row className="add-album-form">
                    <Form>
                        <FormGroup row>
                            <Label for="email" sm={2} xs={2} md={2} lg={2} className="add-album-label">Name:</Label>
                            <Col sm={10} md={10} xs={10} lg={6}>
                                <Input name="albumName" placeholder="New Song Name" className="add-album-name"></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="image" sm={2} xs={2} md={2} lg={2} className="add-album-label">Image:</Label>
                            <Col sm={10} md={10} xs={10} lg={6}>
                                <Input type="file" name="file" id="newImage" placeholder="New Song Image" className="add-album-img-fld"></Input>
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
export default AddSong;