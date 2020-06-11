
import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class EditSongs extends Component {
    render() {
        let allTracks = this.props.data_be.data_be.tracks;
        let i = 0;
        let buttonId = 0;
        console.log(allTracks);
        console.log(this.props.data_be.data_be.artists[0].tracks)
        let artistSongs = this.props.data_be.data_be.tracks.map((tracks) => {
            while (tracks.artists[i] !== undefined) {
                if (tracks.artists[i].name === this.props.data_be.data_be.artists[0].name) {
                    return (
                        <Container>
                            <Row>
                                <Col className="" md="12" xs="12" sm="12" lg="4">
                                    <img src={tracks.imageUrl} alt="" className="song-img rounded img-fluid" />
                                    <h5 className="song-title">
                                        {tracks.name}
                                    </h5>
                                    <h6 className="song-duration">
                                        {tracks.duration}
                                    </h6>
                                    <h6 className="song-duration">
                                        {tracks.description}
                                    </h6>
                                    <h6 className="song-duration">
                                        {tracks.playcount}
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button outline color="success" size="lg" className="edit-albums-btn" id={tracks._id} >
                                        Delete
                        </Button>
                                    <Button outline color="success" size="lg" className="edit-albums-btn" id={tracks._id} >
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
                    )
                }
                i++;
            }
            i = 0;
        });
        return (
            <Container>
                {artistSongs}
            </Container>
        );
    }
}
export default EditSongs;