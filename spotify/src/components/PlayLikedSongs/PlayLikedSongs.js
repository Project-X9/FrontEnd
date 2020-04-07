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
  DropdownToggle,
} from "reactstrap";
import "./NowPlay.css";
import { NavLink } from "react-router-dom";
class PlayLikedSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      disabled: false,
      tempId: this.props.id.id,
    };
    this.state.toggleNav = this.toggleNav.bind(this);
  }
  changeBack(e) {
    e.target.style.background = "red";
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    // const userName = this.props.data.data.map((data) => {
    //     if (data.id === this.state.tempId) {
    //       return (
    //         <div>
    //          <Button className="AccountItself">
    //             <DropdownToggle nav caret>
    //                 <i class="fa fa-user-secret"></i>
    //                 {data.name}
    //             </DropdownToggle>
    //         </Button>
    //         </div>
    //       );
    //     }
    //   });

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

    // const showUpgrade1 = this.props.data.data.map(data => {
    //   if (data.id === this.state.tempId) {
    //     if (data.premium === false) {
    //       return (
    //       <NavItem>
    //           <Button className="NextToAccount" color="success">
    //               <NavLink className="NextToAccount" to="/premium">UPGRADE</NavLink>
    //           </Button>
    //       </NavItem>
    //       )}
    //     return (<span></span>)
    //   }
    // });

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

    // const showUpgrade2 = this.props.data.data.map(data => {
    //   if (data.id === this.state.tempId) {
    //     if (data.premium === false) {
    //       return (
    //       <NavLink
    //           className="StaticNavChild Disappear"
    //           to="/premium">
    //           Upgarde to Premium
    //       </NavLink>
    //       )}
    //     return (<span></span>)
    //   }
    // });

    let showUpgrade2 = "";
    if (this.props.data_be.data_be.premium === false) {
      showUpgrade2 = (
        <NavLink className="StaticNavChild Disappear" to="/premium">
          Upgarde to Premium
        </NavLink>
      );
    } else {
      showUpgrade2 = <span></span>;
    }

    // const SignedIn = this.props.data.data.map((data) => {
    //   if (data.id === this.state.tempId) {
    //     return (
    //       <div>
    //         <div className="row">
    //             <div className="WebPlayerHomeNav">
    //                 <div className="container">
    //                     <Navbar className="NavBar NavStyle" expand="md">
    //                         <Nav className="mr-auto" href="/signup">
    //                         <NavItem className="CustomNavitems">
    //                                 <Button className="CustomButton">
    //                                     <NavLink className="nav-link" to="/webplayer/librarypage/playlists">
    //                                     <svg className="CustomSvg" viewBox="0 0 24 24">
    //                                     <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>
    //                                     </NavLink>
    //                                 </Button>
    //                         </NavItem>
    //                         <NavItem className="CustomNavitems">
    //                                 <Button className="CustomButton">
    //                                         <NavLink className="nav-link" to="/webplayer/search">
    //                                         <svg className="CustomSvg" viewBox="0 0 24 24">
    //                                         <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
    //                                         </svg>
    //                                         </NavLink>
    //                                 </Button>
    //                         </NavItem>
    //                         </Nav>
    //                         <Nav navbar className="ml-auto">
    //                             {showUpgrade1}
    //                             <NavItem>
    //                                 <UncontrolledDropdown nav inNavbar>
    //                                 {userName}
    //                                 <DropdownMenu className="StaticNav" right>
    //                                     <DropdownItem className="StaticNavChildContainer">
    //                                     <NavLink
    //                                         className="StaticNavChild"
    //                                         to="/account/overview">
    //                                         Account
    //                                     </NavLink>
    //                                     </DropdownItem>
    //                                     <DropdownItem className="StaticNavChildContainer">
    //                                     {showUpgrade2}
    //                                     </DropdownItem>
    //                                     <DropdownItem className="StaticNavChildContainer">
    //                                     <Button
    //                                         onClick={() => { this.handleLogout() }}
    //                                         className="StaticNavChild">
    //                                         Log out
    //                                     </Button>
    //                                     </DropdownItem>
    //                                 </DropdownMenu>
    //                                 </UncontrolledDropdown>
    //                             </NavItem>
    //                         </Nav>
    //                     </Navbar>
    //                 </div>
    //             </div>
    //         </div>
    //</div>
    let SignedIn = "";
    if (this.props.data_be.data_be._id !== "") {
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
    let playlistsActive = "";
    let albumsActive = "";
    let artistsActive = "";
    let currentURL = window.location.href;
    if (
      currentURL === "http://localhost:3000/webplayer/librarypage/playlists"
    ) {
      playlistsActive = " activeButton";
      albumsActive = "";
      artistsActive = "";
    } else if (
      currentURL === "http://localhost:3000/webplayer/librarypage/albums"
    ) {
      playlistsActive = "";
      artistsActive = "";
      albumsActive = " activeButton";
    } else if (
      currentURL === "http://localhost:3000/webplayer/librarypage/artists"
    ) {
      playlistsActive = "";
      albumsActive = "";
      artistsActive = " activeButton";
    }

    /////////////////////////////////////////////////////////RenderSongsDone//////////////////////////////////////////////////

    return (
      <div className=" DivStyle LibraryPageBody">
        {SignedIn}
        <section className="Jumbostyle">
          <div className="DivStyle MainViewContainer">
            <section className="contentSection">
              <div className=" DivStyle container fluid">
                <div className=" DivStyle row general">
                  <div class="DivStyle col-xs-12 col-lg-12 col-xl-12">
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
                                      Songs you’ve liked live here{" "}
                                    </h1>
                                    <h4 class="_1bfd68987bbac2dd824e5db895bd3c57-scss">
                                      Find more of the songs you love in Browse
                                      and save to your Liked Songs.
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
                                              By {Song.artist}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="DivStyle TrackListCol more">
                                          <div className="DivStyle TrackListCol TopAlign">
                                            <div className="DivStyle TrackListRow more textMenuWrapper">
                                              <button className="buttonstyle MultiButton">
                                                <i class="fa fa-ellipsis-h"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
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
    );
  }
}
export default PlayLikedSongs;
