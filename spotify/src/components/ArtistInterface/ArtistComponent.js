import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import NavbarHome from "./NavbarComponent";
import "./Artist.css";
import Artists from "../Library/ArtistsComponent";
import LibraryNavbar from "../Library/LibraryNavbar";
import { Loading } from './../Loading/LoadingComponent';

import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  DropdownButton,
  ButtonDropdown,
  Button,
  DropdownToggle
} from "reactstrap";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempId: "",
      overview: 1,
      following: false
      // Followed: this.props.data_be.data_be.following.id,
    };

    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.toggleRelated = this.toggleRelated.bind(this);
  }

  toggleOverview() {
    // const Checker = this.handleData();
    const Temp = 1;
    this.setState({ overview: Temp });
  }
  toggleRelated() {
    // const Checker = this.handleData();
    const Temp = 2;
    this.setState({ overview: Temp });
  }
  toggleAbout() {
    // const Checker = this.handleData();
    const Temp = 3;
    this.setState({ overview: Temp });
  }

  toggleFollow() {
    const temp = this.state.following;
    this.setState({ following: !temp });
  }

  /*followArtist() {
    if (this.state.Followed != null) {
      this.props.FollowPost(this.props.data_be.data_be.following.id, null);
      this.setState({ Followed: false });

    } else if (this.state.Followed) {
      this.props.FollowPost(this.props.data_be.data_be.following.id, id);
      this.setState({ Followed: true });
      this.togglemodal();
    }
  }*/
  /*
                followers
                generes
                tracks
                related 
                artists
                id
                name 
                bio 
                img 
                email
                this.props.currentplaylist.currentplaylist.email*/

  render() {
    if(this.props.currentPlaylist.isLoading)
    {
      return(
      <Loading />
      );
    }
    else
    {
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
                      onClick={()=>this.playHandler}
                    >
                      Play
                    </Button>
                    {!this.state.following && (
                      <Button
                        className="signupbtn"
                        id="followButton"
                        onClick={()=>this.toggleFollow}
                      >
                        follow
                      </Button>
                    )}
                    {this.state.following && (
                      <Button
                        className="signupbtn"
                        id="followButton"
                        onClick={()=>this.toggleFollow}
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
                onClick={()=>this.toggleOverview}
              >
                Overview
              </Button>
              <Button
                className="secondary Header1"
                id="ab"
                onClick={()=>this.toggleRelated}
              >
                Related Artists
              </Button>
              <Button
                className="secondary Header1"
                id="ab"
                onClick={() => this.toggleAbout}
              >
                About
              </Button>
            </div>
            {this.state.overview === 1 && (
              <div className="container">
                <header className="Header1" id="popular-songs">
                  Popular
                </header>
                <Link>
                  <div className="artist-song">
                    <img
                      src="https://annsokoto.files.wordpress.com/2018/02/dualipa.jpg?w=356&h=356"
                      width="50px"
                      height="50px"
                      className="artist-image"
                    />
                    <p className="song-text">
                      {this.props.currentPlaylist.currentPlaylist.tracks[0]}
                    </p>
                    <p className="duration">3:03</p>
                  </div>
                </Link>
                {/* <Link>
                  <div className="artist-song">
                    <img
                      src="https://annsokoto.files.wordpress.com/2018/02/dualipa.jpg?w=356&h=356"
                      width="50px"
                      height="50px"
                      className="artist-image"
                    />
                    <p className="song-text">{this.props.currentPlaylist.currentPlaylist.tracks[1]}</p>
                    <p className="duration">3:29</p>
                  </div>
                </Link> */}
                {/* <Link>
                  <div className="artist-song">
                    <img
                      src="https://annsokoto.files.wordpress.com/2018/02/dualipa.jpg?w=356&h=356"
                      width="50px"
                      height="50px"
                      className="artist-image"
                    />
                    <p className="song-text">{this.props.currentPlaylist.currentPlaylist.tracks[2]}</p>
                    <p className="duration">3:43</p>
                  </div>
                </Link>
                <Link>
                  <div className="artist-song">
                    <img
                      src="https://annsokoto.files.wordpress.com/2018/02/dualipa.jpg?w=356&h=356"
                      width="50px"
                      height="50px"
                      className="artist-image"
                    />
                    <p className="song-text">{this.props.currentPlaylist.currentPlaylist.tracks[3]}</p>
                    <p className="duration">3:21</p>
                  </div>
                </Link>
                <Link>
                  <div className="artist-song">
                    <img
                      src="https://annsokoto.files.wordpress.com/2018/02/dualipa.jpg?w=356&h=356"
                      width="50px"
                      height="50px"
                      className="artist-image"
                    />
                    <p className="song-text">{this.props.currentPlaylist.currentPlaylist.tracks[4]}</p>
                    <p className="duration">3:13</p>
                  </div>
                </Link> */}
                <header className="Header1" id="popular-songs">
                  Albums
                </header>
                <div className="artist-albums">
                  <Link>
                  <div className="album-card">
                    <img
                      src="https://annsokoto.files.wordpress.com/2018/02/dualipa.jpg?w=356&h=356"
                      width="150px"
                      height="150px"
                      className="artist-image"
                      id="album-img"
                    ></img>
                    <span class="caption">Dua Lipa</span>{" "}
                  </div>
                  </Link>
                  <Link>
                  <div className="album-card">
                    <img
                      src="https://myegy.io/files/img/content/9/938/1585610997.500_1000.jpg"
                      width="150px"
                      height="150px"
                      className="artist-image"
                      id="album-img"
                    ></img>
                    <span class="caption">Future Nostalgia</span>{" "}
                  </div>
                  </Link>
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
                                      {this.props.currentPlaylist.currentPlaylist.relatedArtists}
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
