import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class PopularNewHomeAndNavContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      playListadded: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleRenderingPlaylist(data) {
    this.props.handleCurrentPlayList(data);
    this.setState({
      playListadded: true,
    });
  }
  render() {
    if (this.state.playListadded === true) {
      var redirected = <Redirect to="/webplayer/nowplay"></Redirect>;
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
          Category.playlists.map((CategorySongs) => {
            return (
              <Button
                className="WebplayerHomeNowPlayRedirectButton"
                // onClick={() => this.handleRenderingPlaylist(CategorySongs._id)}
                onClick={this.toggleModal}
              >
                <Link
                  className="WebplayerHomeNowPlayRedirectLink"
                  // to="/webplayer/nowplay"
                >
            
                  <div key={CategorySongs._id} className="CardsHome">
                    <div className="row">
                      <div className="col">
                        <div className="CardPhoto">
                          <div className="ImageHolder">
                            <img
                              className="ImageItself"
                              src={CategorySongs.image}
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
                            <Link className="TitlePlaylistLink">{CategorySongs.name}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="DescriptionPlaylistLink">
                          <span>{CategorySongs.description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row PlayButtonPlayList">
                      <div className="col-md-12">
                        <div>
                          <Button
                            className="ButtonItself"
                            // onClick={this.toggleModal}
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
                    <Modal
                      isOpen={this.state.isModalOpen}
                      toggle={this.toggleModal}
                      className="row"
                      size="lg"
                    >
                      <ModalBody>
                        <div className="row HomeNotSignedInModal">
                          <div className="col-sm-6 col-md-6 col-lg-6 HomeNotSignedInModalFlexer">
                            <div className="HomeNotSignedInModalImageHolder">
                              <img
                                className="HomeNotSignedInModalImage"
                                src={CategorySongs.image}
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 HomeNotSignedInModalFlexer">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 ">
                                <h2 className="HomeNotSignedInModalHeader2">
                                  Start listening with a free Spotify account
                                </h2>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12">
                                <Button
                                  className="HomeNotSignedInModalButton"
                                  color="success"
                                >
                                  <Link
                                    className="HomeNotSignedInModalLinkInsideButton"
                                    to="/signup"
                                  >
                                    SIGN UP FREE
                                  </Link>
                                </Button>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12">
                                <p className="HomeNotSignedInModalParagraph">
                                  Already have an account?
                                  <Button
                                    className="HomeNotSignedInModalButtonInsideParagraph"
                                    color="success"
                                  >
                                    <Link
                                      className="HomeNotSignedInModalLinkInsideButtonInsideParagraph"
                                      to="/signup"
                                    >
                                      LOG IN
                                    </Link>
                                  </Button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row HomeNotSignedInClose">
                          <Button
                            className="HomeNotSignedInModalClosedButton"
                            color="success"
                            onClick={this.toggleModal}
                          >
                            Close
                          </Button>
                        </div>
                      </ModalBody>
                    </Modal>
                  </div>
                </Link>
              </Button>
            );
          })};
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
          Category.playlists.map((CategorySongs) => {
            return (
              <Button
                className="WebplayerHomeNowPlayRedirectButton"
                onClick={() => this.handleRenderingPlaylist(CategorySongs._id)}
              >
                <Link
                  className="WebplayerHomeNowPlayRedirectLink"
                  to="/webplayer/nowplay"
                >
            
                  <div key={CategorySongs._id} className="CardsHome">
                    <div className="row">
                      <div className="col">
                        <div className="CardPhoto">
                          <div className="ImageHolder">
                            <img
                              className="ImageItself"
                              src={CategorySongs.image}
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
                            <Link className="TitlePlaylistLink">{CategorySongs.name}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="DescriptionPlaylistLink">
                          <span>{CategorySongs.description}</span>
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
                </Link>
              </Button>
            );
          })};
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
          
          {/* <div className="col-sm-3 ContainerSeeAllAboveGrid">
                        <Link className="SeeAllAboveGrid">SEE ALL</Link>
                    </div> */}
        
        
      </div>
    );
  }
}
export default PopularNewHomeAndNavContent;
