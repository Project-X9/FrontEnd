import React, { Component } from "react";
import {Button, Modal, ModalBody} from 'reactstrap';
import {Link,Redirect} from "react-router-dom";

class PopularAlbumsHomeAndNavContent extends Component {
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
        this.props.handleCurrentAlbums(data)
        this.setState({
            playListadded:true
        })
    }
    render(){
        if(this.state.playListadded === true)
        {
            var redirected = <Redirect to="/webplayer/nowplay"></Redirect>

        }
        // const HomeAlbums = this.props.album.album.map((Album)=>{
        //     return(
        //         <div key= {Album.id} className="CardsHome">
        //             <div className="row">
        //                 <div className="col">
        //                     <div className="CardPhoto">
        //                         <div className="ImageHolder">
        //                             <img  className="ImageItself" src={Album.image} alt=""></img>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row BelowImage">
        //                 <div className="col-md-12">
        //                     <div className="row" >
        //                         <div className="col-md-12">
        //                             <Link className="TitlePlaylistLink">{Album.name}</Link>
        //                         </div>
        //                     </div>
        //                     <div className="row" >
        //                         <div className="col-md-12">
        //                             <div className="DescriptionPlaylistLink">
        //                                 <span>{Album.artist}</span>
        //                             </div>
        //                         </div>
        //                     </div> 
        //                 </div>
        //             </div>
        //             <div className="row PlayButtonPlayList">
        //                 <div className="col-md-12">
        //                     <div >
        //                         <Button className="ButtonItself"> 
        //                         <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
        //                         </Button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // })
        let isHomeAlbumsSingned=""
        if (this.props.isSignedIn.isSignedIn !== null) {
            isHomeAlbumsSingned = this.props.data_be.data_be.albums.map((Album)=>
        {
                return(
                    <Button className="WebplayerHomeNowPlayRedirectButton" onClick={()=>this.handleRenderingPlaylist(Album._id)}>
                    <Link className="WebplayerHomeNowPlayRedirectLink" to="/webplayer/nowplay">
                    <div key= {Album.id} className="CardsHome">
                        <div className="row">
                            <div className="col">
                                <div className="CardPhoto">
                                    <div className="ImageHolder">
                                        <img  className="ImageItself" src={Album.image} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Link className="TitlePlaylistLink">{Album.name}</Link>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="DescriptionPlaylistLink">
                                            <span>{Album.artist}</span>
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
                    <h2 className="HeaderAboveGrid">Popular albums</h2>
                    </Link>
                </div>
                {/* <div className="col-sm-3 ContainerSeeAllAboveGrid">
                    <Link className="SeeAllAboveGrid">SEE ALL</Link>
                </div> */}
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="GridView">
                        {isHomeAlbumsSingned}
                    </div>
                </div>
            </div>  
        </div>      
    )
    }
}
export default PopularAlbumsHomeAndNavContent;
