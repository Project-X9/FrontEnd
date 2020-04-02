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
        // alert(this.props.artist.artist.length)      
    }

    
    render(){
        const RenderArtistsCard =this.props.artist.artist.map((artist)=>{
            return(
                <div key={artist.id} className="CardsLibrary">
                    <Row>
                        <Col>
                            <div>
                                <div className="cardPhoto_ArtistPage">
                                    <div className="imageHolder_ArtistPage">
                                        <img src={artist.image} alt="" className="theimage_ArtistPage"></img>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="TextBelowTheImage">
                        <Col md={12}>
                            <Row className="cardTitle" >
                                <Col md={12}>
                                    <Link className="titlePlaylistLink">{artist.name}</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="desciptionPlaylistLink">
                                        <span>Artist</span>
                                    </div>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                    <Row className="playButtonPlayList">
                        <Col md={12}>
                        <div className="displayButton">
                            <div >
                                <Button className="theButtonItself"> 
                                <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                </Button>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
            )
        })
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
                                {RenderArtistsCard}
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
