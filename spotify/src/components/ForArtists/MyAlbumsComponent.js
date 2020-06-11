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
        let i = 0;
        let artistAlbums = this.props.data_be.data_be.albums.map((Album) => {
            while (Album.artists[i] !== undefined) {
                if (Album.artists[i] === this.props.data_be.data_be.artists[0]._id) {
                    return (
                        <Col xs="12" md="12" sm="12" lg="4">
                            <Link to="/forartists/albums/description">
                                <img src={Album.image} alt="" className="album-img rounded img-fluid" />
                            </Link>
                            <h5 className="album-title">
                                {Album.name}
                            </h5>
                        </Col>
                    )
                }
                i++;
            }
            i = 0;
        })
        console.log(this.props.data_be.data_be);


        return (
            <Container>
                <Row>
                    {artistAlbums}
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