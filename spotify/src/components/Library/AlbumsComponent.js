import React, { Component } from "react";

import { 
   Button, Row, Col,} from 'reactstrap'; 
import {Link,} from "react-router-dom";

import "./Page.css";


class Albums extends Component {
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
                            <h1 className="header_playList">Albums</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={12} className="m-0 customizedColForCards">
                            <div className="gridView">
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
                                                    <Link className="titlePlaylistLink">To</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="desciptionPlaylistLink">
                                                        <span>T</span>
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
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="playButtonPlayList">
                                        <Col md={12} >
                                            <div >
                                                <Button className="theButtonItself"> 
                                                <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
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
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="playButtonPlayList">
                                        <Col md={12} >
                                            <div >
                                                <Button className="theButtonItself"> 
                                                <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
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
                                                    <Link className="titlePlaylistLink">To</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="desciptionPlaylistLink">
                                                        <span>T</span>
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
                                                    <Link className="titlePlaylistLink">To</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="desciptionPlaylistLink">
                                                        <span>T</span>
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
                                                    <Link className="titlePlaylistLink">To</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="desciptionPlaylistLink">
                                                        <span>T</span>
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
export default Albums;
