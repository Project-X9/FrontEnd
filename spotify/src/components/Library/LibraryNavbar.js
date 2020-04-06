
import React, { Component } from "react";

import { 
    Nav,Navbar,NavItem,
   Button, Row, Col,DropdownItem,UncontrolledDropdown,DropdownToggle,DropdownMenu} from 'reactstrap'; 
import {NavLink,Redirect} from "react-router-dom";

import "./Page.css";


class LibraryNavbar extends Component {
    constructor(props){
        super(props);
        this.state={
        
        };
 
    }
    

  handleLogout(){
    let id="";
    this.props.handleLogoutId(id);
  }
    
    render(){
        // let redirected = null;
        // if (this.props.id.id === "") {
        // //   alert("hassona")
        //   redirected = <Redirect to="/webplayer/home"></Redirect>
        // }
        let playlistsActive=''
        let albumsActive=''
        let artistsActive=''
        let currentURL=window.location.href
        if(currentURL==="http://localhost:3000/webplayer/librarypage/playlists")
        {
            playlistsActive=' activeButton'; albumsActive=''; artistsActive=''; 
        }
        else if(currentURL==="http://localhost:3000/webplayer/librarypage/albums")
        {
            playlistsActive=''; artistsActive=''; albumsActive=' activeButton'; ;
        }
        else if(currentURL==="http://localhost:3000/webplayer/librarypage/artists")
        {
            playlistsActive=''; albumsActive=''; artistsActive=' activeButton';
        }
        return(
            
            <div>
            {this.props.id.id !== "" ? (
                <div>
                    <Navbar expand="md" className="customizedNavbar" >
                    <div className="container customizedContainer">
                     <Row className="flexRowOfLibraryPage">
                         <Col md={12}>
                    <Nav navbar className="flexRowOfLibraryPage">
                        <NavItem className="customizedNavitems">
                            <Button className="customizedButton">
                                <NavLink className="nav-link customizedArrows" to="/webplayer/search">
                                <svg className="customizedSvg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                </NavLink>
                            </Button>   
                        </NavItem>
                        <NavItem className="customizedNavitems">
                        <Button className="customizedButton">
                                <NavLink className="nav-link customizedArrows" to="/webplayer/home">
                                <svg className="customizedSvg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                                </svg>    
                                </NavLink>
                            </Button>  
                        </NavItem>
                        <NavItem className="customizedNavitems">
                                <NavLink className={ "nav-link customizedNavLink "+ playlistsActive} to="/webplayer/librarypage/playlists">
                                    Playlists
                                </NavLink>
                            </NavItem>
                            <NavItem className="Disappear  customizedNavitems">
                                <NavLink className={ "nav-link customizedNavLink "+ artistsActive} to="/webplayer/librarypage/artists">
                                    Artists
                                </NavLink>
                            </NavItem>
                            <NavItem className=" Disappear customizedNavitems ">
                                <NavLink className={ "nav-link customizedNavLink "+ albumsActive} to="/webplayer/librarypage/albums">
                                    Albums
                                </NavLink>
                            </NavItem>
                    <Nav className="CustomizedNavForTheDropDownItem" navbar>
                        <NavItem className=" customizedNavLink ">
                            <UncontrolledDropdown nav inNavbar >
                            <Button className="AccountItself">
                                <DropdownToggle nav caret className="profileNavItem">
                                    <i class="fa fa-user-secret"></i>
                                    {/* {this.props.data.data[this.props.id.id -1].name} */}
                                </DropdownToggle>
                            </Button>
                            <DropdownMenu className="StaticNav" right>
                              
                                <DropdownItem className="StaticNavChildContainer DisappearFromDropDowm">
                                <NavLink
                                    className="StaticNavChild "
                                    to="/account/overview">
                                    Account    
                                </NavLink>{" "}
                                </DropdownItem>
                                <DropdownItem className="StaticNavChildContainer DisappearFromDropDowm">
                                <Button
                                    onClick={() => { this.handleLogout() }} 
                                    className="StaticNavChild"
                                    >
                                    Log out
                                </Button>{" "}
                                </DropdownItem>
                                <DropdownItem className="StaticNavChildContainer">
                                <NavLink
                                    className="StaticNavChild Disappear"
                                    to="/librarypage/artists">
                                    Artistst
                                </NavLink>{" "}
                                </DropdownItem>
                                <DropdownItem className="StaticNavChildContainer">
                                <NavLink
                                    className="StaticNavChild Disappear"
                                    to="/librarypage/albums">
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
            ):(
                <div></div>
            )}
            
            {/* </div> */}
        </div>
        );
  }
}
export default LibraryNavbar;