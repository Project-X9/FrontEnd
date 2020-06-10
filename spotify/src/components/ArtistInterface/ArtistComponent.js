import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import NavbarHome from "./NavbarComponent";
import "./Artist.css";
import Artists from "../Library/ArtistsComponent";
import LibraryNavbar from "../Library/LibraryNavbar";
import { Loading } from "./../Loading/LoadingComponent";

import { Jumbotron, Row, Col, Button, DropdownToggle } from "reactstrap";
/**
 * Artist Interface page
 */
class Artist extends Component {
  /**
   * 
   * @param {Object} props
   * @param overview The parameter that indicates which of the 3 views will be displayed, default at 1 for overview on the artist, 2 for related artists and 3 for the biography of the artists
   * @param props.currentPlaylist.currentPlaylist Calls the current playlist elements from the database, contains all the info we need about the artist 
   */
  constructor(props) {
    super(props);
    this.state = {
      overview: 1,
      following: false,
      isNavOpen: false,
      // Followed: this.props.data_be.data_be.following.id,
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.toggleRelated = this.toggleRelated.bind(this);
  }

  /**Toggles the Navigation bar by switching isNavOpen from true to false and vice versa */
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }

  /**Handles when a user logs out */
  handleLogout() {
    // alert(this.props.currentPlaylist.isLodaing)
    this.props.handleLogout_BE();
  }

  /**The function that handles clicking the overview button, sets the value of overview to 1 in the state */
  toggleOverview() {
    // const Checker = this.handleData();
    const Temp = 1;
    this.setState({ overview: Temp });
  }

  /**The function that handles clicking the related artists button, sets the value of overview to 2 in the state */
  toggleRelated() {
    // const Checker = this.handleData();
    const Temp = 2;
    this.setState({ overview: Temp });
  }

  /**The function that handles clicking the about button, sets the value of overview to 3 in the state */
  toggleAbout() {
    // const Checker = this.handleData();
    const Temp = 3;
    this.setState({ overview: Temp });
  }
  componentDidMount(){
    if(!this.props.currentPlaylist.isLoading){
      this.props.currentPlaylist.currentPlaylist.followers.find(el => el._id==this.props.data_be.data_be._id)===undefined?(this.setState({following: false})):(this.setState({following:true}))
    }
  }

/**Follow artist function, currently only changes the button on click, to be implemented later */
  toggleFollow() {

    const temp = this.state.following;
    if(temp===false){
    this.props.FollowArtist(this.props.currentPlaylist.currentPlaylist._id,this.props.data_be.data_be._id,this.props.token.token);
    }
    else{
      this.props.UnFollowArtist(this.props.currentPlaylist.currentPlaylist._id,this.props.data_be.data_be._id,this.props.token.token);
    }
    this.setState({ following: !temp });
  }
  handleCurrentAlbums(data) {
    // let id="";
    // this.props.handleLogoutId(id);
    let id="";
    /*
    for(let i=0;i<data.length;i++){
      const id = this.props.data_be.data_be.albums.find(
        (element) => element._id == this.props.currentPlaylist.currentPlaylist.albums[i]
      )==undefined?return(<div></div>)

    }*/
  }

  /**
   * Responsible for showing everything on the Artist page
   * @returns Components that will be displayed on the page
   */

