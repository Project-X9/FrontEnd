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
        if(this.props.data_be.data_be.artists.length === 0)
        {
            var RenderNoLikedArtists=() =>{
                return(
                    <div className="NolikedLevelZero">
                    <div className="NolikedLevelOne">
                        <div className="NolikedLevelTwo">
                            <div className="row TakeitDown">
                                <div className="col-xs-12 NolikedLevelThree">
                                <div className="SomeheighPlease">
                                <svg width="52" height="54" viewBox="0 0 52 54" xmlns="http://www.w3.org/2000/svg"><title>Add Artist Icon</title><path d="M35.71 34.12l-4.282-2.462c-.43-.247-.724-.668-.808-1.156-.085-.488.05-.984.373-1.36l3.486-4.088c2.212-2.585 3.43-5.886 3.43-9.293v-1.33c0-3.938-1.647-7.74-4.52-10.435C30.474 1.263 26.657-.102 22.66.16 15.176.646 9.31 7.114 9.31 14.887v.875c0 3.41 1.22 6.71 3.432 9.293l3.487 4.09c.32.375.456.87.372 1.36-.085.486-.38.908-.81 1.155l-8.547 4.914C2.775 39.112 0 43.878 0 49.012V53h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916c.946-.544 1.596-1.473 1.782-2.55.187-1.075-.113-2.168-.822-2.998l-3.488-4.09c-1.903-2.224-2.95-5.062-2.95-7.994v-.875c0-6.72 5.04-12.312 11.478-12.73 3.448-.218 6.725.95 9.23 3.3 2.51 2.35 3.89 5.538 3.89 8.975v1.33c0 2.932-1.047 5.77-2.95 7.995l-3.488 4.09c-.708.83-1.008 1.923-.822 3 .187 1.074.836 2.003 1.782 2.547l3.036 1.745c.706-.412 1.455-.755 2.243-1.018zM43 43v-9h-2v9h-9v2h9v9h2v-9h9v-2h-9z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                </div>
                                <Row>
                                    <Col md={12}>
                                        <h1 class="YourFirstInAll">Your artists will appear here.</h1>
                                        <h4 class="_1bfd68987bbac2dd824e5db895bd3c57-scss">Follow artists you love to add them to Your Library.</h4>
                                        <button class="_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss" type="button">Search</button>
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
        const RenderArtistsCard =this.props.data_be.data_be.artists.map((artist)=>{
            return(
                <div key={artist.id} className="CardsLibrary">
                    <Row>
                        <Col  md={12}>
                            <h1 className="header_playList">Artists</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={12}>
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
                                                    <div className="playButtonPlayList">
                                                        <Button className="theButtonItself "> 
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
            )
        })
        return(
            <div>
            <div className="LibraryPageBody">
            <div className="container MainViewPlaylsit">
                <div className="sectionPlayList">
                    {this.props.data_be.data_be.artists.length === 0 ? (
                        <div>{RenderNoLikedArtists()}</div>
                    ):(
                        <div>
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
                    )}
                   
                </div>
                
            </div>
        </div>
        </div>        )
    }
}
export default Artists;
