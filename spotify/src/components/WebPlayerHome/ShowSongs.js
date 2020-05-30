import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
/**
 * Playlists inside the webplayer home
 */
class ShowSongs extends Component {
   /**
   *
   * @param {Object} props
   * @param props.data_be Essentially contains the data of the users in the database after integrating with backend
   * @param props.isSignedIn Essentially used to check if a user is signed in or not
   * @param props.playLists Essentially contains playlist data
   * @param props.handleCurrentPlayList Essentially used to display playlist's data after integrating with the backend
   * @param props.categories Essentially contains an array of categories that contain playlists
   */
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      image:"",
      name:"",
    };
    
  }

  
  /**
   * Responsible for showing the playlists in the webplayer home page
   * @returns Components that will be displayed on the page
   */
  render() {
    if (this.props.isSignedIn.isSignedIn === null) {
      var redirected = <Redirect to="/webplayer/home"></Redirect>;
    }
  
    let HomeSongs = "";
    if (this.props.isSignedIn.isSignedIn === null) {
      HomeSongs = this.props.categories.categories.map((Category) => {
        return(
          <div>
            <div className="row FirstHeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                  <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">{Category.name}</h2>
                  </Link>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="GridView">
        {
         Category.playlists.map((insidePlaylist) => {
            return (
              
                insidePlaylist.tracks.map((track) => {
                    return(
            
                  <div key={track._id} className="CardsHome">
                    <div className="row">
                      <div className="col">
                        <div className="CardPhoto">
                          <div className="ImageHolder">
                            <img
                              className="ImageItself"
                              src={track.imageUrl}
                              alt=""
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row BelowImage">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12">
                            <Link className="TitlePlaylistLink">{track.name}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row PlayButtonPlayList">
                      <div className="col-md-12">
                        <div>
                          <Button
                            className="ButtonItself"
                            onClick={()=>this.Func()}
                          >
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
                    </div>
                    
                  </div>

                  )
                })
            )
        })}
            </div>
              </div>
                </div>
        </div>
      )
      });
    } else {
      HomeSongs = this.props.categories.categories.map((Category) => {
        return(
          <div>
            <div className="row FirstHeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                  <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">{Category.name}</h2>
                  </Link>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="GridView">
        {
          Category.playlists.map((insidePlaylist) => {
            return (
              
                insidePlaylist.tracks.map((track) => {
                    return(

                       
                    
                        <div key={track._id} className="CardsHome">
                            <div className="row">
                            <div className="col">
                                <div className="CardPhoto">
                                <div className="ImageHolder">
                                    <img
                                    className="ImageItself"
                                    src={track.imageUrl}
                                    alt=""
                                    ></img>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row BelowImage">
                            <div className="col-md-12">
                                <div className="row">
                                <div className="col-md-12">
                                    <Link className="TitlePlaylistLink">{track.name}</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row PlayButtonPlayList">
                            <div className="col-md-12">
                                <div>
                                <Button
                                    className="ButtonItself"
                                >
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
                            </div>
                            
                    </div>
                        
                    )
                })
            )
        })}
                </div>
                </div>
                </div>
            </div>
      )
      });
    }
    return (
      <div>
     {redirected}
     {HomeSongs}  
      </div>
    );
  }
}
export default ShowSongs;
