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
import AddSong from "./AddSongsComponent";
import EditArtistProfile from "./EditProfileComponent";
class ArtistInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "profile"
        }
    }

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
                                    <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="your-image" className="artist-img rounded-circle img-fluid" />
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
                                    component={() => <ArtistProfile />}
                                />

                                <Route
                                    exact
                                    path="/forartists/songs"
                                    component={() => <MySongs />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums"
                                    component={() => <MyAlbums />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/description"
                                    component={() => <AlbumDescription />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/edit"
                                    component={() => <EditAlbumsComponent />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/add"
                                    component={() => <AddAlbum />}
                                />

                                <Route
                                    exact
                                    path="/forartists/albums/edit/form"
                                    component={() => <EditAlbum />}
                                />

                                <Route
                                    exact
                                    path="/forartists/songs/edit"
                                    component={() => <EditSongs />}
                                />

                                <Route
                                    exact
                                    path="/forartists/songs/edit/form"
                                    component={() => <EditSongsForm />}
                                />

                                <Route
                                    exact
                                    path="/forartists/songs/add"
                                    component={() => <AddSong />}
                                />

                                <Route
                                    exact
                                    path="/forartists/profile/edit"
                                    component={() => <EditArtistProfile />}
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