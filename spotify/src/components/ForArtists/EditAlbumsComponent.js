
import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class EditAlbumsComponent extends Component {
    /**
     * 
     * @param {Object} props
     * @param {Object} isLoading determines whether the component should be reloaded or not
     * @param {Object} actualAlbums all the albums in the db
     * @param {Object} artistAlbums the component itself to be rendered 
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            actualAlbums: this.props.data_be.data_be.albums,
            artistsAlbums: "",
        }
    }
    allAlbums = this.props.data_be.data_be.albums
    /**
     * @param {Event} event
     * this function deletes the album with the given id from the album array
     */
    handleDelete = (event) => {
        console.log(event.currentTarget.id);
        this.allAlbums = this.allAlbums.filter(Album => Album._id !== event.currentTarget.id);
        console.log("i am");
        console.log(this.allAlbums);
        this.setState({ actualAlbums: this.allAlbums }, () => {
            console.log(this.state.actualAlbums);
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
    /**
   * Responsible for rendering the edit album interface and its elements on the screen
   * @returns edit album interface
   */
    render() {
        let i = 0;
        let allAlbums = this.state.actualAlbums;
        if (this.state.isLoading === true) {
            this.setState({
                artistsAlbums: allAlbums.map((Album) => {
                    while (Album.artists[i] !== undefined) {
                        if (Album.artists[i] === this.props.data_be.data_be.artists[0]._id) {
                            return (
                                <Container>
                                    <Row>
                                        <Col xs="12" md="12" sm="12" >
                                            <Link to="/forartists/albums/description">
                                                <img src={Album.image} alt="" className="album-img rounded img-fluid" />
                                            </Link>
                                            <h5 className="album-title">
                                                {Album.name}
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button size="lg" className="edit-albums-btn" id={Album._id} onClick={this.handleDelete}>
                                                Delete
                                </Button>
                                            <Button size="lg" className="edit-albums-btn" id={Album._id}>
                                                <Link to="/forartists/albums/edit/form">
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
            })
            this.setState({ isLoading: false });
        }
        else { }
        return (
            <Container>
                {this.getObjectLength(this.allAlbums) !== 0 ? this.state.artistsAlbums : <h5 id="no-songs-hdr">You have no Albums</h5>}
                <Row>
                    <Col className="" md="12" xs="12" sm="12" lg="12">
                        <Button size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums">
                                Back
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );

    }
}
export default EditAlbumsComponent;
