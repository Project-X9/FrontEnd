import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Link} from 'react-router-dom';
class AlbumDescription extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="12" xs="12" sm="12" lg="12">
                        <h3 className="album-header"> Album Title
                        </h3>
                    </Col>
                    <Col className="" md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                        </h5>
                        <h6 className="song-duration">
                            03:14
                        </h6>
                    </Col>
                    <Col md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                        </h5>
                        <h6 className="song-duration">
                            03:14
                        </h6>
                    </Col>
                    <Col md="12" xs="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="song-img rounded img-fluid" />
                        <h5 className="song-title">
                            title
                        </h5>
                        <h6 className="song-duration">
                            03:14
                        </h6>
                    </Col>

                </Row>
                <Row>
                    <Col offset="6" className="back-btn">
                        <Button outline color="success" size="lg" onClick={this.handleBackClick}>
                            <Link to="/forartists/albums">Back</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AlbumDescription;