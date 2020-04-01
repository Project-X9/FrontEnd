import React, { Component } from "react";

import { 
   Button, Row, Col,} from 'reactstrap'; 
import {Link,} from "react-router-dom";

import "./Page.css";
import "./ArtistCard.css"


class Artists extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId:''
        };      
    }

    render(){
        return(
            <div>
            <div className="LibraryPageBody">
            <div className="container MainViewPlaylsit">
                <div className="sectionPlayList">
                    <Row>
                        <Col  md={12}>
                            <h1 className="header_playList">Artists</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={12} className="customizedColForCards">
                            <div className="gridView">
                                <div className="CardsLibrary">
                                    <Row>
                                        <Col>
                                            <div>
                                                <div className="cardPhoto_ArtistPage">
                                                    <div className="imageHolder_ArtistPage">
                                                        <img src="https://i.scdn.co/image/ee11ffb4c0f334e4c958ed051bbaf5f720751c9d" alt="" className="theimage_ArtistPage  "></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mr-auto">
                                        <Col md={12}>
                                            <Row className="cardTitle" >
                                                <Col md={12}>
                                                    <Link className="titlePlaylistLink">Amr Diab</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="desciptionPlaylistLink">
                                                        <span>Artist</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                <div className="displayButton">
                                                    <div className="Artist_playButtonPlayList">
                                                        <Button className="theButtonItself_Artist "> 
                                                        <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                                        </Button>
                                                    </div>
                                                </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </div>
        </div>
        </div>        )
    }
}
export default Artists;
