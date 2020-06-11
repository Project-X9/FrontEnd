import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownToggle, Modal, ModalBody,
} from "reactstrap";
import "./NowPlay.css";
import { NavLink, Redirect } from "react-router-dom";
import { Loading } from "./../Loading/LoadingComponent";
import 'react-notifications/lib/notifications.css';
import Dropdown from "react-bootstrap/Dropdown";
import Card from "@material-ui/core/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
/**
 * This Component is for Displaying the playlist and following or unfollowing it
 */
class NowPlay extends Component {

  /**
   *
   * @param tempId this is for the ID of the user entered right now
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      shareModal: false,
      isNavOpen: false,
        EditingPlaylist:false,
      tempSharedSong: "",
      tempId: this.props.id.id,

    };
    this.AddingToBe=this.AddingToBe.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state.toggleNav = this.toggleNav.bind(this);
    this.patchFollow = this.patchFollow.bind(this);
    this.state.handleLogout = this.handleLogout.bind(this);
    this.patchunFollow = this.patchunFollow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleShare = this.handleShare.bind(this);
    this.state.toggleModal = this.toggleModal.bind(this);
    this.deleteSong=this.deleteSong.bind(this);
    this.handleEditSubmit=this.handleEditSubmit.bind(this);

  }

  handleEditSubmit(){
      this.setState({EditingPlaylist:true})

  }
  handleAddQueue(songID,userID) {
    this.props.AddToQueue(songID,userID,this.props.token.token)
  }

  handleRemoveQueue(songID,userID) {
    this.props.RemoveQueue(songID,userID,this.props.token.token);
  }
 /**
   * DeleteSong passed the id of the Currentplaylist and the song to be deleted from it
   */

  deleteSong(Song){
    this.props.DeleteAddPlaylist(this.props.currentPlaylist.currentPlaylist._id,Song._id,this.props.token.token)
    this.props.handleChangeData_BE(this.props.data_be.data_be._id,this.props.token.token)
  }
  /**
   * handleSubmit controls the modal appearing and sets a state with the id of the song selected
   */
  handleSubmit(Song) {
    this.props.AddSong_inPlaylist_id(Song._id);
      this.props.ControlModal(true);
  }
  handleDislike(Song){
    this.props.DisLikeSong(Song._id,this.props.data_be.data_be._id,this.props.token.token);
  }
  handleLike(Song){
    this.props.LikeSong(Song._id,this.props.data_be.data_be._id,this.props.token.token);
  }

  toggleModal(x) {
    this.setState({
      shareModal: x
    });
  }

