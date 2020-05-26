import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import AlbumDescription from "./AlbumDescriptionComponent";

class MyAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
    }
    handleSongInAlbumClick = () => {
        this.setState({
            active: "songAlbum"
        });
        console.log(this.state.active);
    }

    handleBackClick = () => {
        this.setState({
            active: ""
        });
    }
    render() {
        return (
            this.state.active == "songAlbum" ?
                <Container>
                    <Row>
                        <AlbumDescription />
                    </Row>
                    <Row>
                        <Col offset="6" className="back-btn">
                            <Button outline color="success" size="lg" onClick={this.handleBackClick}>
                                Back
                            </Button>
                        </Col>
                    </Row>
                </Container> :
                <Row>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" onClick={this.handleSongInAlbumClick} />
                        <h5 className="album-title">
                            Album title
                    </h5>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" onClick={this.handleSongInAlbumClick} />
                        <h5 className="album-title">
                            Album Title
                    </h5>
                    </Col>
                    <Col xs="12" md="12" sm="12" lg="4">
                        <img src="https://res.cloudinary.com/dyki04uxl/image/upload/v1590425257/G7qS7TVN_400x400_ic5jm9.jpg" alt="" className="album-img rounded img-fluid" onClick={this.handleSongInAlbumClick} />
                        <h5 className="album-title">
                            Album Title
                    </h5>
                    </Col>
                    <Col offset="6" className="edit-btn">
                        <Button outline color="success" size="lg">
                            Edit Albums
                    </Button>
                    </Col>
                </Row>
        );
    }
}
export default MyAlbums;