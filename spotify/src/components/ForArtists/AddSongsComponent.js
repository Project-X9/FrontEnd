import React, { Component } from 'react';
import { Col, Row, Container, Button, Label } from 'reactstrap'
import { Link } from "react-router-dom"
import { Control, Form } from 'react-redux-form'
class AddSong extends Component {
    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
    }
    /**
     * @param {Object} values adds the song from the form to the songs array
     */
    handleAddSong = values => {
        this.props.reseteditprofile();
        let newSong = {
            album: "",
            artists: [{
                name: this.props.data_be.data_be.artists[0].name
            }],
            description: values.description,
            duration: "",
            genres: [],
            imageUrl: values.image,
            likers: [],
            name: values.name,
            playcount: "",
            url: values.song,
            _id: values.name,
        }
        if (newSong.name !== undefined && newSong.name !== undefined && newSong.artists[0].name !== undefined)
            this.props.data_be.data_be.tracks.push(newSong);
        else
            alert("wrong data entered");
    }
    /**
   * Responsible for rendering the add song form and its elements on the screen
   * @returns a form for add song
   */
    render() {
        return (
            <Container>
                <Form
                    model="editprofie"
                    onSubmit={(values) => {
                        this.handleAddSong(values)
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
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <Label className="add-album-label">Song URL :</Label>
                            <Control.text
                                className="form-control add-album-img-fld"
                                model=".song"
                                id="song"
                                name="song"
                                placeholder="New Song Url"
                                required="true"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button className="edit-albums-btn" size="lg">
                                <Link to="/forartists/songs">
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
export default AddSong;