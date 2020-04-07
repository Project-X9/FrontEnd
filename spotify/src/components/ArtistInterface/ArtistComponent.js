import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import NavbarHome from "./NavbarComponent";
import "./Artist.css";
import ContextMenu from "react-context-menu";
import TopNav from "./TopNav";

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
import LibraryNavbar from "../Library/LibraryNavbar";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempId: "",
      overview: true
    };

    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }
  toggleOverview() {
    // const Checker = this.handleData();
    const Temp = true;
    this.setState({ overview: Temp });
  }
  toggleAbout() {
    // const Checker = this.handleData();
    const Temp = false;
    this.setState({ overview: Temp });
  }

  followArtist = () => {
    console.log("link followde");
  };
  playHandler = () => {
    console.log("link radio");
  };
  copyLink = () => {
    console.log("link cpd");
  };
  render() {
    return (
      <div className="artistPage container">
        <div className="main-artist">
          <div className="jumbotron-container" width="100%">
            <Jumbotron className="JumboHeaderImg">
              <div className="App Headers">
                <div>
                  <header className="Header1">Dua Lipa</header>
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
                  <Button
                    className="signupbtn"
                    id="followButton"
                    onClick={this.followArtist}
                  >
                    follow
                  </Button>
                  {/*
                <div className="menu-more" id="react-contextmenu-wrapper"></div>
                <ContextMenu
                  contextId={"react-contextmenu-wrapper"}
                  items={[
                    {
                      label: "Start Radio",
                      onClick: this.radioHandler
                    },
                    {
                      label: "Follow",
                      onClick: this.followArtist
                    },
                    {
                      label: "Copy Artist Link",
                      onClick: this.copyLink
                    }
                  ]}
                />*/}
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
              onClick={this.toggleAbout}
            >
              About
            </Button>
          </div>
          {this.state.overview && (
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
                  <p className="song-text">One Kiss</p>
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
                  <p className="song-text">New Rules</p>
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
                  <p className="song-text">Don't start now</p>
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
                  <p className="song-text">Physical</p>
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
                  <p className="song-text">Break My Heart</p>
                </div>
              </Link>
            </div>
          )}
          {!this.state.overview && (
            <div className="container">
              <header className="Header1" id="popular-songs">
                Biography
              </header>
              <p id="bio-body">
                Dua Lipa arrived in style in 2015 with her self-titled, chart
                topping debut album which eclipsed 4 million sales worldwide
                with single sales reaching over 40 million. Dua Lipa is also
                officially the most streamed album by a female artist in Spotify
                history. The video for her breakout global #1 hit "New Rules"
                made her the youngest female solo artist to reach one billion
                views on YouTube, and the track became the first to spend a
                record 45 weeks on the Billboard Pop Songs Chart. Dua made BRIT
                Award history in 2018 by becoming the first female artist to
                pick up five nominations, with two wins for British Breakthrough
                Act and British Female Solo Artist, all while selling out tours
                around the world. In early 2019, she received two Grammy awards
                for Best New Artist and Best Dance Recording. Her newest single
                "Don't Start Now" debuted at #1 on the worldwide iTunes Chart
                and was the #1 trending video on YouTube upon its release.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Artist;
