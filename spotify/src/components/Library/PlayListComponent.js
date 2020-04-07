import React, { Component } from "react";

import { 
   Button, Row, Col,} from 'reactstrap'; 
import {Link,Redirect} from "react-router-dom";
import "./Page.css";


class PlayList extends Component {
    constructor(props){
        super(props);
        this.state={
            playListadded:false
            
        };     
   }

    handleRenderingPlaylist(data){

        this.props.handleCurrentPlayList(data);
        this.setState({
            playListadded:true
        })
    }
    render(){
        if(this.state.playListadded === true)
        {
            var redirected = <Redirect to="/webplayer/nowplay"></Redirect>

        }
        if(this.props.isSignedIn.isSignedIn === true)
        {
        if(this.props.data_be.data_be.playlists.length === 0)
        {
            var RenderNoLikedplayLists=() =>{
                return(
                    <div className="NolikedLevelZero">
                    <div className="NolikedLevelOne">
                        <div className="NolikedLevelTwo">
                            <div className="row TakeitDown">
                                <div className="col-xs-12 NolikedLevelThree">
                                <div className="SomeheighPlease">
                                    <svg width="51" height="52" viewBox="0 0 51 52" xmlns="http://www.w3.org/2000/svg">
                                        <title>Add Playlist Icon</title>
                                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10c0-5.524-4.477-10-10-10zm7 11h-6v6H9v-6H3V9h6V3h2v6h6v2zm7.75-3.655c.118.653.188 1.32.217 2L49 4.234v27.03c-1.65-2.044-4.174-3.356-7-3.356-4.962 0-9 4.037-9 9 0 4.962 4.038 9 9 9s9-4.038 9-9V1.764l-26.25 5.58zM42 43.91c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-25-6.556C15.348 35.31 12.826 34 10 34c-4.963 0-9 4.037-9 9 0 4.96 4.037 9 9 9s9-4.04 9-9V21.97c-.632.476-1.296.912-2 1.285v14.097zM10 50c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.858-3.14 7-7 7z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <Row>
                                        <Col md={12}>
                                            <h1 class="YourFirstInAll">Create your first playlist</h1>
                                            <h4 class="_1bfd68987bbac2dd824e5db895bd3c57-scss">We’ll help you make the perfect mixtape, minus the tape.</h4>
                                            <button class="_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss" type="button">Create new playlist</button>
                                        </Col>
                                </Row>
                                </div>
                            </div>                        
                        </div>                         

                    </div>                                    
                </div>  

                )
            }
        }
        var RenderUserPlayLists = this.props.data_be.data_be.playlists.map((PlayLists)=>
        {
            //make a condition if it requires in the future
            return(

                <Button className="customizedButtonForOnclick" onClick={()=>this.handleRenderingPlaylist(PlayLists)}>
                    <Link to="/webplayer/nowplay">
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
                                    <Link className="titlePlaylistLink" >{PlayLists.name}</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="desciptionPlaylistLink">
                                        {/* {this.props.id.id === PlayLists.authorId ? (
                                        <span>by {this.props.data.data[this.props.id.id-1].name}</span>
                                        ) : ( */}
                                        <span>{PlayLists.description}</span>
                                        {/* )} */}
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
                </Link>
            </Button>
            )
    }
        )
}

        return(
            
            <div>
                {this.props.isSignedIn.isSignedIn === true ? (
                    <div>
                    {redirected}
            <div className="container MainViewPlaylsit">
                <div className="sectionPlayList">
                    {this.props.data_be.data_be.playlists.length ===0 ? (
                        <div>{RenderNoLikedplayLists()}</div>
                        // <div></div>
                    ) :(
                        <div>
                            <Row>
                                <Col  md={12}>
                                    <h1 className="header_playList">Playlists</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md={12} className="m-0 customizedColForCards">
                                    <div className="gridView">

                                        {this.props.data_be.data_be.tracks.length !== 0 ? (
                                                <div className="LikedSongs">
                                                    <div draggable="true">
                                                        <div className="showLiked">
                                                            <div className="insideLiked">
                                                                { this.props.data_be.data_be.tracks.map((song)=>{
                                                                    return( 
                                                                    <span key={song.id}>
                                                                    <span></span>
                                                                    <span className="customizedSpan"></span>
                                                                    <span dir="auto">{song.artists[0].name}</span>
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
                                                                    <div className="noOflikedSongs flexRowOfLibraryPage">{this.props.data_be.data_be.tracks.length} Liked Songs</div>
                                                                </Col>
                                                            </Row>

                                                        </div>
                                                    </div>
                                                    <Row className="playButtonOfLikedSongs">
                                                        <Col  md={12}>
                                                            <div className="displayButton">
                                                            <Button className="PlayButton">
                                                                <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                                                                    <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                                                                </svg>
                                                            </Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>  
                                        ):(
                                            <div></div>
                                        )}
                                        {RenderUserPlayLists}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                    }
                   
                </div>
             </div>
                    </div>
                ):(
                    <div></div>
                )}
          
        </div>        )
}
}
export default PlayList;
