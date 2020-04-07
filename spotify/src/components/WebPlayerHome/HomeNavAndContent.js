/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import { Navbar,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Button} from "reactstrap";
import { NavLink} from "react-router-dom";
import PopularPlaylistsContent from "./PopularPlaylistsContent";
import PopularArtistsHomeAndNavContent from "./PopularArtistsHomeAndNavContent";
import PopularAlbumsHomeAndNavContent from "./PopularAlbumsHomeAndNavContent";


/**
 * WebPlayer page
 */
class HomeNavAndContentSigned extends Component {
 
   /**
   *
   * @param {Object} props
   * @param props.data Essentially contains the data of the users in the database
   * @param props.id Essentially contains the id of one of the users in the database
   * @param props.playLists Essentially contains the data of the playlists in the database
   * @param props.handleLogoutId Essentially taks an id (should be an empty string) and replaces the current user id with it
   */
  constructor(props) {
    super(props);
    this.state = {
        tempId: this.props.id.id,
    };
    this.state.handleLogout = this.handleLogout.bind(this);
  }

  /**
   * Sets a variable to an empty string then passes it to
   * handleLogoutId() functions which logs the user out
   */
  handleLogout(){
    // let id="";
    // this.props.handleLogoutId(id);
    this.props.handleLogout_BE();
  }

  /**
   * Responsible for showing everything on the webplayer page
   * @returns Components that will be displayed on the page
   */
 
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

    
      
