import React, { Component } from "react";
import {Button} from 'reactstrap'; 
import {Link} from "react-router-dom";

class PopularAlbumsHomeAndNavContent extends Component {
    render(){
        return(
            <div>
            <div className="row HeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                    <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">Popular albums</h2>
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
                            <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ImageItself" src="https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Evolve</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Imagine Dragons</span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div >
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
                            <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ImageItself" src="https://i.scdn.co/image/ab67616d0000b2737636e1c9e67eaafc9f49aefd" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Manic</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Halsey</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div >
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
                            <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ImageItself" src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Different World</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Alan Walker</span>
                                        </div>
                                    </div>
                                </div>                              
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div >
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
                            <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ImageItself" src="https://i.scdn.co/image/ab67616d0000b273459d675aa0b6f3b211357370" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Narrated For You</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Alec Benjamin</span>
                                        </div>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div >
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
                            <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ImageItself" src="https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Billie Eilish</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div >
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
                            <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ImageItself" src="https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02" alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">Hollywood's Bleeding</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Post Malone</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div >
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
export default PopularAlbumsHomeAndNavContent;
