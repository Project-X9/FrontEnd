/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import {Link, Switch, Route,Redirect} from "react-router-dom";
import { Button, Modal, ModalBody} from 'reactstrap'; 
import HomeNavAndContent from './HomeNavAndContent'
import LibraryPage from  "../Library/LibraryPage";
import NowPlay from "../NowPlayComponent/NowPlay";
import { baseUrl2 } from "../../shared/baseUrl";


class WebPlayer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      tempId: this.props.id.id,
      isModalOpen:false,
      SignedIn:false

    };
    this.toggleModal=this.toggleModal.bind(this);
  }
  toggleModal(){
    if(this.state.tempId !== "")
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
  render() {
    let homeActive=''
    let searchActive=''
    let libraryActive=''
    let createPlaylistsActive=''
    let likedSongsActive=''
    let currentURL=window.location.href
    if(currentURL===baseUrl2 + "webplayer/home")
    {
      homeActive='active'; searchActive=''; libraryActive=''; createPlaylistsActive=''; likedSongsActive='';
    }
    else if(currentURL===baseUrl2 + "webplayer/librarypage/playlists")
    {
      homeActive=''; searchActive=''; libraryActive=' active'; createPlaylistsActive=''; likedSongsActive='';
    }
    else if(currentURL===baseUrl2 + "webplayer/nowplay")
    {
      homeActive=''; searchActive=''; libraryActive=''; createPlaylistsActive=''; likedSongsActive='BottomTwoActive';
    }
    let redirected = null;
    if (this.state.SignedIn) {
      redirected = <Redirect to="/webplayer/librarypage/playlists"></Redirect>
    }
    // const showLikeAndCreate = this.props.data.data.map((data) => {
    //   if (data.id === this.state.tempId) {
    //     return(
    //       <div>
    //           <h3 className="sidebarHeaderBetween">PLAYLISTS</h3>
    //           <Link to="/"  className={createPlaylistsActive}>
    //               <i className="fa fa-plus-square"></i>
    //               Create Playlist
    //           </Link>
    //           <Link to="/webplayer/nowplay"  className={likedSongsActive}>
    //               <i className="fa fa-heart"></i>
    //               Liked Songs
    //           </Link>
    //       </div>
    //     )
    //   }
    // });

    let showLikeAndCreate =(
          <div>
              <h3 className="sidebarHeaderBetween">PLAYLISTS</h3>
              <Link to="/"  className={createPlaylistsActive}>
                  <i className="fa fa-plus-square"></i>
                  Create Playlist
              </Link>
              <Link to="/webplayer/nowplay"  className={likedSongsActive}>
                  <i className="fa fa-heart"></i>
                  Liked Songs
              </Link>
          </div>
        )
      
    return (
      <div>
      {redirected}
        <div className="WebPlayerHomeBody">
            <div className="container InfoContainer">
                <div className="row InfoContainerRow">
                    <div className="col-md-3 col-lg-2 Linkers">
                        <div className="sidebar">
                        <Link to="/home" className="AppearBigImage">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                            height="50px"
                            width="145px"
                            alt=""
                            />
                        </Link>
                        <Link to="/webplayer/home"  className={homeActive}>
                            <i className="fa fa-home" />
                            Home
                        </Link>
                        <Link to="/webplayer/search" className={searchActive}>
                            <i className="fa fa-search"></i>
                            Search
                        </Link>                                       
                        <Button className={"SidebarLibraryButton" + libraryActive} onClick={this.toggleModal}>
                          <i className="fa fa-bomb"></i>
                          Your Library
                        </Button>
                        {showLikeAndCreate}
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-10 webPlayerHomeNavAndContent">
                      <Switch>
                        <Route
                          path="/webplayer/home"
                            component={() => (
                              <HomeNavAndContent
                                data={this.props.data} 
                                id={this.props.id}
                                playLists={this.props.playLists}
                                artist={this.props.artist}
                                album={this.props.album}
                                handleLogoutId={this.props.handleLogoutId}
                                ///////////////
                                data_be={this.props.data_be} 
                              />
                            )}
                        />
                        <Route
                          path="/webplayer/librarypage"
                          component={() => (
                            <LibraryPage
                            data={this.props.data}
                            id={this.props.id}
                            playLists={this.props.playLists}
                            artist={this.props.artist}
                            album={this.props.album}
                            handleLogoutId={this.props.handleLogoutId}
                            />
                          )}
                        />
                        <Route
                            exact
                            path="/webplayer/nowplay"
                            component={() => (
                              <NowPlay id={this.props.id}
                               data={this.props.data} 
                               playLists={this.props.playLists}
                               data_be={this.props.data_be} />
                            )}
                        />
                        <Redirect to="/webplayer/home" /> 
                      </Switch>
                    </div>
                </div>
            </div>
        </div>
        <div className="AccountOverviewFooter">
          <div className="container">
           
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="ModalBackGround" 
                    size="lg">
                <div className="modal-content modalcontent">        
                <ModalBody className="p-0 modalbody">
                    <div className="row flexer" >
                        <div className="col-sm-6 col-md-6 col-lg-6 leftPart ">
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
                        <div className="col-sm-6 col-md-6 col-lg-6">   
                            <div className="righPart">
                                <div className="innerRight">
                                    <Button className="signupfree"><Link to="/signup"className="linksignup">Sign up free</Link></Button>
                                    <div className="seperator_LibraryModal"></div>
                                    <div className="alreadyhaveanaccount">Already have an account?</div>
                                    <Button className="libraryloginbut"><Link to="/signin"className="linkLogin">Log in</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody> 
                </div>
            </Modal>
    </div>
    
    );
  }
}

export default WebPlayer
