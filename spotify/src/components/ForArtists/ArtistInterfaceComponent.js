import React, { Component } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import "./ArtistInterfaceComponent.css";
import ArtistProfile from "./ArtistProfileComponent";
import MyAlbums from "./MyAlbumsComponent";
import MySongs from "./MySongsComponent";
import ArtistFooter from "./FooterComponent";
import AlbumDescription from "./AlbumDescriptionComponent";
import EditAlbumsComponent from "./EditAlbumsComponent";
import AddAlbum from "./AddAlbumComponent";
import EditAlbum from "./EditAlbumFormComponent";
import EditSongs from "./EditSongsComponent";
import EditSongsForm from "./EditSongsFormComponent";
import EditArtistProfile from "./EditProfileComponent";
import AddSong from "./AddSongsComponent";

class ArtistInterface extends Component {
    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
    }
    clickedSong = "i am the clicked song";

    /**
   * Responsible for rendering the artist interface m and its elements on the screen
   * @returns artist interface
   */

    render() {

        return (
            <div>
                <Container className="artist-interface" fluid={true}>
                    <Row className="header">
                        <Col xs="12" sm="12" md="12" lg="4">
                            <Link to="/home">
                                <img className="top-logo"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                                    alt="Logo"
                                />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="m-auto">
                        <Col className="sidebar-area-col" xs="12" sm="12" md="12" lg="4">
                            <div className="sidebar-area">
                                <Link className="AppearBig" to="forartists/profile">
                                    <img src={this.props.data_be.data_be.artists[0].image} alt="your-image" className="artist-img rounded-circle img-fluid" />
                                </Link>
                                <Button>
                                    <Link to="/forartists/profile" >
                                        <i className="fa fa-home"> My Profile</i>
                                    </Link>
                                </Button>
                                <Button>
                                    <Link to="/forartists/songs">
                                        <i className="fa fa-music"> My Songs</i>
                                    </Link>
                                </Button>
                                <Button>
                                    <Link to="/forartists/albums">
                                        <i className="fa fa-bars"> My Albums</i>
                                    </Link>
                                </Button>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="8">
                            <Switch>
                                <Route
                                    exact
                                    path="/forartists/profile"
                                    component={() => <ArtistProfile data_be={this.props.data_be}
                                        token={this.props.token}
                                    />}
                                />

                                <Route
                                    exact
                                    path="/forartists/songs"
                                    component={() => <MySongs data_be={this.props.data_be} />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums"
                                    component={() => <MyAlbums data_be={this.props.data_be} />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/description"
                                    component={() => <AlbumDescription data_be={this.props.data_be} />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/edit"
                                    component={() => <EditAlbumsComponent data_be={this.props.data_be} />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/add"
                                    component={() => <AddAlbum data_be={this.props.data_be}
                                        reseteditprofile={this.props.reseteditprofile}
                                    />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/edit/form"
                                    component={() => <EditAlbum data_be={this.props.data_be} />}
                                />

                                <Route
                                    exact
                                    path="/forartists/songs/edit"
                                    component={() => <EditSongs data_be={this.props.data_be}
                                        clickedSong={this.clickedSong} />}
                                />
                                <Route
                                    exact
                                    path="/forartists/songs/add"
                                    component={() => <AddSong data_be={this.props.data_be}
                                        reseteditprofile={this.props.reseteditprofile}
                                    />}
                                />
                                <Route
                                    exact
                                    path="/forartists/songs/edit/form"
                                    component={() => <EditSongsForm data_be={this.props.data_be}
                                        clickedSong={this.clickedSong} />}
                                />

                                <Route
                                    exact
                                    path="/forartists/profile/edit"
                                    component={() => <EditArtistProfile data_be={this.props.data_be}
                                        token={this.props.token}
                                        postUpdatedArtist={this.props.postUpdatedArtist}
                                    />}
                                />
                                <Redirect to="/forartists/profile" />
                            </Switch>
                        </Col>
                    </Row>
                    <ArtistFooter />
                </Container>
            </div>
        );
    }

}
export default ArtistInterface;