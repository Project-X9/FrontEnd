import React, { Component } from "react";
import { UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Button} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import {Loading} from "./../Loading/LoadingComponent"
/**
 * responsible for getting the songs to be displayed inside the webplayer home
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
   * @param props.PlayTheFooter Essentially used in show songs to be able to play the songs
   */
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      image:"",
      name:"",
      catID:"",
      catName:"",
    };
    this.setWithCategory = this.setWithCategory.bind(this);
    this.handleTheNotificationID = this.handleTheNotificationID.bind(this);
  }


  /**
   * Sets the state catID & catName with the ID & name of the selected category
   */
  setWithCategory(category){
    this.setState({
      catID:category._id,
      catName:category.name
    })
    alert(category.name)
  }

  /**
   * Sets the state catID with the ID of the selected category
   */
  handleTheNotificationID(){
    if(this.state.catID!=="")
    {
      this.props.GetSongsByGeneres(this.state.catID);
    }
  }

  /**
   * Puts the selected song in the footer to be played
   */
  playSongs(song)
  {
    this.props.PlayTheFooter(song)
  }
  /**
   * Responsible for showing the songs in the webplayer home page
   * @returns Components that will be displayed on the page
   */
  render() {
    if (this.props.isSignedIn.isSignedIn === null) {
      var redirected = <Redirect to="/webplayer/home"></Redirect>;
    }
  
    let HomeSongs = "";
    if (this.props.isSignedIn.isSignedIn !== null) {
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
                                    onClick={()=>this.playSongs(track)}
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

    let ForMapping = "";
    ForMapping=this.props.categories.categories.map((Category) => {
      return(
        <div key={Category._id}>
          <DropdownItem className="StaticNavChildContainer">
            <Button onClick={()=>this.setWithCategory(Category)}>
            {Category.name}
            </Button>
          </DropdownItem>
        </div>
      )
    });

    let HomeSongs2 = "";
    if (this.props.isSignedIn.isSignedIn !== null) {
      HomeSongs2=(
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="WritingInsideAccountItself">
          Genres
        </DropdownToggle>
        <DropdownMenu className="StaticNav" right>
        {ForMapping}
        </DropdownMenu>
        </UncontrolledDropdown>
      )
    }

    let ShowingSongs = "";
    if (this.props.isSignedIn.isSignedIn !== null) {
      ShowingSongs=(
        <div>
        {this.props.genretracks.isLoading!==false?(
          <div>
            <Loading></Loading>
          </div>
          ):(
          <div>
            <div className="row FirstHeaderAndSeeAll">
                <div className="col-sm-9 ContainerHeaderAboveGrid">
                  <Link className="LinkHeaderAboveGrid">
                    <h2 className="HeaderAboveGrid">Songs Available</h2>
                  </Link>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="GridView">
          {
          this.props.genretracks.genretracks.map((track) => {
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
                        onClick={()=>this.playSongs(track)}
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
          }
          )
        }
              </div>
            </div>
          </div>
        </div>


        )}
        </div>
      )
    }
    return (
      <div>
      <div className="row">
        <div className="col">
          <h1 className="QueueMainHeader">
              Select Genre
          </h1>
        </div>
      </div>
      {redirected}
      {HomeSongs2}
      <Button onClick={()=>this.handleTheNotificationID()}>
        Select
      </Button>
      {ShowingSongs}
      
      </div>
    );
  }
}
export default ShowSongs;