    let userName =(
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

      let showUpgrade1="" 
      if (this.props.data_be.data_be.premium === false) {
        showUpgrade1= (
        <NavItem>
            <Button className="NextToAccount" color="success">
                <NavLink className="NextToAccount" to="/premium">UPGRADE</NavLink>
            </Button> 
        </NavItem>
        )}
      else{
        showUpgrade1=(<span></span>)
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

      let showUpgrade2="" 
      if (this.props.data_be.data_be.premium === false) {
        showUpgrade2= (
          <NavLink
              className="StaticNavChild Disappear"
              to="/premium">
              Upgarde to Premium
          </NavLink>
        )}
      else{
        showUpgrade2=(<span></span>)
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
      //                                     <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/librarypage/playlists">
      //                                     <svg className="CustomSvg" viewBox="0 0 24 24">
      //                                     <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
      //                                     </NavLink>
      //                                 </Button>   
      //                         </NavItem>
      //                         <NavItem className="CustomNavitems">
      //                                 <Button className="CustomButton">
      //                                         <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/search">
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
      //         <div className="row RowWebPlayerHomeContent">
      //           <div className="WebPlayerHomeContent">
      //             <div className="container">
      //             <PopularPlaylistsContent
      //                playLists={this.props.playLists}            
      //                />
      //               <PopularArtistsHomeAndNavContent
      //                artist={this.props.artist}
      //                />
      //               <PopularAlbumsHomeAndNavContent
      //                album={this.props.album}
      //                />
      //             </div>
      //           </div>
      //         </div>
      //      </div>
      //     );
      //   }
      // });
      //   if (''===this.state.tempId) {
      //     return(
      //       <div>
      //         <div className="row">
      //             <div className="WebPlayerHomeNav">
      //                 <div className="container">
      //                     <Navbar className="NavBar NavStyle" sticky="top" expand="md">
      //                         <Nav className="mr-auto" href="/signup">
      //                         <NavItem className="CustomNavitems">
      //                                 <Button className="CustomButton">
      //                                     <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/librarypage/playlists">
      //                                     <svg className="CustomSvg" viewBox="0 0 24 24">
      //                                     <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
      //                                     </NavLink>
      //                                 </Button>   
      //                         </NavItem>
      //                         <NavItem className="CustomNavitems">
      //                                 <Button className="CustomButton">
      //                                         <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/search">
      //                                         <svg className="CustomSvg" viewBox="0 0 24 24">
      //                                         <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
      //                                         </svg>    
      //                                         </NavLink>
      //                                 </Button>  
      //                         </NavItem>
      //                         </Nav>
      //                         <Nav navbar className="ml-auto MakingTheButtonsHorizontal">
      //                           <NavItem>
      //                             <Button className="HomeNotSignedUp" color="success">
      //                                 <NavLink className="HomeNotSignedUp" to="/signup">SIGN UP</NavLink>
      //                             </Button> 
      //                           </NavItem>
      //                           <NavItem>
      //                             <Button className="HomeNotLoggedin" color="success">
      //                                 <NavLink className="HomeNotLoggedin" to="/signin">LOG IN</NavLink>
      //                             </Button> 
      //                           </NavItem>
      //                         </Nav>   
      //                     </Navbar>
      //                 </div>
      //             </div>
      //         </div>
      //         <div className="row RowWebPlayerHomeContent">
      //           <div className="WebPlayerHomeContent">
      //             <div className="container">
      //               <PopularArtistsHomeAndNavContent
      //                artist={this.props.artist}
      //                />
      //               <PopularAlbumsHomeAndNavContent
      //                album={this.props.album}
      //                />
      //             </div>
      //           </div>
      //         </div>
      //     </div>
      //     )
      //   }
      
    let SignedIn=''
    if(this.props.isSignedIn.isSignedIn!==null)
    {
      SignedIn=(
        <div>
          <div className="row">
              <div className="WebPlayerHomeNav">
                  <div className="container">
                      <Navbar className="NavBar NavStyle" expand="md">
                          <Nav className="mr-auto" href="/signup">
                          <NavItem className="CustomNavitems">
                                  <Button className="CustomButton">
                                      <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/librarypage/playlists">
                                      <svg className="CustomSvg" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                      </NavLink>
                                  </Button>   
                          </NavItem>
                          <NavItem className="CustomNavitems">
                                  <Button className="CustomButton">
                                          <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/search">
                                          <svg className="CustomSvg" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
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
                                          to="/account/overview">
                                          Account
                                      </NavLink>
                                      </DropdownItem>
                                      <DropdownItem className="StaticNavChildContainer">
                                      {showUpgrade2}
                                      </DropdownItem>
                                      <DropdownItem className="StaticNavChildContainer">
                                      <Button
                                          onClick={() => { this.handleLogout() }} 
                                          className="StaticNavChild">
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
          <div className="row RowWebPlayerHomeContent">
            <div className="WebPlayerHomeContent">
              <div className="container">
                <PopularPlaylistsContent
                playLists={this.props.playLists}
                data_be={this.props.data_be}
                isSignedIn={this.props.isSignedIn}
                handleCurrentPlayList={this.props.handleCurrentPlayList}
                categories={this.props.categories}
                />
                <PopularArtistsHomeAndNavContent
                artist={this.props.artist}
                data_be={this.props.data_be}
                isSignedIn={this.props.isSignedIn}
                handleCurrentPlayList={this.props.handleCurrentPlayList}
                />
                <PopularAlbumsHomeAndNavContent
                album={this.props.album}
                data_be={this.props.data_be}
                isSignedIn={this.props.isSignedIn}
                handleCurrentPlayList={this.props.handleCurrentPlayList}
                />
              </div>
            </div>
          </div>
      </div>
      );
    }
    else
    {
      SignedIn=(
        <div>
          <div className="row">
              <div className="WebPlayerHomeNav">
                  <div className="container">
                      <Navbar className="NavBar NavStyle" sticky="top" expand="md">
                          <Nav className="mr-auto" href="/signup">
                          <NavItem className="CustomNavitems">
                                  <Button className="CustomButton">
                                      <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/librarypage/playlists">
                                      <svg className="CustomSvg" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>                            </svg>    
                                      </NavLink>
                                  </Button>   
                          </NavItem>
                          <NavItem className="CustomNavitems">
                                  <Button className="CustomButton">
                                          <NavLink className="nav-link SpecificallyForTheButton" to="/webplayer/search">
                                          <svg className="CustomSvg" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                                          </svg>    
                                          </NavLink>
                                  </Button>  
                          </NavItem>
                          </Nav>
                          <Nav navbar className="ml-auto MakingTheButtonsHorizontal">
                            <NavItem>
                              <Button className="HomeNotSignedUp" color="success">
                                  <NavLink className="HomeNotSignedUp" to="/signup">SIGN UP</NavLink>
                              </Button> 
                            </NavItem>
                            <NavItem>
                              <Button className="HomeNotLoggedin" color="success">
                                  <NavLink className="HomeNotLoggedin" to="/signin">LOG IN</NavLink>
                              </Button> 
                            </NavItem>
                          </Nav>   
                      </Navbar>
                  </div>
              </div>
          </div>
          <div className="row RowWebPlayerHomeContent">
            <div className="WebPlayerHomeContent">
              <div className="container">
                <PopularPlaylistsContent
                  playLists={this.props.playLists}
                  data_be={this.props.data_be}
                  isSignedIn={this.props.isSignedIn}
                  handleCurrentPlayList={this.props.handleCurrentPlayList}
                  categories={this.props.categories}
                />
              </div>
            </div>
          </div>
      </div>
      )
    }
    return (
      <div>
      {SignedIn}
      </div>
    );
  }
}

export default HomeNavAndContentSigned;
