import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import { Navbar,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Button} from "reactstrap";
import { NavLink} from "react-router-dom";
import ShowSongs from "./ShowSongs";
/**
 * Songs inside Webplayer page
 */
class SongsByGenres extends Component {
   /**
   *
   * @param {Object} props
   * @param props.data Essentially contains the data of the users in the database
   * @param props.id Essentially contains the id of one of the users in the database
   * @param props.handleLogoutId Essentially taks an id (should be an empty string) and replaces the current user id with it
   * @param props.data_be Essentially contains the data of the users in the database after integrating with backend
   * @param props.handleLogout_BE Essentially used to remove user id along with his other data instead of handleLogoutId
   * @param props.isSignedIn Essentially used to check if a user is signed in or not
   * @param props.artist Essentially contains artist data
   * @param props.album Essentially contains album data
   * @param props.playLists Essentially contains playlist data
   * @param props.handleCurrentArtists Essentially used to display artists' data after integrating with the backend
   * @param props.handleCurrentAlbums Essentially used to display albums' data after integrating with the backend
   * @param props.handleCurrentPlayList Essentially used to display playlists' data after integrating with the backend
   * @param props.categories Essentially contains an array of categories that contain playlists
   * @param props.PlayTheFooter Essentially used in show songs to be able to play the songs
   * @param props.GetSongsByGeneres Essentially used in show songs to be able to play the songs
   * @param props.genretracks Essentially used in show songs to be able to play the songs
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
   * Responsible for showing everything on the songs page inside the webplayer page
   * @returns Components that will be displayed on the page
   */

    render(){
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
                    <ShowSongs
                    playLists={this.props.playLists}
                    data_be={this.props.data_be}
                    isSignedIn={this.props.isSignedIn}
                    handleCurrentPlayList={this.props.handleCurrentPlayList}
                    categories={this.props.categories}
                    PlayTheFooter={this.props.PlayTheFooter}
                    GetSongsByGeneres={this.props.GetSongsByGeneres}
                    genretracks={this.props.genretracks}
                    token={this.props.token}
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
                    <ShowSongs
                      playLists={this.props.playLists}
                      data_be={this.props.data_be}
                      isSignedIn={this.props.isSignedIn}
                      handleCurrentPlayList={this.props.handleCurrentPlayList}
                      categories={this.props.categories}
                      PlayTheFooter={this.props.PlayTheFooter}
                      GetSongsByGeneres={this.props.GetSongsByGeneres}
                      genretracks={this.props.genretracks}
                      token={this.props.token}
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
export default SongsByGenres;
