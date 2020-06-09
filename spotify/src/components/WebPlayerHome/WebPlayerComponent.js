/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
// import "./PlayFooterComponent.css";
import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Button, Modal, ModalBody , Row, Col} from "reactstrap";
import HomeNavAndContent from "./HomeNavAndContent";
import SongsByGenres from "./SongsByGenre";
import LibraryPage from "../Library/LibraryPage";
import NowPlay from "../NowPlayComponent/NowPlay";
import { baseUrl2 } from "../../shared/baseUrl";
import LikedPlay from "../PlayLikedSongs/PlayLikedSongs";
import Artist from "../ArtistInterface/ArtistComponent";
import PlayFooter from './../PlayFooter/PlayFooter';
import Search from "../SearchComponent/Search";
import Queue from "./Queue";
import PremiumComponent from "../PremiumPage/PremuimComponent";
/**
 * Web Player page
 */
class WebPlayer extends Component {
  /**
   *
   * @param {Object} props
   * @param props.data Essentially contains the data of the users in the database
   * @param props.id Essentially contains the id of one of the users in the database
   * @param props.handleLogoutId Essentially taks an id (should be an empty string) and replaces the current user id with it
   * @param props.data_be Essentially contains the data of the users in the database after integrating with backend
   * @param props.handleLogout_BE Essentially used to remove user id along with his other data instead of handleLogoutId
   * @param props.isSignedIn Essentially used to check if a user is signed in or not
   * @param props.patchedfollow Essentially used to by the LikedPlay & NowPlay Components for following
   * @param props.patchedunfollow Essentially used to by the LikedPlay & NowPlay Components for unfollowing
   * @param props.artist Essentially contains artist data
   * @param props.album Essentially contains album data
   * @param props.playLists Essentially contains playlist data
   * @param props.handleCurrentArtists Essentially used to display artists' data after integrating with the backend
   * @param props.handleCurrentAlbums Essentially used to display albums' data after integrating with the backend
   * @param props.handleCurrentPlayList Essentially used to display playlists' data after integrating with the backend
   * @param props.categories Essentially contains an array of categories that contain playlists
   */
  constructor(props) {
    super(props);
    this.state = {
      tempId: this.props.id.id,
      isModalOpen: false,
      isModalOpenNew: false,
      isModalOpenSong: false,
      SignedIn: false,
      inputValue:null
    };
    
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalSong = this.toggleModalSong.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);


  }
  
  /**
   * Toggles the Modal in the library by switching isModalOpen from true to false and vice versa
   */
  toggleModal() {
    if (this.props.isSignedIn.isSignedIn === true) {
      this.setState({
        SignedIn: true,
      });
    } else {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }
  }

  /**
   * Toggles the Song Modal in the library by switching isModalOpen from true to false and vice versa
   */
  toggleModalSong() {
    if (this.props.isSignedIn.isSignedIn === null) {
      this.setState({
        isModalOpenSong: !this.state.isModalOpenSong,
      }); 
    }
  }

  /**
   * handles input in the textbox the playlist modal
   */
handleChange(e){
    this.setState({
        inputValue:e.target.value
    })
}

/**
   * Toggles the playlist Modal in the library by switching isModalOpen from true to false and vice versa
   */
toggleModalNew(){
  if (this.props.isSignedIn.isSignedIn !== true) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  } else {
    this.setState({
      isModalOpenNew: !this.state.isModalOpenNew
  });
  } 
 
