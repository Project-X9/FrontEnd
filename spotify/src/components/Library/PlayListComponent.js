import React, { Component } from "react";

import { 
   Button, Row, Col,} from 'reactstrap'; 
import {Link,} from "react-router-dom";

import "./Page.css";

class PlayList extends Component {
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
                            <h1 className="header_playList">Playlists</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={12} className="m-0 customizedColForCards">
                            <div className="gridView">
                                <div className="LikedSongs">
                                    <div draggable="true">
                                        <div className="showLiked">
                                            <div className="insideLiked">
                                                <span className="customizedSpan"></span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span className="customizedSpan"></span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span className="customizedSpan"></span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                            </div>
                                        </div>
                                        <div className="titleLiked">
                                            <Row className="displayFlex_hassan">
                                                <Col  md={12}>
                                                    <Link className="likedNav" to="/">
                                                        <span dir="auto" className="likedSongsSpan">Liked Songs</span>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col  md={12}>
                                                    <div className="noOflikedSongs flexRowOfLibraryPage">1 Liked song</div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                       
                                    </div>
                                    <Row className="playButtonOfLikedSongs">
                                        <Col  md={12}>
                                            <div className="displayButton">
                                            <Button className="PlayButton">
                                            <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor">
                                                </polygon>
                                            </svg>
                                            </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="CardsLibrary">
                                    <Row>
                                        <Col>
                                            <div>
                                                <div className="cardPhoto">
                                                    <div className="imageHolder">
                                                        <img src="https://i.scdn.co/image/ab67706f000000021c6e257c426955c06bdfb9ef" alt="" className="theimage"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="TextBelowTheImage">
                                        <Col md={12}>
                                            <Row className="cardTitle" >
                                                <Col md={12}>
                                                    <Link className="titlePlaylistLink">Todays Best Egyptsadasdasd</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="desciptionPlaylistLink">
                                                        <span>The finest and freshest Egyptian hits. Cover: Wegz.</span>
                                                        <span>The finest and freshest Egyptian hits. Cover: Wegz.</span>
                                                        <span>The finest and freshest Egyptian hits. Cover: Wegz.</span>
                                                        <span>The finest and freshest Egyptian hits. Cover: Wegz.</span>
                                                        <span>The finest and freshest Egyptian hits. Cover: Wegz.</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="playButtonPlayList">
                                        <Col md={12} >
                                            <div>
                                                <Button className="theButtonItself"> 
                                                <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                                </Button>
                                            </div>
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
export default PlayList;
