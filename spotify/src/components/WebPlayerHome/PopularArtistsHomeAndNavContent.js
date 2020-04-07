import React, { Component } from "react";
import {Button, Modal, ModalBody} from 'reactstrap';
import {Link} from "react-router-dom";

class PopularArtistsHomeAndNavContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen:false,
    
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
          isModalOpen: !this.state.isModalOpen
      });
    }
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

        let isHomeArtistsSingned=""
        if (this.props.isSignedIn.isSignedIn === null) {
            isHomeArtistsSingned = this.props.data_be.data_be.artists.map((Artist)=>{
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
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="row" size="lg">        
                                <ModalBody >
                                    <div className="row HomeNotSignedInModal" >
                                        <div className="col-sm-6 col-md-6 col-lg-6 HomeNotSignedInModalFlexer">   
                                            <div className="HomeNotSignedInModalImageHolder">
                                                <img  className="HomeNotSignedInModalImage" src={Artist.image} alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6 HomeNotSignedInModalFlexer">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 ">
                                                    <h2 className="HomeNotSignedInModalHeader2">Start listening with a free Spotify account</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                <Button className="HomeNotSignedInModalButton" color="success">
                                                    <Link  className="HomeNotSignedInModalLinkInsideButton" to="/signup">SIGN UP FREE</Link>
                                                </Button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                <p className="HomeNotSignedInModalParagraph">
                                                    Already have an account?
                                                    <Button className="HomeNotSignedInModalButtonInsideParagraph" color="success">
                                                        <Link  className="HomeNotSignedInModalLinkInsideButtonInsideParagraph" to="/signup">LOG IN</Link>
                                                    </Button>
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="row HomeNotSignedInClose" onClick={this.toggleModal}>
                                        <Button className="HomeNotSignedInModalClosedButton" color="success" onClick={this.toggleModal}>
                                            Close
                                        </Button>
                                    </div>
                                </ModalBody> 
                        </Modal>
                        </div>
                    )
                })
        }
        else
        {
            isHomeArtistsSingned = this.props.data_be.data_be.artists.map((Artist)=>{
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
