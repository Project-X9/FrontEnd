import React, { Component } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import ArtistFooter from "./FooterComponent";
import "./ArtistInterfaceComponent.css";
import ArtistProfile from "./ArtistProfileComponent";
import MyAlbums from "./MyAlbumsComponent";
import MySongs from "./MySongsComponent";
class ArtistInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "profile"
        }
    }
    showArtistProfile = () => {
        this.setState({
            active: "profile"
        });
    }
    showArtistSongs = () => {
        this.setState({
            active: "songs"
        });
    }
    showArtistAlbums = () => {
        this.setState({
            active: "albums"
        });
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
                        <Col className="sidebar-col" xs="12" sm="12" md="12" lg="4">
                            <div className="sidebar">
                                <Link className="AppearBig">
                                    <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="your-image" className="artist-img rounded-circle img-fluid" />
                                </Link>
                                <Button onClick={this.showArtistProfile}>
                                    <i className="fa fa-home"> My Profile</i>
                                </Button>
                                <Button onClick={this.showArtistSongs}>
                                    <i className="fa fa-music"> My Songs</i>
                                </Button>
                                <Button onClick={this.showArtistAlbums}>
                                    <i className="fa fa-bars"> My Albums</i>
                                </Button>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="8">
                            {this.state.active == "profile" ?
                                <ArtistProfile />

                                : this.state.active == "songs" ?
                                    <MySongs />
                                    :
                                    <MyAlbums />}
                        </Col>
                    </Row>
                </Container>
                <ArtistFooter />
            </div>
        );
    }

}
export default ArtistInterface;