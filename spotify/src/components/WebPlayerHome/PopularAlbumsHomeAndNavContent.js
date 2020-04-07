import React, { Component } from "react";
import {Button, Modal, ModalBody} from 'reactstrap';
import {Link} from "react-router-dom";

class PopularAlbumsHomeAndNavContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen:false,
          SignedIn:false
    
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
      if(this.state.tempId === "hviyv")
      {
        this.setState({
          SignedIn:true
      });
      }
      else {
        this.setState({
          isModalOpen: !this.state.isModalOpen
      });
      }
      
    }
    render(){
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

        const HomeAlbums = this.props.data_be.data_be.albums.map((Album)=>
        {
            return(
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
                                <Button className="ButtonItself" onClick={this.toggleModal}> 
                                <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="row" size="lg">        
                            <ModalBody >
                                <div className="row HomeNotSignedInModal" >
                                    <div className="col-sm-6 col-md-6 col-lg-6">   
                                        <div className="ImageHolder">
                                        <img  className="ImageItself" src={Album.image} alt=""></img>
                                    </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 ">
                                                <h2 className="theHeader">Get the most out of Spotify with a free account</h2>
                                            </div>
                                        </div>
                                        <div className="row flexer">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <ol className="libraryol">
                                                    <li className="libraryli flexer">
                                                        <svg className= "librarysvg flexer" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                                        <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                                        </svg>
                                                        No credit card, ever
                                                    </li>
                                                    <li className="libraryli flexer"><svg className= "librarysvg flexer" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                                        <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                                        </svg>
                                                        Get unlimited podcasts
                                                        </li>
                                                    <li className="libraryli flexer">
                                                    <svg className= "flexer librarysvg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 18" width="16" height="16">
                                                        <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                                                    </svg>
                                                    Play your favorite music, with ads
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </ModalBody> 
                    </Modal>
                </div>
            )
        })
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
                        {HomeAlbums}
                    </div>
                </div>
            </div>  
        </div>      
    )
    }
}
export default PopularAlbumsHomeAndNavContent;
