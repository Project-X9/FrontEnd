import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class EditAlbumsComponent extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" />
                        <h5 className="album-title">
                            Album title
                        </h5>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            Delete
                    </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums/edit/form">
                                Edit
                            </Link>
                        </Button>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" />
                        <h5 className="album-title">
                            Album Title
                        </h5>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            Delete
                    </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums/edit/form">
                                Edit
                            </Link>
                        </Button>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" />
                        <h5 className="album-title">
                            Album Title
                        </h5>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            Delete
                        </Button>
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums/edit/form">
                                Edit
                            </Link>
                        </Button>
                    </Col>
                    <Col offset="6" className="edit-btn">
                        <Button outline color="success" size="lg" className="edit-albums-btn">
                            <Link to="/forartists/albums">Back</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default EditAlbumsComponent;