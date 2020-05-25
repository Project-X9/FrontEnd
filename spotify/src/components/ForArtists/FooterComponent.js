import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./FooterComponent.css";
class ArtistFooter extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row className="footer">
                    <Col xs="12" md="12" sm="12" lg="4">
                        <Link to="/home">
                            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                                alt="Logo"></img>
                        </Link>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h5 className="list-header">Useful Links</h5>
                        <ul>
                            <li className="list-element"><Link to="/home">Home</Link></li>
                            <li className="list-element">
                                <Link to="/webplayer/home">Web Player</Link>
                            </li>
                            <li className="list-element">
                                <Link to="/signin">Back to User</Link>
                            </li>
                            <li className="list-element">
                                <Link to="/home">
                                    Help
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <h5 className="list-header">Company</h5>
                        <ul>
                            <li className="list-element">
                                <Link to="/home">
                                    About
                                </Link>
                            </li>
                            <li className="list-element">
                                <Link to="/home">
                                    Jobs
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ArtistFooter;