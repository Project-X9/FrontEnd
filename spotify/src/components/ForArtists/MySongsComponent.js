import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom'
class MySongs extends Component {
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
                    </Col>
                    <Col md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                    </h5>
                        <h6 className="song-duration">
                            03:14
                    </h6>
                    </Col>
                    <Col md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                    </h5>
                        <h6 className="song-duration">
                            03:14
                    </h6>
                    </Col>
                </Row>
                <Row>
                    <Col offset="6" className="edit-btn">
                        <Button outline color="success" size="lg">
                            <Link to="/forartists/songs/edit">
                                Edit Songs
                            </Link>
                        </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs/add">Add Song</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default MySongs;