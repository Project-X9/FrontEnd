import React, { Component } from "react";
import {Button} from 'reactstrap'; 
import {Link} from "react-router-dom";

class PopularArtistsHomeAndNavContent extends Component {
    render(){
        // const HomeArtists = this.props.artist.artist.map((Artist)=>{
        //     return(
        //         <div key= {Artist.id} className="CardsHome">
        //             <div className="row">
        //                 <div className="col">
        //                 <div className="ArtistCardPhoto">
        //                     <div className="ImageHolder">
        //                         <img  className="ArtistImageItself" src={Artist.image} alt=""></img>
        //                     </div>
        //                 </div>
        //                 </div>
        //             </div>
        //             <div className="row BelowImage">
        //                 <div className="col-md-12">
        //                     <div className="row" >
        //                         <div className="col-md-12">
        //                             <Link className="TitlePlaylistLink">{Artist.name}</Link>
        //                         </div>
        //                     </div>
        //                     <div className="row" >
        //                         <div className="col-md-12">
        //                             <div className="DescriptionPlaylistLink">
        //                                 <span>Artist</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row PlayButtonPlayList">
        //                 <div className="col-md-12">
        //                     <div>
        //                         <Button className="ButtonItself"> 
        //                         <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
        //                         </Button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // })

        const HomeArtists = this.props.data_be.data_be.artists.map((Artist)=>{
                return(
                    <div key= {Artist.id} className="CardsHome">
                        <div className="row">
                            <div className="col">
                            <div className="ArtistCardPhoto">
                                <div className="ImageHolder">
                                    <img  className="ArtistImageItself" src={Artist.image} alt=""></img>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">{Artist.name}</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>Artist</span>
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
                )
            })
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
                        {HomeArtists}
                    </div>
                </div>
            </div>  
        </div>      
    )
    }
}
export default PopularArtistsHomeAndNavContent;
