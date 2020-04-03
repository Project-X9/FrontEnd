import React, { Component } from "react";
import {Button} from 'reactstrap'; 
import {Link} from "react-router-dom";

class PopularNewHomeAndNavContent extends Component {
    render(){
        const HomeSongs = this.props.playLists.playLists.map((PlayLists)=>{
            if(PlayLists.name==="English Songs Hashish"){
            return(
                PlayLists.tracks.map((Song)=>{
                    return( 
                        <div key={Song.id} className="CardsHome">
                            <div className="row">
                                <div className="col">
                                <div className="CardPhoto">
                                    <div className="ImageHolder">
                                        <img  className="ImageItself" src={Song.image} alt=""></img>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row BelowImage">
                                <div className="col-md-12">
                                    <div className="row" >
                                        <div className="col-md-12">
                                            <Link className="TitlePlaylistLink">{Song.name}</Link>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-md-12">
                                            <div className="DescriptionPlaylistLink">
                                                <span>{Song.artist}</span>
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
                    )
                })
            ) 
            
        }
        })
        return(
            <div>
            <div className="row FirstHeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                    <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">Popular new releases</h2>
                    </Link>
                </div>
                <div className="col-sm-3 ContainerSeeAllAboveGrid">
                    <Link className="SeeAllAboveGrid">SEE ALL</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="GridView">
                        {HomeSongs}
                    </div>
                </div>
            </div>  
        </div>      
    )
    }
}
export default PopularNewHomeAndNavContent;
