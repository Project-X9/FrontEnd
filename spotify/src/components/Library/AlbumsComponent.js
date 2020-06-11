import React, { Component } from "react";

import { 
   Button, Row, Col,} from 'reactstrap'; 
import {Link,Redirect} from "react-router-dom";

import "./Page.css";


class Albums extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId:'',
            playListadded:false
        };      
    }
    handleRenderingPlaylist(data){
        this.props.handleCurrentAlbums(data,this.props.token.token);
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
        if(this.props.data_be.data_be.albums.length === 0)
        {
            var RenderNoLikedAlbums=() =>{
                return(
                    <div className="NolikedLevelZero">
                    <div className="NolikedLevelOne">
                        <div className="NolikedLevelTwo">
                            <div className="row TakeitDown">
                                <div className="col-xs-12 NolikedLevelThree">
                                <div className="SomeheighPlease">
                                <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Album</title><path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                </div>
                                <Row>
                                        <Col md={12}>
                                            <h1 class="YourFirstInAll">Save your favourite albums</h1>
                                            <h4 class="_1bfd68987bbac2dd824e5db895bd3c57-scss">Save albums you love to build the collection of your dreams.</h4>
                                            <button class="_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss" type="button">DISCOVER</button>
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
        var RenderUserAlbums = this.props.data_be.data_be.albums.map((Album)=>
        {
            //make a condition if it requires in the future
            if(Album.name !== "Liked_Songs")
            {
            return(
                <Button className="customizedButtonForOnclick" onClick={()=>this.handleRenderingPlaylist(Album._id)}>
                    <Link  to="/webplayer/nowplay">
                <div key= {Album.id}className="CardsLibrary">
                    <Row>
                        <Col>
                            <div>
                                <div className="cardPhoto">
                                    <div className="imageHolder">
                                        <img src={Album.image} alt="" className="theimage"></img>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="TextBelowTheImage">
                        <Col md={12}>
                            <Row className="cardTitle" >
                                <Col md={12}>
                                    <Link className="titlePlaylistLink">{Album.name}</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="desciptionPlaylistLink">
                                        <span>{Album.artist}</span>
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
    }
        )
}

        return(
            <div>
                 {this.props.isSignedIn.isSignedIn === true ? (
                    <div>
                        {redirected}
                        <div className="LibraryPageBody">
                        <div className="container MainViewPlaylsit">
                            <div className="sectionPlayList">
                                {this.props.data_be.data_be.albums.length === 0 ? (
                                    <div>{RenderNoLikedAlbums()}</div>
                                    ) : (
                                        <div>
                                        <Row>
                                            <Col  md={12}>
                                                <h1 className="header_playList">Albums</h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col  md={12} className="m-0 customizedColForCards">
                                                <div className="gridView">
                                                    {RenderUserAlbums}
                                                
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    )}
                            </div>
                        </div>
                        
                    </div>
                    </div> ):(
                       <div></div> 
                    )}
             
    </div>)
    }
}
export default Albums;

