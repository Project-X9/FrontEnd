import React, { Component } from 'react';
import { Col, Row, Container, Button, Label } from 'reactstrap'
import { Form, Control } from 'react-redux-form'
import { Link } from "react-router-dom"
class AddAlbum extends Component {
    constructor(props) {
        super(props);
    }
    handleAddAlbum = values => {
        this.props.reseteditprofile();
        let newAlbum = {
            artists: [this.props.data_be.data_be.artists[0]._id],
            author: this.props.data_be.data_be.artists[0],
            dateCreated: new Date().toISOString(),
            description: values.description,
            followers: [],
            genres: [],
            image: values.image,
            name: values.name,
            tracks: [],
            _id: values.name,
        }
        if (newAlbum.name !== undefined && newAlbum.name !== undefined && newAlbum.artists !== undefined)
            this.props.data_be.data_be.albums.push(newAlbum);
        else
            alert("wrong data entered");
    }
    /**
   * Responsible for rendering the add album form and its elements on the screen
   * @returns a from for add album
   */
    render() {
        return (
            <Container>
                <Form
                    model="editprofie"
                    onSubmit={(values) => {
                        this.handleAddAlbum(values)
                    }}>
                    <Row className="form-group">
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Name :</Label>
                            <Control.text
                                className="form-control add-album-name"
                                model=".name"
                                id="name"
                                name="name"
                                placeholder="New Name"
                                required="true"
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
                                required="true"

                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Description :</Label>
                            <Control.text
                                className="form-control add-album-img-fld"
                                model=".description"
                                id="description"
                                name="description"
                                placeholder="New Description"
                                required="true"

                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button className="edit-albums-btn" size="lg">
                                <Link to="/forartists/albums">
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
export default AddAlbum;