  shareSong(Song){
    //function of sharing 
   this.setState({shareModal:true,
    tempSharedSong: Song})
  }
  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleShare(Song){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(String(this.state.email).toLowerCase()) ) {
      // If the email is correct we send the selected song to another user
      alert('Sent ' +Song.name+" to "+this.state.email+"\n"+Song._id);
      this.setState({shareModal: false})
  }
  else {
      // invalid email, alerts the user for an error.
      alert("Error! invalid email, please try again.");
  }
  }

  
    AddingSongPlayListToBe(idSong){
        let Song=this.props.currentPlaylist.currentPlaylist.tracks.find(element=> element._id===idSong)
        if(Song===undefined){
                this.props.PatchAddPlaylist(this.props.currentPlaylist.currentPlaylist._id,idSong,this.props.token.token)
            this.props.ControlModal(false);
        }

            else{console.log("Already Found in the playlist")}
        }
  /**
   * AddingToBe controls passing the id of the selected song and the selected playlist for the song to be added
   */
  AddingToBe(idPlaylist){
    let Playlist=this.props.data_be.data_be.playlists.find(element=> element._id===idPlaylist)
    if(Playlist!==undefined){
      let sameSong=Playlist.tracks.find(element=>element===this.props.songid.songid)
      if(sameSong===undefined){
          console.log("Not Found in the playlist")
        this.props.PatchAddPlaylist(idPlaylist,this.props.songid.songid,this.props.token.token)
          this.props.handleChangeData_BE(this.props.data_be.data_be._id,this.props.token.token)
          this.props.ControlModal(false);


      }
      else{console.log("Already Found in the playlist")}
    }
  }

  /**
   * isPlaylistFollowed returns if the users already follows this playlist or not
   */
  handlePlay(song)
  {
    this.props.PlayTheFooter(song)
  }
  isPlaylistFollowed() {
    const Temp = this.props.currentPlaylist.currentPlaylist.followers.find(
      (element) => element == this.props.data_be.data_be._id
    );
    if (Temp !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * patchFollow function is for following the playlist
   */
  patchFollow() {
    if (!this.isPlaylistFollowed()) {
      this.props.patchedfollow(
        this.props.data_be.data_be._id,
        this.props.currentPlaylist.currentPlaylist._id,this.props.token.token
      );
      this.props.handleChangeData_BE(this.props.data_be.data_be._id,this.props.token.token)
    }
  }
  /**
   * patchunFollow function is for unfollowing the playlist
   */
  patchunFollow() {
    if (this.isPlaylistFollowed()) {
      this.props.patchedunfollow(
        this.props.data_be.data_be._id,
        this.props.currentPlaylist.currentPlaylist._id,this.props.token.token
      );
      this.props.handleChangeData_BE(this.props.data_be.data_be._id,this.props.token.token)
    }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }
  /**
   *HandleLogout is for logging out of the user (It also clears the entire storage)
   */
  handleLogout() {
    this.props.handleLogout_BE();
  }
  render() {
    var redirect = "";
    if (this.props.isSignedIn.isSignedIn === null) {
      redirect = <Redirect to="/webplayer/home" />;
    }
    if (this.props.currentPlaylist.isLoading) {
      return <Loading />;
    } else {
      if (this.props.isSignedIn.isSignedIn === true) {
        let userName = (
          <div>
            <Button className="AccountItself">
              <DropdownToggle nav caret className="WritingInsideAccountItself">
                <i class="fa fa-user-secret"></i>
                {this.props.data_be.data_be.name}
              </DropdownToggle>
            </Button>
          </div>
        );

        let showUpgrade1 = "";
        if (this.props.data_be.data_be.premium === false) {
          showUpgrade1 = (
            <NavItem>
              <Button className="NextToAccount" color="success">
                <NavLink className="NextToAccount" to="/premium">
                  UPGRADE
                </NavLink>
              </Button>
            </NavItem>
          );
        } else {
          showUpgrade1 = <span></span>;
        }

        let showUpgrade2 = "";
        if (this.props.data_be.data_be.premium === false) {
          showUpgrade2 = (
            <NavLink className="StaticNavChild Disappear" to="/premium">
              Upgrade to Premium
            </NavLink>
          );
        } else {
          showUpgrade2 = <span></span>;
        }

        var SignedIn = "";
        if (this.props.isSignedIn.isSignedIn === true) {
          SignedIn = (
            <div>
              <div className="row">
                <div className="WebPlayerHomeNav">
                  <div className="container">
                    <Navbar className="NavBar NavStyle" expand="md">
                      <Nav className="mr-auto" href="/signup">
                        <NavItem className="CustomNavitems">
                          <Button className="CustomButton">
                            <NavLink
                              className="nav-link SpecificallyForTheButton"
                              to="/webplayer/librarypage/playlists"
                            >
                              <svg className="CustomSvg" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
                                ></path>{" "}
                              </svg>
                            </NavLink>
                          </Button>
                        </NavItem>
                        <NavItem className="CustomNavitems">
                          <Button className="CustomButton">
                            <NavLink
                              className="nav-link SpecificallyForTheButton"
                              to="/webplayer/search"
                            >
                              <svg className="CustomSvg" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
                                ></path>
                              </svg>
                            </NavLink>
                          </Button>
                        </NavItem>
                      </Nav>
                      <Nav navbar className="ml-auto">
                        {showUpgrade1}
                        <NavItem>
                          <UncontrolledDropdown nav inNavbar>
                            {userName}
                            <DropdownMenu className="StaticNav" right>
                              <DropdownItem className="StaticNavChildContainer">
                                <NavLink
                                  className="StaticNavChild"
                                  to="/account/overview"
                                >
                                  Account
                                </NavLink>
                              </DropdownItem>
                              <DropdownItem className="StaticNavChildContainer">
                                {showUpgrade2}
                              </DropdownItem>
                              <DropdownItem className="StaticNavChildContainer">
                                <Button
                                  onClick={() => {
                                    this.handleLogout();
                                  }}
                                  className="StaticNavChild"
                                >
                                  Log out
                                </Button>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </NavItem>
                      </Nav>
                    </Navbar>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
      return (
        <div>
          {this.props.isSignedIn.isSignedIn === true ? (
            <div className=" DivStyle LibraryPageBody">
              {SignedIn}
              <section className="JumbostyleWithPadding">
                <div className="DivStyle MainViewContainer">
                  <section className="contentSection">
                    <div className=" DivStyle container fluid">
                      <div className=" DivStyle row general">
                        <div className="col-xs-12 col-lg-3 col-xl-4">
                          <div>
                            <header className="TrackListHeader">
                              <div>
                                <div draggable="true">
                                  <div className="TrackListHeader media object">
                                    <div
                                      class=" TrackListHeader media object hoverable "
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="cover art shadow"
                                        aria-hidden="true"
                                      >
                                        <div class=" cover art icon">
                                          <svg
                                            width="80"
                                            height="81"
                                            viewBox="0 0 80 81"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <title>Playlist Icon</title>
                                            <path
                                              d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                                              fill="currentColor"
                                              fill-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </div>
                                        <div className="OneOpacity">
                                          <img
                                            alt=""
                                            className="cover art image"
                                            src={
                                              this.props.currentPlaylist
                                                .currentPlaylist.image
                                            }
                                          />
                                          <div className="overlay"></div>
                                          <button class="cover art playback ButtonHover">
                                            <svg
                                              class="cover art playback icon play"
                                              viewBox="0 0 85 100"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"
                                              >
                                                <title>PLAY</title>
                                              </path>
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="TrackListHeader mo info">
                                    <div clasName="textMenuWrapper">
                                      <div className="TrackListHeader mo info Name">
                                        <span dir="auto">
                                          {
                                            this.props.currentPlaylist
                                              .currentPlaylist.name
                                          }
                                        </span>
                                      </div>
                                      <div className="mo meta ellipsis-one-line">
                                        <span>
                                          <a dir="auto" href="/user/spotify">
                                            Spotify
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className=" TrackListHeader Body">
                                <div className="TrackListHeader Body entity Name">
                                  <h2>
                                    {
                                      this.props.currentPlaylist.currentPlaylist
                                        .name
                                    }
                                  </h2>
                                  <span className="TrackListHeader Body by">
                                    <a
                                      data-owner-uri="spotify:user:spotify"
                                      href="/user/spotify"
                                    >
                                      By Spotify
                                    </a>
                                  </span>
                                </div>
                                <div className="TrackListHeader Body Inverter">
                                  <div className="TrackListHeader Body Inverter Actions">
                                    <button className="signupbtn" type="submit">
                                      PLAY
                                  </button>
                                      <button className="signupbtn" type="submit" onClick={this.handleEditSubmit}>
                                          Edit PlayList
                                      </button>
                                    <div className="TrackListHeader ExtraButtons">
                                      <Button
                                        className="Jumbostyle"
                                        onClick={this.patchFollow}
                                        hidden={this.isPlaylistFollowed()}
                                      >
                                        <i class="fa fa-heart"></i>
                                      </Button>
                                      <Button
                                        className="Jumbostyle"
                                        onClick={this.patchunFollow}
                                        hidden={!this.isPlaylistFollowed()}
                                      >
                                        <i class="fa fa-thumbs-down"></i>{" "}
                                      </Button>
                                    </div>
                                    <p>
                                      {
                                        this.props.currentPlaylist
                                          .currentPlaylist.tracks.length
                                      }{" "}
                                      Songs
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </header>
                          </div>
                        </div>{" "}
                        <div class="DivStyle col-xs-12 col-lg-10 col-xl-8">
                          {this.props.currentPlaylist.currentPlaylist.tracks
                            .length === 0 ? (
                            <div className="NolikedLevelZero">
                              <div className="NolikedLevelOne">
                                <div className="NolikedLevelTwo">
                                  <div className="row TakeitDown">
                                    <div className="col-xs-12 NolikedLevelThree">
                                      <div className="SomeheighPlease">
                                        <svg
                                          width="80"
                                          height="79"
                                          viewBox="0 0 80 79"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <title>Album</title>
                                          <path
                                            d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </div>
                                      <Row>
                                        <Col md={12}>
                                          <h1 class="YourFirstInAll">
                                            Songs you’ve added to your playlist live here{" "}
                                          </h1>
                                          <h4 class="_1bfd68987bbac2dd824e5db895bd3c57-scss">
                                            Find more of the songs you can add to your playlist.
                                          </h4>
                                          <button
                                            class="_2221af4e93029bedeab751d04fab4b8b-scss _1edf52628d509e6baded2387f6267588-scss _4a19a959428c34075eef50bd44ab468f-scss"
                                            type="button"
                                          >
                                            DISCOVER
                                          </button>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              {this.props.currentPlaylist.currentPlaylist.tracks.map(
                                (Song) => {
                                  return (
                                    <section className="TrackListContainer">
                                      <ol className="olstyle TrackListContainer Orderedlist">
                                        <div className="Div textMenuWrapper">
                                          <div draggable="true">
                                            <li
                                              tabindex="0"
                                              role="button"
                                              aria-pressed="false"
                                              className="listyle TrackListRow"
                                            >
                                              <div className="DivStyle TrackListCol PositionOuter">
                                                <div
                                                  role="button"
                                                  className="DivStyle TrackListCol PositionOuter TopAlign PlayPause"
                                                >
                                                  <button onClick={()=>this.handlePlay(Song)}>
                                                  <svg
                                                    class="icon-play"
                                                    viewBox="0 0 85 100"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"
                                                    >
                                                      <title>PLAY</title>
                                                    </path>
                                                  </svg>
                                                  </button>
                                                </div>
                                                <div
                                                  role="button"
                                                  className="DivStyle TrackListCol PositionOuter  Position"
                                                >
                                                  <i className="fa fa-music"></i>
                                                </div>
                                              </div>
                                              <div className="DivStyle TrackListCol name">
                                                <div className="DivStyle TrackListCol TopAlign ">
                                                  <div className="DivStyle InOneLine TrackListName">
                                                    {Song.name}{" "}
                                                  </div>
                                                  <div className="DivStyle TrackListName SecondLine">
                                                    By{" "}
                                                    {Song.artists.map(
                                                      (artist) => {
                                                        return artist.name;
                                                      }
                                                    )}{" "}
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="DivStyle TrackListCol more">
                                                <div className="DivStyle TrackListCol TopAlign">
                                                  <div className="DivStyle TrackListRow more textMenuWrapper">
                                                    <Dropdown >
                                                      <Dropdown.Toggle className="buttonstyle MultiButton NowPlayDropdownToggle">
                                                        <i className="fa fa-ellipsis-h"></i>
                                                      </Dropdown.Toggle>
                                                      <Dropdown.Menu className="NowPlayDropdownMenu">
                                                        {Song.likers.find(el=>el==this.props.data_be.data_be._id)===undefined?(<Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.handleLike(Song)}} >Like Song</Dropdown.Item>
                                                         ):(<Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.handleDislike(Song)}} >Dislike Song</Dropdown.Item>)
                                                         }
                                                        <Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.handleSubmit(Song)}} >Add Song To a PlayList</Dropdown.Item>
                                                        <Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.shareSong(Song); this.toggleModal(true)}} >Share {Song.name}</Dropdown.Item>
                                                        {this.props.data_be.data_be.queue.find(el => el == Song._id)===undefined?(
                                                          <Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.handleAddQueue(Song._id,this.props.data_be.data_be._id)}} >Add To Queue</Dropdown.Item>
                                                        ):(  
                                                        <div>
                                                          <Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.handleRemoveQueue(Song._id,this.props.data_be.data_be._id)}} >Remove From Queue</Dropdown.Item>
                                                          </div>
                                                        )
                                                        }
                                                        <Dropdown.Item  className="NowPlayDropdownItem" onClick={()=>{this.deleteSong(Song)}} >Delete {Song.name} from this playlist</Dropdown.Item>
                                                      </Dropdown.Menu>
                                                    </Dropdown>
                                                  </div>
                                                </div>
                                              </div>
                                              <Modal isOpen={this.props.isModalOpen.isModalOpen} >
                                                <ModalBody className="createPlayListBody">
                                                  <Row>
                                                    <Col md={12} xs={12} sm={12}>
                                                      <Row>
                                                        <Col md={{ size: 6, offset: 5 }} xs={{ size: 6, offset: 3 }} sm={{ size: 6, offset: 3 }}>
                                                          <Button className="exitButton_CP" onClick={()=>this.props.ControlModal(false)}>
                                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                              <title>Close</title>
                                                              <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                                            </svg>
                                                          </Button>
                                                        </Col>
                                                      </Row>
                                                    </Col>
                                                  </Row>
                                                  <div>
                                                    <div>
                                                      <Row>
                                                      <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                                        <h1>Add To Any of your Playlists</h1>
                                                      </Col>
                                                    </Row>
                                                      <div>
                                                        {this.props.data_be.data_be.playlists.length===0?
                                                            (<div><p>No Liked PlayList for you</p></div>):(<div>
                                                              <Row className=" RowSearch" sm="5">
                                                                {this.props.data_be.data_be.playlists.map(item=>{return( <Col className="PaddingColoumns"><Card>
                                                                  <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                                                  <CardBody>
                                                                    <Button className="bg-primary" onClick={()=>{this.AddingToBe(item._id)}}>Add to {item.name}</Button>
                                                                  </CardBody>
                                                                </Card></Col>)})}

                                                              </Row></div>)}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </ModalBody>
                                              </Modal>
                                                <Modal isOpen={this.state.EditingPlaylist} >
                                                    <ModalBody className="createPlayListBody">
                                                        <Row>
                                                            <Col md={12} xs={12} sm={12}>
                                                                <Row>
                                                                    <Col md={{ size: 6, offset: 5 }} xs={{ size: 6, offset: 3 }} sm={{ size: 6, offset: 3 }}>
                                                                        <Button className="exitButton_CP" onClick={()=>this.props.ControlModal(true)}>
                                                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                                <title>Close</title>
                                                                                <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                                                            </svg>
                                                                        </Button>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <div>
                                                            <div>
                                                                <Row>
                                                                    <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                                                        <h1>Add To your Playlists</h1>
                                                                    </Col>
                                                                </Row>
                                                                <div>
                                                                    {this.props.fullsongs.fullSongs.length===0?
                                                                        (<div><p>No Available Songs for you</p></div>):(<div>
                                                                            <Row className=" RowSearch" sm="5">
                                                                                {this.props.fullsongs.fullSongs.map(item=>{return( <Col className="PaddingColoumns"><Card>
                                                                                    <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
                                                                                    <CardBody>
                                                                                        <Button className="bg-primary" onClick={()=>{this.AddingSongPlayListToBe(item._id)}}>Add {item.name}</Button>
                                                                                    </CardBody>
                                                                                </Card></Col>)})}

                                                                            </Row></div>)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ModalBody>
                                                </Modal>
                                              <Modal isOpen={this.state.shareModal===true} >
                                                <ModalBody className="shareSongBody">
                                                  <Row>
                                                    <Col md={12} xs={12} sm={12}>
                                                      <Row>
                                                        <Col md={{ size: 6, offset: 5 }} xs={{ size: 6, offset: 3 }} sm={{ size: 6, offset: 3 }}>
                                                          <Button className="exitButton_CP" onClick={()=>{this.setState({shareModal:false})}}>
                                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                              <title>Close</title>
                                                              <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd"></path>
                                                            </svg>
                                                          </Button>
                                                        </Col>
                                                      </Row>
                                                      <Row><h2 id="shareSongHeader">Enter your friend's email to share {this.state.tempSharedSong.name} with him now!</h2></Row>
                                                    </Col>
                                                  </Row>
                                                  <div>
                                                    <div>
                                                    <form>
                                                      <Row>
                                                      <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                                        <input value={this.state.email} onChange={this.handleChange} placeholder="Your friend's email"></input>
                                                      </Col>
                                                      <Col md={{ size: 6, offset:3}} xs={{ size: 6, offset:3}} sm={{ size: 6, offset:3}} className="Create_new_playlist">
                                                        <Button className="bg-primary" id="shareSongButton" onClick={()=>{this.handleShare(this.state.tempSharedSong)}}>Send</Button>      
                                                      </Col>
                                                    </Row>
                                                      <div>
                                                    
                                                      </div>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </ModalBody>
                                              </Modal>
                                              <div className="DivStyle TrackLisCol Duration">
                                                <div className="DivStyle TrackListHeader Body by">
                                                  <span>3:21</span>
                                                </div>
                                              </div>
                                            </li>
                                          </div>
                                        </div>
                                      </ol>
                                    </section>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          ) : (
            <div>{redirect}</div>
          )}
        </div>
      );
    }
  }
}
export default NowPlay;
