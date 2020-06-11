import "./WebPlayerHomeComponent.css";
import React, { Component } from "react";
import { Navbar,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Button} from "reactstrap";
import { NavLink, Redirect} from "react-router-dom";
import PopularPlaylistsContent from "./PopularPlaylistsContent";
import PopularArtistsHomeAndNavContent from "./PopularArtistsHomeAndNavContent";
import PopularAlbumsHomeAndNavContent from "./PopularAlbumsHomeAndNavContent";
import ShowSongs from "./ShowSongs";
import {Loading} from './../Loading/LoadingComponent'
/**
 * Queue inside Webplayer page
 */
class Queue extends Component {
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
   */
  constructor(props) {
    super(props);
    this.state = {
        tempId: this.props.id.id,
    };
    this.state.handleLogout = this.handleLogout.bind(this);
  }

  handleplayqueue(){
    alert("hello")
    if(this.props.queue.queue)
    {
    this.props.PlayTheFooter(this.props.queue.queue[0])
    this.props.AddPrevSong(null);
    }
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
        if (this.props.isSignedIn.isSignedIn === null) {
            var redirected = <Redirect to="/webplayer/home"></Redirect>;
        }

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
        let song="Lose Yourself"
        let artist="Eminem";
        let album="a new album";
        let nowPlaying= (
            <div>
                <div className="row">
                    <div className="col">
                        <h2 className="QueueNowPlayingHeader">
                            Now Playing
                        </h2>
                    </div>
                </div>
                <div className="row QueueNowPlayingBiggestRow">
                <div className="col">
                    <div className="row">
                        <div className="col-1 QueueNowPlayingFirstColumnFirstIcon">
                            <div>
                            <i class="fa fa-music"></i>
                            </div>
                        </div>
                        <div className="col-1 QueueNowPlayingFirstColumnSecondIcon">
                            <Button className="QueueNowPlayingFirstColumnSecondIconButton">
                            <i class="fa fa-play"></i>
                            </Button>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col QueueNowPlayingFirstRow">
                                    {song}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col QueueNowPlayingSecondRow">
                                    {artist} . {album}
                                </div>
                            </div>
                        </div>
                        <div className="col-1 QueueNowPlayingThirdColumn">
                            3:12
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
       
        
        let nextUp= (
            <div>
                <div className="row">
                    <div className="col">
                        <h2 className="QueueNextUpHeader">
                            Next Up
                        </h2>
                    </div>
                </div>
                {
                    this.props.queue.queue.map((track) => {
                    return(
                    <div key={track._id} className="row QueueNextUpBiggestRow">
                    <div className="col">
                        <div className="row">
                            <div className="col-1 QueueNextUpFirstColumnFirstIcon">
                                <div>
                                <i class="fa fa-music"></i>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col QueueNextUpFirstRow">
                                        {track.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col QueueNextUpSecondRow">
                                        {track.description}
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 QueueNextUpThirdColumn">
                                3:16
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                    }
                    )
                }
            </div>
        )
        
        let Body=(this.props.queue.isLoading===true?(
            <div>
              <Loading></Loading>
            </div>
            ):(
            <div>
            {nowPlaying}
            {nextUp}
            </div>
          ) )
   
        
        return ( 
            <div>
                {redirected}
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
              <div className="row">
                  <div className="col">
                    <h1 className="QueueMainHeader">
                        Play Queue
                    </h1>
                  </div>
              </div>
              <div className="QueueMakingSomeSpace">
                {Body}
              </div>
             
              
          </div>
          );
    }
}
export default Queue;
