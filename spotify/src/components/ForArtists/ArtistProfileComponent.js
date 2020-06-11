import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class ArtistProfile extends Component {
    constructor(props) {
        super(props);
    }
    getObjectLength = (obj) => {
        var length = 0;
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                length++;
            }
        }
        return length;
    }
    render() {
        let numberOfAlbums = this.getObjectLength(this.props.data_be.data_be.artists[0].albums);
        let nubmerOfSongs = this.getObjectLength(this.props.data_be.data_be.artists[0].tracks);
        let nubmerOfFollowers = this.getObjectLength(this.props.data_be.data_be.artists[0].followers);

        console.log(this.props.data_be.data_be.artists[0]);
        return (
            <Container>
                <Row >
                    <Col xs="12" md="12" sm="12" lg="12">
                        <h3 className="profile-header"> </h3>
                    </Col>
                </Row>

                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="name-header">Name:  </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="name">{this.props.data_be.data_be.artists[0].name}</p>
                    </Col>
                </Row>

                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="email-header">Email: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="email">{this.props.data_be.data_be.artists[0].email}</p>
                    </Col>
                </Row>
                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="bio-header">Bio: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="bio">{this.props.data_be.data_be.artists[0].Bio}</p>
                    </Col>
                </Row>
                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="albums-header">Number of Albums: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="albums-count">{numberOfAlbums}</p>
                    </Col>
                </Row>
                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="songs-header">Number of Songs: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="songs-count">{nubmerOfSongs}</p>
                    </Col>
                </Row>

                <Row className="row-area">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h6 className="songs-header">Number of Followers: </h6>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="8">
                        <p className="songs-count">{nubmerOfFollowers}</p>
                    </Col>
                </Row>
                <Row>
                    <Col offset="6" className="edit-btn">
                        <Button outline color="success" size="lg" className="edit-albums-btn">
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