  render() {
    if (this.props.currentPlaylist.isLoading) {
      return <Loading />;
    } else {
      let TopSongs="";
      let TopAlbums="";
      let element="";
 // this.handleCurrentAlbums(this.props.currentPlaylist.currentPlaylist);
      return (
        <div className="artistPage container">
          <div className="container-fluid m-0 p-0">
            <div className="main-artist">
              <LibraryNavbar
                data={this.props.data}
                id={this.props.id}
                handleLogoutId={this.props.handleLogoutId}
                data_be={this.props.data_be}
                isSignedIn={this.props.isSignedIn}
                handleLogout_BE={this.props.handleLogout_BE}
              />
              <div className="jumbotron-container" width="100%">
                <Jumbotron
                  className="JumboHeaderImg"
                  style={{
                    backgroundImage:
                      "url(" +
                      this.props.currentPlaylist.currentPlaylist.image +
                      ")"
                  }}
                >
                  <div className="App Headers">
                    <div>
                      <header className="Header1">
                        {this.props.currentPlaylist.currentPlaylist.name}
                      </header>
                    </div>
                  </div>
                  <div className="container">
                    <p>
                      <Button
                        className="signupbtn"
                        id="playButton"
                        onClick={this.playHandler}
                      >
                        Play
                      </Button>
                      {!this.state.following && (
                        <Button
                          className="signupbtn"
                          id="followButton"
                          onClick={ this.toggleFollow}
                        >
                          follow
                        </Button>
                      )}
                      {this.state.following && (
                        <Button
                          className="signupbtn"
                          id="followButton"
                          onClick={this.toggleFollow}
                        >
                          unfollow
                        </Button>
                      )}
                    </p>
                  </div>
                </Jumbotron>
              </div>
              <div className="switchers">
                <Button
                  className="secondary Header1"
                  id="ov"
                  onClick={this.toggleOverview}
                >
                  Overview
                </Button>
                <Button
                  className="secondary Header1"
                  id="ab"
                  onClick={ this.toggleRelated}
                >
                  Related Artists
                </Button>
                <Button
                  className="secondary Header1"
                  id="ab"
                  onClick={ this.toggleAbout}
                >
                  About
                </Button>
              </div>
              {this.state.overview === 1 && (
                <div className="container">
                  <header className="Header1" id="popular-songs">
                    Popular
                  </header>
                  {TopSongs = this.props.currentPlaylist.currentPlaylist.tracks.map((song)=>
                  {return(
                  <Link>
                    <div className="artist-song">
                      <img
                        src={song.imageUrl}
                        width="50px"
                        height="50px"
                        className="artist-image"
                      />
                      <p className="song-text">
                        {
                          song.name
                        }
                      </p>
                      <p className="duration">3:03</p>
                    </div>
                  </Link>
                  )})}
                  <header className="Header1" id="popular-songs">
                    Albums
                  </header>
                  <div className="artist-albums">
                    {TopAlbums = this.props.currentPlaylist.currentPlaylist.albums.map((album)=>{return(
                      this.props.data_be.data_be.albums.find(
                        (element) => element._id == album
                      )===undefined?(<div>hello</div>):(
                    <Link>
                      <div className="album-card">
                        <img
                          src={element.image}
                          width="150px"
                          height="152px"
                          className="artist-image"
                          id="album-img"
                        ></img>
                        <span class="caption">{element.name}</span>{" "}
                      </div>
                    </Link>))})}
                  </div>
                </div>
              )}
              {this.state.overview === 3 && (
                <div className="container">
                  <header className="Header1" id="popular-songs">
                    Biography
                  </header>
                  <p id="bio-body">
                    {this.props.currentPlaylist.currentPlaylist.Bio}
                  </p>
                </div>
              )}
              {this.state.overview === 2 && (
                <div className="container">
                  <Link to="/webplayer/nowplay">
                    <div key="1" className="CardsLibrary">
                      <Row>
                        <Col md={12}>
                          <h1 className="header_playList">Artists</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="gridView">
                            <div className="CardsLibrary">
                              <Row>
                                <Col>
                                  <div>
                                    <div className="cardPhoto_ArtistPage">
                                      <div className="imageHolder_ArtistPage">
                                        <img
                                          src="https://i.scdn.co/image/ee11ffb4c0f334e4c958ed051bbaf5f720751c9d"
                                          alt=""
                                          className="theimage_ArtistPage  "
                                        ></img>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mr-auto">
                                <Col md={12}>
                                  <Row className="cardTitle">
                                    <Col md={12}>
                                      <Link className="titlePlaylistLink">
                                        {/*this.props.currentPlaylist.currentPlaylist.relatedArtists*/}
                                      </Link>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={12}>
                                      <div className="desciptionPlaylistLink">
                                        <span>Artist</span>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={12}>
                                      <div className="displayButton">
                                        <div className="playButtonPlayList">
                                          <Button className="theButtonItself ">
                                            <svg
                                              height="16"
                                              role="img"
                                              width="16"
                                              viewBox="0 0 24 24"
                                            >
                                              <polygon
                                                points="21.57 12 5.98 3 5.98 21 21.57 12"
                                                fill="currentColor"
                                              ></polygon>
                                            </svg>
                                          </Button>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Artist;
