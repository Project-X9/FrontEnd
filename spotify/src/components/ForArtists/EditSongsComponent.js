
import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class EditSongs extends Component {
    /**
     * 
     * @param {Object} props
     * @param {Object} artistSongs the component itself to be rendered
     * @param {Object} actualSongs the tracks array of objects
     * @param {boolean} isLoading determines whether the component should be rendered or not 
     */
    constructor(props) {
        super(props);
        this.state = {
            artistSongs: "",
            actualSongs: this.props.data_be.data_be.tracks,
            isLoading: true,
        };
    }
    trackProp = this.props.data_be.data_be.tracks;
    /**
     * Responsible for deleting the track clicked 
     * @param {Event} event the click event that will trigger the deletion of the clicked track
     */
    handleDelete = (event) => {
        console.log(event.currentTarget.id);
        this.trackProp = this.trackProp.filter(track => track._id !== event.currentTarget.id);
        console.log("i am");
        console.log(this.trackProp);
        this.setState({ actualSongs: this.trackProp }, () => {
            console.log(this.state.actualSongs);
        })
        this.setState({
            isLoading: true,
        })

    }
    /**
     * @param {Object} obj
     * this function returns the length of an array of objects, used to count artists, songs, followers, etc...
     * @returns object array length
     */
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
        let i = 0;
        let allTracks = this.state.actualSongs;
        if (this.state.isLoading === true) {
            this.setState({
                artistSongs: allTracks.map((allTracks) => {
                    while (allTracks.artists[i] !== undefined) {
                        if (allTracks.artists[i].name === this.props.data_be.data_be.artists[0].name) {
                            console.log("hi")
                            return (
                                <Container>
                                    <Row>
                                        <Col className="" md="12" xs="12" sm="12" >
                                            <img src={allTracks.imageUrl} alt="" className="song-img rounded img-fluid" />
                                            <h5 className="song-title">
                                                {allTracks.name}
                                            </h5>
                                            <h6 className="song-duration">
                                                {allTracks.duration}
                                            </h6>
                                            <h6 className="song-duration">
                                                {allTracks.description}
                                            </h6>
                                            <h6 className="song-duration">
                                                {allTracks.playcount}
                                            </h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button size="lg" className="edit-albums-btn" id={allTracks._id} onClick={this.handleDelete}>
                                                Delete
                        </Button>
                                            <Button size="lg" className="edit-albums-btn" id={allTracks._id} >
                                                <Link to="/forartists/songs/edit/form">
                                                    Edit
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

                })
            });
            this.setState({ isLoading: false });
        }
        else { }
        return (
            <Container>
                {this.getObjectLength(this.trackProp) !== 0 ? this.state.artistSongs : <h5 id="no-songs-hdr">You have no Songs</h5>}
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