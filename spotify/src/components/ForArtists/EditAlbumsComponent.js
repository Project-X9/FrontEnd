
import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class EditAlbumsComponent extends Component {
    render() {
        let i = 0;
        let artistAlbums = this.props.data_be.data_be.albums.map((Album) => {
            while (Album.artists[i] !== undefined) {
                if (Album.artists[i] === this.props.data_be.data_be.artists[0]._id) {
                    return (
                        <Container>
                            <Row>
                                <Col xs="12" md="12" sm="12" lg="4">
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
                                    <Button outline color="success" size="lg" className="edit-albums-btn" id={Album._id}>
                                        Delete
                                </Button>
                                    <Button outline color="success" size="lg" className="edit-albums-btn" id={Album._id}>
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
        return (
            <Container>
                {artistAlbums}
            </Container>
        );
    }
}
export default EditAlbumsComponent;