/**
 * handles submitting input in the playlist modal
 */ 
}
handleSubmit() {
    alert(this.state.inputValue);
    this.props.CreatePlayList_BE(this.props.data_be.data_be._id,this.state.inputValue,this.props.token.token);
    this.toggleModalNew();
}
  /**
   * Responsible for showing everything on the Webplayer
   * @returns Components that will be displayed on the page
   */
  render() {
    let homeActive = "";
    let searchActive = "";
    let libraryActive = "";
    let songsActive = "";
    let createPlaylistsActive = "";
    let likedSongsActive = "";
    let currentURL = window.location.href;
    if (currentURL === baseUrl2 + "webplayer/home") {
      homeActive = "active";
      searchActive = "";
      libraryActive = "";
      createPlaylistsActive = "";
      likedSongsActive = "";
      songsActive="";
    } else if (currentURL === baseUrl2 + "webplayer/librarypage/playlists") {
      homeActive = "";
      searchActive = "";
      libraryActive = " active";
      createPlaylistsActive = "";
      likedSongsActive = "";
      songsActive="";
    } else if (currentURL === baseUrl2 + "webplayer/likedplay") {
      homeActive = "";
      searchActive = "";
      libraryActive = "";
      createPlaylistsActive = "";
      likedSongsActive = "BottomTwoActive";
      songsActive="";
    } else if (currentURL === baseUrl2 + "webplayer/songs") {
      homeActive = "";
      searchActive = "";
      libraryActive = "";
      createPlaylistsActive = "";
      likedSongsActive = "";
      songsActive="active";
    }
    let redirected = null;
    if (this.state.SignedIn) {
      redirected = <Redirect to="/webplayer/librarypage/playlists"></Redirect>;
    }

    let songsSidebar = null;
    if (this.props.isSignedIn.isSignedIn === true) {
      songsSidebar=(
          <Link to="/webplayer/songs" className={songsActive}>
          <i className="fa fa-music" />
          Songs
          </Link >
      );
    }
    else{
      songsSidebar=(
        <Button  
        className={"SidebarSongButton " + songsActive}
        onClick={()=>this.toggleModalSong()}>
          <i className="fa fa-music" />
          Songs
        </Button>
      );
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

    let showLikeAndCreate = (
      <div>
        <h3 className="sidebarHeaderBetween">PLAYLISTS</h3>
        <Button  className={"SidebarSongButton " + createPlaylistsActive} onClick={()=>this.toggleModalNew()}>
          <i className="fa fa-plus-square"></i>
          Create Playlist
        </Button>
        <Link to="/webplayer/likedplay" className={likedSongsActive}>
          <i className="fa fa-heart"></i>
          Liked Songs
        </Link>
      </div>
    );

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
                  <Link to="/webplayer/home" className={homeActive}>
                    <i className="fa fa-home" />
                    Home
                  </Link>
                  <Link to="/webplayer/search" className={searchActive}>
                    <i className="fa fa-search"></i>
                    Search
                  </Link>
                  <Button
                    className={"SidebarLibraryButton" + libraryActive}
                    onClick={this.toggleModal}>
                    <i className="fa fa-bomb"></i>
                    Your Library
                  </Button>
                  {songsSidebar}
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
                        handleLogout_BE={this.props.handleLogout_BE}
                        isSignedIn={this.props.isSignedIn}
                        handleCurrentPlayList={this.props.handleCurrentPlayList}
                        categories={this.props.categories}
                        handleCurrentAlbums={this.props.handleCurrentAlbums}
                        handleCurrentArtists={this.props.handleCurrentArtists}
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
                        data_be={this.props.data_be}
                        handleCurrentPlayList={this.props.handleCurrentPlayList}
                        isSignedIn={this.props.isSignedIn}
                        handleLogout_BE={this.props.handleLogout_BE}
                        currentPlaylist={this.props.currentPlaylist}
                        handleCurrentAlbums={this.props.handleCurrentAlbums}
                        handleCurrentArtists={this.props.handleCurrentArtists}
                        PlayTheFooter={this.props.PlayTheFooter}
                        AddPrevSong={this.props.AddPrevSong}
                        PlaySong={this.props.PlaySong}
                        PauseSong={this.props.PauseSong}
                        isPlaying={this.props.isPlaying}
                        // fetchPlaylistById_be={this.props.fetchPlaylistById_be}
                        // playlist_BE={this.props.playlist_BE}
                      />
                    )}
                  />
                  />
                  <Route
                    exact
                    path="/webplayer/likedplay"
                    component={() => (
                      <LikedPlay
                        id={this.props.id}
                        data={this.props.data}
                        playLists={this.props.playLists}
                        data_be={this.props.data_be}
                        ///////fetching the playlist of the user
                        currentPlaylist={this.props.currentPlaylist}
                        isSignedIn={this.props.isSignedIn}
                        /// for logging out
                        handleLogout_BE={this.props.handleLogout_BE}
                        patchedfollow={this.props.patchedfollow}
                        patchedunfollow={this.props.patchedunfollow}
                        PlayTheFooter={this.props.PlayTheFooter}
                        PlaySong={this.props.PlaySong}
                        PauseSong={this.props.PauseSong}
                        isPlaying={this.props.isPlaying}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/webplayer/nowplay"
                    component={() => (
                      <NowPlay
                        id={this.props.id}
                        data={this.props.data}
                        playLists={this.props.playLists}
                        data_be={this.props.data_be}
                        ///////fetching the playlist of the user logged in
                        currentPlaylist={this.props.currentPlaylist}
                        isSignedIn={this.props.isSignedIn}
                        handleLogout_BE={this.props.handleLogout_BE}
                        ///////Handling the follow and unfollow of the users
                        patchedfollow={this.props.patchedfollow}
                        patchedunfollow={this.props.patchedunfollow}
                        PlayTheFooter={this.props.PlayTheFooter}
                        PlaySong={this.props.PlaySong}
                        PauseSong={this.props.PauseSong}
                        isPlaying={this.props.isPlaying}
                        handleChangeData_BE={this.props.handleChangeData_BE}
                        token={this.props.token}
                        AddSong_inPlaylist_id={this.props.AddSong_inPlaylist_id}
                        songid={this.props.songid}
                        isModalOpen={this.props.isModalOpen}
                        ControlModal={this.props.ControlModal}
                        PatchAddPlaylist={this.props.PatchAddPlaylist}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/webplayer/artist"
                    component={() => (
                      <Artist
                        id={this.props.id}
                        data={this.props.data}
                        playLists={this.props.playLists}
                        data_be={this.props.data_be}
                        currentPlaylist={this.props.currentPlaylist}
                        isSignedIn={this.props.isSignedIn}
                        handleLogout_BE={this.props.handleLogout_BE}
                        PlayTheFooter={this.props.PlayTheFooter}
                        PlaySong={this.props.PlaySong}
                        PauseSong={this.props.PauseSong}
                        isPlaying={this.props.isPlaying}
                      />
                    )}
                  />
                   <Route
                    exact
                    path="/webplayer/search"
                    component={() => (
                      <Search
                          categories={this.props.categories}
                          fullsongs={this.props.fullsongs}
                          fullartists={this.props.fullartists}
                        id={this.props.id}
                        data={this.props.data}
                        playLists={this.props.playLists}
                        data_be={this.props.data_be}
                        currentPlaylist={this.props.currentPlaylist}
                        isSignedIn={this.props.isSignedIn}
                        handleLogout_BE={this.props.handleLogout_BE}
                        PlayTheFooter={this.props.PlayTheFooter}
                        PlaySong={this.props.PlaySong}
                        PauseSong={this.props.PauseSong}
                        isPlaying={this.props.isPlaying}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/webplayer/songs"
                    component={() => (
                      <SongsByGenres
                        data={this.props.data}
                        id={this.props.id}
                        playLists={this.props.playLists}
                        artist={this.props.artist}
                        album={this.props.album}
                        handleLogoutId={this.props.handleLogoutId}
                        ///////////////
                        data_be={this.props.data_be}
                        handleLogout_BE={this.props.handleLogout_BE}
                        isSignedIn={this.props.isSignedIn}
                        handleCurrentPlayList={this.props.handleCurrentPlayList}
                        categories={this.props.categories}
                        handleCurrentAlbums={this.props.handleCurrentAlbums}
                        handleCurrentArtists={this.props.handleCurrentArtists}
                        PlayTheFooter={this.props.PlayTheFooter}
                        GetSongsByGeneres={this.props.GetSongsByGeneres}
                        genretracks={this.props.genretracks}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/webplayer/queue"
                    component={() => (
                      <Queue
                        data={this.props.data}
                        id={this.props.id}
                        playLists={this.props.playLists}
                        artist={this.props.artist}
                        album={this.props.album}
                        handleLogoutId={this.props.handleLogoutId}
                        ///////////////
                        data_be={this.props.data_be}
                        handleLogout_BE={this.props.handleLogout_BE}
                        isSignedIn={this.props.isSignedIn}
                        handleCurrentPlayList={this.props.handleCurrentPlayList}
                        categories={this.props.categories}
                        handleCurrentAlbums={this.props.handleCurrentAlbums}
                        handleCurrentArtists={this.props.handleCurrentArtists}
                        PlayTheFooter={this.props.PlayTheFooter}
                      />
                    )}
                  />
                  <Redirect to="/webplayer/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div className="playFooterFixed">
              <PlayFooter     
                currentPlaylist={this.props.currentPlaylist}          
                song={this.props.song}
                PlayShuffle={this.props.PlayShuffle}
                PauseShuffle={this.props.PauseShuffle}
                shuffle={this.props.shuffle}
                ChangeSongProgress={this.props.ChangeSongProgress}
                progress={this.props.progress}
                ChangeProgressMode={this.props.ChangeProgressMode}
                in_set_progress_mode={this.props.in_set_progress_mode}
                ChangeProgressDirty={this.props.ChangeProgressDirty}
                is_progress_dirty ={this.props.is_progress_dirty}
                PlayTheFooter={this.props.PlayTheFooter}
                ChangeTotalTime={this.props.ChangeTotalTime}
                ChangeCurrentTime={this.props.ChangeCurrentTime}
                currentTime ={this.props.currentTime}
                totalTime ={this.props.totalTime}
                isSignedIn={this.props.isSignedIn}
                PlayTheFooter={this.props.PlayTheFooter}
                AddPrevSong={this.props.AddPrevSong}
                prevsong={this.props.prevsong}
                audio={this.props.audio}
                AudioControl={this.props.AudioControl}
               />
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          className="ModalBackGround row"
          size="lg">
          <div className="modal-content modalcontent">
            <ModalBody className="p-0 modalbody">
              <div className="row flexer">
                <div className="col-sm-6 col-md-6 col-lg-6 leftPart ">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                      <h2 className="theHeader">
                        Get the most out of Spotify with a free account
                      </h2>
                    </div>
                  </div>
                  <div className="row flexer">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <ol className="libraryol">
                        <li className="libraryli flexer">
                          <svg
                            className="librarysvg flexer"
                            xmlns="http://www.w3.org/1999/xlink"
                            viewBox="0 0 16 18"
                            width="16"
                            height="16">
                            <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                          </svg>
                          No credit card, ever
                        </li>
                        <li className="libraryli flexer">
                          <svg
                            className="librarysvg flexer"
                            xmlns="http://www.w3.org/1999/xlink"
                            viewBox="0 0 16 18"
                            width="16"
                            height="16">
                            <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                          </svg>
                          Get unlimited podcasts
                        </li>
                        <li className="libraryli flexer">
                          <svg
                            className="flexer librarysvg"
                            xmlns="http://www.w3.org/1999/xlink"
                            viewBox="0 0 16 18"
                            width="16"
                            height="16">
                            <polygon points="13.985,2.383 5.127,12.754 1.388,8.375 0.73,9.145 5.127,14.294 14.745,3.032"></polygon>
                          </svg>
                          Play your favorite music, with ads
                        </li>
                      </ol>
                      <div className="row LibraryModalClose">
                        <Button
                          className="LibraryModalCloseButton"
                          color="success"
                          onClick={this.toggleModal}>
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="righPart">
                    <div className="innerRight">
                      <Button className="signupfree">
                        <Link to="/signup" className="linksignup">
                          Sign up free
                        </Link>
                      </Button>
                      <div className="seperator_LibraryModal"></div>
                      <div className="alreadyhaveanaccount">
                        Already have an account?
                      </div>
                      <Button className="libraryloginbut">
                        <Link to="/signin" className="linkLogin">
                          Log in
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </div>
        </Modal>
        <Modal isOpen={this.state.isModalOpenNew} toggle={this.toggleModalNew} className="">
                <ModalBody className="createPlayLsitBody">
                    <Row>
                        <Col md={12} xs={12} sm={12}>
                                <Row>
                                    <Col md={{ size: 6, offset: 5 }} xs={{ size: 6, offset: 5 }} sm={{ size: 6, offset: 5 }}>
                                        <Button className="exitButton_CP" onClick={()=>this.toggleModalNew()}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <title>Close</title>
                                            <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                        </svg>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                        <h1>Create new playlist</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="inputField_CP" md={12} xs={12} sm={12}>
                                        <div className="inputBox_CP">
                                                <Row>
                                                    <Col md={{size:10, offset:2}} xs={12} sm={12} >
                                                    <div className="contentSpacing_CP">
                                                        <h4 className="inputBox-label_CP">Playlist Name</h4>
                                                        <input type="text" className="inputBox-input_CP" placeholder="New Playlist" onChange={this.handleChange}></input>                                          
                                                    </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{size:7,offset:5}} xs={12} sm={12} className="create_Cancel_CP">
                                            <button class="CancelButton_CP" type="button" onClick={()=>this.toggleModalNew()}>CANCEL</button>
                                            <button  class="CreateButton_CP" type="button" onClick={()=>this.handleSubmit()}>CREATE</button>
                                    </Col>
                                </Row>
                               
                        </Col>
                    </Row>
                </ModalBody> 
            </Modal>
            <Modal
            isOpen={this.state.isModalOpenSong}
            toggle={this.toggleModalSong}
            className="row"
            size="lg"
            >
            <ModalBody>
            <div className="row HomeNotSignedInModal">
                
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="row HomeNotSignedInModalTextAndLinks">
                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                    <h2 className="HomeNotSignedInModalHeader2">
                        Your Favorite Songs Are All In One Place
                    </h2>
                    </div>
                </div>
                <div className="row HomeNotSignedInModalTextAndLinks">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <Button
                        className="HomeNotSignedInModalButton"
                        color="success"
                    >
                        <Link
                        className="HomeNotSignedInModalLinkInsideButton"
                        to="/signup"
                        >
                        SIGN UP FREE
                        </Link>
                    </Button>
                    </div>
                </div>
                <div className="row HomeNotSignedInModalTextAndLinks">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <p className="HomeNotSignedInModalParagraph">
                        Already have an account?
                        <Button
                        className="HomeNotSignedInModalButtonInsideParagraph"
                        color="success"
                        >
                        <Link
                            className="HomeNotSignedInModalLinkInsideButtonInsideParagraph"
                            to="/signup"
                        >
                            LOG IN
                        </Link>
                        </Button>
                    </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="row HomeNotSignedInClose">
                <Button
                className="HomeNotSignedInModalClosedButton"
                color="success"
                onClick={()=>this.toggleModalSong()}
                >
                Close
                </Button>
            </div>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default WebPlayer;
