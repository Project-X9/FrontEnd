import React, { Component } from "react";

import { 
   Button, Row, Col,} from 'reactstrap'; 
import {Link,} from "react-router-dom";

import "./Page.css";

class PlayList extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId: this.props.id.id
        };     
        // alert(this.state.tempId) 
    }

   
    
    render(){
        const RenderLikedOrNot =this.props.playLists.playLists.map((PlayLists)=>
        {
            if(PlayLists.name==="Liked_Songs" && PlayLists.tracks.length !== 0){
                return(
                    <div className="LikedSongs">
                                    <div draggable="true">
                                        <div className="showLiked">
                                            <div className="insideLiked">
                                                { PlayLists.tracks.map((song)=>{
                                                    return( 
                                                    <span key={song.id}>
                                                    {/* <span>  </span> */}
                                                    <span className="customizedSpan"></span>
                                                    <span dir="auto">{song.artist}</span>
                                                    <span className="customizedSpan">{song.name}•</span>
                                                     </span>   
                                                    )
                                                }) 
                                                }
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
                                            <div className="noOflikedSongs flexRowOfLibraryPage">{PlayLists.tracks.length} Liked Songs</div>
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
                )

            }
        }
        )
        const RenderUserPlayLists = this.props.playLists.playLists.map((PlayLists)=>
        {
            //make a condition if it requires in the future
            if(PlayLists.name !== "Liked_Songs")
            {
            return(
                <div key= {PlayLists.id}className="CardsLibrary">
                    <Row>
                        <Col>
                            <div>
                                <div className="cardPhoto">
                                    <div className="imageHolder">
                                        <img src={PlayLists.image} alt="" className="theimage"></img>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="TextBelowTheImage">
                        <Col md={12}>
                            <Row className="cardTitle" >
                                <Col md={12}>
                                    <Link className="titlePlaylistLink">{PlayLists.name}</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="desciptionPlaylistLink">
                                        {this.props.id.id === PlayLists.authorId ? (
                                        <span>by {this.props.data.data[this.props.id.id-1].name}</span>
                                        ) : (
                                        <span>{PlayLists.description}</span>
                                        )}
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
            )
        }
    }
        )
        
        return(
            <div>
            {/* <div className="LibraryPageBody"> */}
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
                                {RenderLikedOrNot}
                                {RenderUserPlayLists}
                            </div>
                        </Col>
                    </Row>
                </div>
                
            {/* </div> */}
        </div>
        </div>        )
    }
}
export default PlayList;
