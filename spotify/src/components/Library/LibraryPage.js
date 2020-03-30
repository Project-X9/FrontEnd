
import React, { Component, useState } from "react";

import { 
    Nav,Navbar,NavItem,NavbarToggler,
   Button,Label,Input,Jumbotron, Row, Col,Collapse,DropdownItem,UncontrolledDropdown,DropdownToggle,DropdownMenu} from 'reactstrap'; 
import {Link,NavLink} from "react-router-dom";

import "./Page.css";


class LibraryPage extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId:'',
            isNavOpen:false,

        };
        this.state.toggleNav=this.toggleNav.bind(this);

      
    }
    
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){

        return(
            <div>
            <div className="LibraryPageBody">
            <Navbar expand="md" className="customizedNavbar">
                    <div className="container">
                     <Row className="flexRowOfLibraryPage">
                         <Col>
                            
                    <Nav navbar className="flexRowOfLibraryPage">
                        <NavItem className="customizedNavitems">
                            <Button className="customizedButton">
                                <NavLink className="nav-link customizedArrows" to="/">
                                <svg className="customizedSvg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                </NavLink>
                            </Button>   
                        </NavItem>
                        <NavItem className="customizedNavitems">
                        <Button className="customizedButton">
                                <NavLink className="nav-link customizedArrows" to="/">
                                <svg className="customizedSvg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                                </svg>    
                                </NavLink>
                            </Button>  
                        </NavItem>
                        <NavItem className="customizedNavitems">
                                <NavLink className="nav-link customizedNavLink" to="/">
                                    Playlists
                                </NavLink>
                            </NavItem>
                            <NavItem className="Disappear  customizedNavitems">
                                <NavLink className="nav-link customizedNavLink " to="/">
                                    Artists
                                </NavLink>
                            </NavItem>
                            <NavItem className=" Disappear customizedNavitems ">
                                <NavLink className="nav-link customizedNavLink" to="/">
                                    Albums
                                </NavLink>
                            </NavItem>
                        <NavItem className=" customizedNavLink toTheLeft">
                            <UncontrolledDropdown nav inNavbar >
                            <Button className="AccountItself">
                                <DropdownToggle nav caret className="profileNavItem">
                                    <i class="fa fa-user-secret"></i>
                                    Profile
                                </DropdownToggle>
                            </Button>
                            <DropdownMenu className="StaticNav" right>
                                <DropdownItem className="StaticNavChildContainer DisappearFromDropDowm">
                                <NavLink
                                    className="StaticNavChild"
                                    to="accountoverview">
                                    Account
                                </NavLink>{" "}
                                </DropdownItem>
                                <DropdownItem className="StaticNavChildContainer DisappearFromDropDowm">
                                <NavLink
                                    className="StaticNavChild "
                                    to="accountoverview">
                                    Log out
                                </NavLink>{" "}
                                </DropdownItem>
                                <DropdownItem className="StaticNavChildContainer">
                                <NavLink
                                    className="StaticNavChild Disappear"
                                    to="accountoverview">
                                    Artistst
                                </NavLink>{" "}
                                </DropdownItem>
                                <DropdownItem className="StaticNavChildContainer">
                                <NavLink
                                    className="StaticNavChild Disappear"
                                    to="accountoverview">
                                    Albums
                                </NavLink>{" "}
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                    </Col>
                </Row>
                </div>
            </Navbar>
            <div className="container MainViewPlaylsit">
                <div className="sectionPlayList">
                    <Row>
                        <Col  md={12}>
                            <h1 className="header_playList">Playlists</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={12}>
                            <div className="gridView">
                                <div className="LikedSongs">
                                    <div draggable="true">
                                        <div className="showLiked">
                                            <div className="insideLiked">
                                                <span className="customizedSpan"></span>
                                                <span dir="auto">Wegz</span>
                                                <span className="customizedSpan">دورك جي</span>
                                            </div>
                                        </div>
                                        <div className="titleLiked">
                                            <Row>
                                                <Col  md={12}>
                                                    <Link className="likedNav" to="/">
                                                        <span dir="auto" className="likedSongsSpan">Liked Songs</span>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col  md={12}>
                                                    <div className="noOflikedSongs">1 Liked song</div>
                                                </Col>
                                            </Row>
                                            <Row className="playButtonOfLikedSongs">
                                                <Col  md={12}>
                                                    <Button className="PlayButton">
                                                    <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                                                        <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor">
                                                        </polygon>
                                                    </svg>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="CardsLibrary">
                                    <Row>
                                        <Col>
                                            <div>
                                                <div className="cardPhoto">
                                                    <div className="imageHolder">
                                                    <img src="https://i.scdn.co/image/ab67706f000000021c6e257c426955c06bdfb9ef" alt="" className="theimage"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <Row className="cardTitle" >
                                                <Col md={12}>
                                                    <Link className="titlePlaylistLink">Todays Best Egyptsadasdasd</Link>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <p className="desciptionPlaylistLink">Todays Best Egyptsadasdasd</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </div>
        </div>
        </div>
        );
  }
}

export default LibraryPage;