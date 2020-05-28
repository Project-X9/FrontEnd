import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <Link to="/forartists/albums/description">
                            <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" />
                        </Link>
                        <h5 className="album-title">
                            Album title
                        </h5>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <Link to="/forartists/albums/description">
                            <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" />
                        </Link>
                        <h5 className="album-title">
                            Album Title
                        </h5>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <Link to="/forartists/albums/description">
                            <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" />
                        </Link>
                        <h5 className="album-title">
                            Album Title
                        </h5>
                    </Col>
                    <Col offset="6" className="edit-btn">
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums/edit">Edit Albums</Link>
                        </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums/add">Add Album</Link>
                        </Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default MyAlbums;