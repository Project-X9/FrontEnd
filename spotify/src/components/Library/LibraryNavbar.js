
import React, { Component } from "react";

import { 
    Nav,Navbar,NavItem,
   Button, Row, Col,DropdownItem,UncontrolledDropdown,DropdownToggle,DropdownMenu} from 'reactstrap'; 
import {NavLink} from "react-router-dom";

import "./Page.css";


class LibraryNavbar extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId:''
        };
        

      
    }
    
    
    render(){
        let playlistsActive=''
        let albumsActive=''
        let artistsActive=''
        let currentURL=window.location.href
        if(currentURL==="http://localhost:3000/librarypage/playlists")
        {
            playlistsActive=' activeButton'; albumsActive=''; artistsActive=''; 
        }
        else if(currentURL==="http://localhost:3000/librarypage/albums")
        {
            playlistsActive=''; artistsActive=''; albumsActive=' activeButton'; ;
        }
        else if(currentURL==="http://localhost:3000/librarypage/artists")
        {
            playlistsActive=''; albumsActive=''; artistsActive=' activeButton';
        }
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
                                <NavLink className={ "nav-link customizedNavLink "+ playlistsActive} to="/librarypage/playlists">
                                    Playlists
                                </NavLink>
                            </NavItem>
                            <NavItem className="Disappear  customizedNavitems">
                                <NavLink className={ "nav-link customizedNavLink "+ artistsActive} to="/librarypage/artists">
                                    Artists
                                </NavLink>
                            </NavItem>
                            <NavItem className=" Disappear customizedNavitems ">
                                <NavLink className={ "nav-link customizedNavLink "+ albumsActive} to="/librarypage/albums">
                                    Albums
                                </NavLink>
                            </NavItem>
                    <Nav className="ml-auto" navbar>
                        <NavItem className=" customizedNavLink ">
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
                </Nav>
                    </Col>
                </Row>
                </div>
            </Navbar>
            </div>
        </div>
        );
  }
}
export default LibraryNavbar;