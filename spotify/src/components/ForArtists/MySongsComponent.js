import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom'
import AddSong from "./AddSongsComponent";

class MySongs extends Component {
    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
    }
    /**
     * renders artist tracks
     * @returns interface for all tracks of an artist
     */
    render() {
        let allTracks = this.props.data_be.data_be.tracks;
        let i = 0;
        console.log(allTracks);
        console.log(this.props.data_be.data_be.artists[0].tracks)
        let artistSongs = this.props.data_be.data_be.tracks.map((tracks) => {
            while (tracks.artists[i] !== undefined) {
                if (tracks.artists[i].name === this.props.data_be.data_be.artists[0].name) {
                    return (
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
                    )
                }
                i++;
            }
            i = 0;

        });
        return (
            <Container>
                <Row>
                    {artistSongs}
                </Row>
                <Row>
                    <Col offset="6" className="edit-btn">
                        <Button size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs/edit">
                                Edit Songs
                            </Link>
                        </Button>
                        <Button size="lg" className="edit-albums-btn">
                            <Link to="/forartists/songs/add">Add Song</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default MySongs;