import React, { Component } from "react";
import {Button} from 'reactstrap'; 
import {Link} from "react-router-dom";

class PopularArtistsHomeAndNavContent extends Component {
    render(){
        return(
            <div>
            <div className="row HeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                    <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">Popular Artists</h2>
                    </Link>
                </div>
                <div className="col-sm-3 ContainerSeeAllAboveGrid">
                    <Link className="SeeAllAboveGrid">SEE ALL</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <div className="GridView">
                <div className="CardsHome">
                        <div className="row">
                            <div className="col">
                            <div className="ArtistCardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ArtistImageItself" src="https://a10.gaanacdn.com/images/albums/69/2437469/crop_480x480_2437469.jpg" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Eminem</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>
                                                d</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div>
                                    <Button className="ButtonItself"> 
                                    <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CardsHome">
                        <div className="row">
                            <div className="col">
                            <div className="ArtistCardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ArtistImageItself" src="https://a10.gaanacdn.com/images/albums/69/2437469/crop_480x480_2437469.jpg" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Eminem</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>
                                                yufbtdrydvrbcyfbdfwfcihwiucfhwiuefmcwiuerbmcfiwu
                                                wucfbierwucffwerbfcierfmbciercmfbeic76n7n7n6
                                                siodhoshgowehfociwmehofcmweh89fcmwne9fx,we9
                                                weoifxhowehmfw8ef8mh9wemfx9we8mf9wmef9xwm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div>
                                    <Button className="ButtonItself"> 
                                    <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>  
        </div>      
    )
    }
}
export default PopularArtistsHomeAndNavContent;
