import React, { Component } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import { NavLink, Link, Redirect, Switch, Route } from "react-router-dom";
import ArtistFooter from "./FooterComponent";
import "./ArtistInterfaceComponent.css";
class ArtistInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Container className="artist-interface" fluid={true}>
                    <Row className="header">
                        <Col xs="12" sm="12" md="12" lg="12">
                            <Link to="/home">
                                <img className="top-logo"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                                    alt="Logo"
                                />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="m-auto">
                        <Col xs="12" sm="12" md="12" lg="4">
                            <div className="sidebar">
                                <Link className="AppearBig">
                                    <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="your-image" className="artist-img rounded-circle img-fluid" />
                                </Link>
                                <Link to="/artistsongs">
                                    <i className="fa fa-music"> My Songs</i>
                                </Link>
                                <Link to="/artistalbums">
                                    <i className="fa fa-bars"> My Albums</i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ArtistFooter />
            </div>
        );
    }

}
export default ArtistInterface;