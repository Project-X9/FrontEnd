import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class ArtistProfile extends Component {
    render() {
        return (
            <Container>
                <Row >
                    <Col xs="12" md="12" sm="12" lg="12">
                        <h3 className="profile-header">Profile </h3>
                    </Col>
                </Row>

                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="name-header">Name: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="name">Amr Diab</p>
                    </Col>
                </Row>

                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="email-header">Email: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="email">hi@yahoo.com</p>
                    </Col>
                </Row>
                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="bio-header">Bio: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam corporis vitae. Aspernatur provident eos quis quo, quaerat possimus rem!</p>
                    </Col>
                </Row>
                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="albums-header">Number of Albums: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="albums-count">20</p>
                    </Col>
                </Row>
                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="songs-header">Number of Songs: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="songs-count">213</p>
                    </Col>
                </Row>
                <Row>
                    <Col offset="6" className="edit-btn">
                        <Button outline color="success" size="lg">
                            <Link to="/forartists/profile/edit">
                                Edit Profile
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ArtistProfile;