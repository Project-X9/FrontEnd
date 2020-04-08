import React, { Component } from "react";
import {Button, Modal, ModalBody} from 'reactstrap';
import {Link,Redirect} from "react-router-dom";

class PopularArtistsHomeAndNavContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen:false,
          playListadded:false
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
          isModalOpen: !this.state.isModalOpen
      });
    }

    handleRenderingPlaylist(data){
        //this.props.handleCurrentPlayList(data);
        this.props.handleCurrentArtists(data);
        this.setState({
            playListadded:true
        })
    }
    render(){
        if(this.state.playListadded === true)
        {
            var redirected = <Redirect to="/webplayer/nowplay"></Redirect>

        }
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

        let isHomeArtistsSingned=""
        if (this.props.isSignedIn.isSignedIn !== null) {
            isHomeArtistsSingned = this.props.data_be.data_be.artists.map((Artist)=>{
                return(
                    <Button className="WebplayerHomeNowPlayRedirectButton" onClick={()=>this.handleRenderingPlaylist(Artist._id)}>
                    <Link className="WebplayerHomeNowPlayRedirectLink" to="/webplayer/nowplay">
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
                    </Link>
                    </Button>
                )
            })
        }
        return(
            <div>
            <div className="row HeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                    <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">Popular Artists</h2>
                    </Link>
                </div>
                {/* <div className="col-sm-3 ContainerSeeAllAboveGrid">
                    <Link className="SeeAllAboveGrid">SEE ALL</Link>
                </div> */}
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="GridView">
                        {isHomeArtistsSingned}
                    </div>
                </div>
            </div>  
        </div>      
    )
    }
}
export default PopularArtistsHomeAndNavContent;
