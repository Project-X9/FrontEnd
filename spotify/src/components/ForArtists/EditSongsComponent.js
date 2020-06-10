import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class EditSongs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="" md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                    </h5>
                        <h6 className="song-duration">
                            03:14
                    </h6>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            Delete
                        </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs/edit/form">
                                Edit
                            </Link>
                        </Button>
                    </Col>
                    <Col md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                    </h5>
                        <h6 className="song-duration">
                            03:14
                    </h6>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            Delete
                        </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs/edit/form">
                                Edit
                        </Link>
                        </Button>
                    </Col>
                    <Col md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                    </h5>
                        <h6 className="song-duration">
                            03:14
                    </h6>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            Delete
                        </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs/edit/form">
                                Edit
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="" md="12" xs="12" sm="12" lg="12">
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs">
                                Back
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default EditSongs;