import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownToggle,
  Form,Input,
  InputGroup,
} from "reactstrap";
import axios from 'axios';

import "../SearchComponent/Search.css";
import "../NowPlayComponent/NowPlay.css";
import {Link, NavLink, Redirect} from "react-router-dom";
import { Loading } from "../Loading/LoadingComponent";
import {Container} from "react-bootstrap";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import CardTitle from "reactstrap/es/CardTitle";
import CardBody from "reactstrap/es/CardBody";
import Card from "@material-ui/core/Card";
import CardLink from "reactstrap/es/CardLink";
import CardText from "reactstrap/es/CardText";
import CardImg from "react-bootstrap/CardImg";
/**
 * Search for a song dynamically
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      tempId: this.props.data_be.data_be.id,
      search:'',suggestionSongs:[],suggestionArtists:[],FullSongs:this.props.fullsongs.fullSongs,categories:this.props.categories.categories,
artists:this.props.fullartists.fullArtists
    };
    this.handleinput=this.handleinput.bind(this);
    this.state.toggleNav = this.toggleNav.bind(this);
    this.state.handleLogout = this.handleLogout.bind(this);
  }
  

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }
  /**
   * handleLogout for logging out of the user
   */
  handleLogout() {
    this.props.handleLogout_BE();
  }
componentDidMount(){
  this.setState({SongsList:this.state.FullSongs.map(x=>x.name),ArtistList:this.state.FullSongs.map(x=>x.name)})
}
  handleinput=(e)=>{
    const value = e.target.value;
    let suggestionsForSongs=[];let suggestionsForArtists=[];
    if(value.length > 0){
        const regex=new RegExp(`^${value}`,'i')
      suggestionsForSongs=this.state.FullSongs.sort().filter(v=>regex.test(v.name));
      suggestionsForArtists=this.state.artists.sort().filter(v=>regex.test(v.name));
    }

    this.setState({suggestionArtists:suggestionsForArtists,suggestionSongs:suggestionsForSongs,search: value})

}


renderSuggestion(){
     const {suggestionSongs,suggestionArtists}=this.state;
     if(suggestionSongs.length===0 & suggestionArtists.length===0){return (<div>
         <h1 className="BrowseAll">Browse All</h1>
       <Row className=" RowSearch" lg="3">
         {this.state.categories.map(item=>{return( <Col className="PaddingColoumns"><Card>
           <CardImg top width="100%" src={item.icon} alt="Card image cap" />
           <CardBody  className="SearchCardBodySuggestionCard">
             <CardTitle className="SearchCardTitleSuggestionCard">Playlist: {item.name}</CardTitle>
             <Button className="SearchCardButtonSuggestionCard">Go To {item.name}</Button>
           </CardBody>
         </Card></Col>)})}

       </Row></div>
     )}
     else if(suggestionSongs.length===0 & suggestionArtists.length>0 ){
         return (
             <div className="DivStyle">
             <section className="JumbostyleWithPadding">
                 <h1>Related Songs</h1>
                  <br/>
                  <hr/>
                <h3 >Opps!.. No Related Songs</h3>


    <h1 >Related Artists</h1>

    <Row xs="3">
  {suggestionArtists.map(Artist=>{return(
      <Col className="PaddingColoumns"><Card>
          <CardImg top width="100%" src={Artist.image} alt="Card image cap" />
          <CardBody className="SearchCardBodySuggestionCard">
              <CardTitle className="SearchCardTitleSuggestionCard">{Artist.name}</CardTitle>
              <Button className="SearchCardButtonSuggestionCard">Go To {Artist.name}</Button>
          </CardBody>
      </Card>
  </Col>)})}
</Row>
</section>
         </div>)
       }
       else if(suggestionSongs.length>0 & suggestionArtists.length===0){
         return (
             <div className="DivStyle">
                 <section className="JumbostyleWithPadding">
                     <h1 >Related Artists</h1>
                     <h5>Opps!.. No Related Artists</h5>


                     <h1 >Related Songs</h1>

                     <Row xs="3">
                         {suggestionSongs.map(Song=>{return(
                             <Col className="PaddingColoumns"><Card>
                                 <CardImg top width="100%" src={Song.imageUrl} alt="Card image cap" />
                                 <CardBody className="SearchCardBodySuggestionCard">
                                     <CardTitle className="SearchCardTitleSuggestionCard">{Song.name}</CardTitle>
                                     <Button className="SearchCardButtonSuggestionCard">Go To {Song.name}</Button>
                                 </CardBody>
                             </Card>
                             </Col>)})}
                     </Row>
                 </section>
             </div>)
       }
       else{return (<div><p>Your Related Songs are {suggestionSongs.map(x=>x.name)}</p><p>Your Related Artists are{suggestionArtists.map(x=>x.name)}</p></div>)}

    }

  render() {
    let redirect = "";
    if (this.props.isSignedIn.isSignedIn === null) {
      redirect = <Redirect to="/webplayer/home" />;
    }
    if (this.props.data_be.isLoading) {
      return <Loading />;
    } else {
      if (this.props.isSignedIn.isSignedIn === true) {
        let userName = (
          <div>
            <Button className="AccountItself">
              <DropdownToggle nav caret className="WritingInsideAccountItself">
                <i className="fa fa-user-secret"></i>
                {this.props.data_be.data_be.name}
              </DropdownToggle>
            </Button>
          </div>
        );

        let showUpgrade1 = "";
        if (this.props.data_be.data_be.premium === false) {
          showUpgrade1 = (
            <NavItem>
              <Button className="NextToAccount" color="success">
                <NavLink className="NextToAccount" to="/premium">
                  UPGRADE
                </NavLink>
              </Button>
            </NavItem>
          );
        } else {
          showUpgrade1 = <span></span>;
        }

        let showUpgrade2 = "";
        if (this.props.data_be.data_be.premium === false) {
          showUpgrade2 = (
            <NavLink className="StaticNavChild Disappear" to="/premium">
              Upgarde to Premium
            </NavLink>
          );
        } else {
          showUpgrade2 = <span></span>;
        }

        var SignedIn = "";
        if (this.props.isSignedIn.isSignedIn === true) {
          SignedIn = (
            <div>
              <div className="row">
                <div className="WebPlayerHomeNav">
                  <div className="container">
                    <Navbar className="NavBar NavStyle" expand="md">
                      <Nav className="mr-auto" href="/signup">
                        <NavItem className="CustomNavitems">
                          <Button className="CustomButton">
                            <NavLink
                              className="nav-link SpecificallyForTheButton"
                              to="/webplayer/librarypage/playlists"
                            >
                              <svg className="CustomSvg" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
                                ></path>{" "}
                              </svg>
                            </NavLink>
                          </Button>
                        </NavItem>
                        <NavItem className="CustomNavitems">
                          <Button className="CustomButton">
                            <NavLink
                              className="nav-link SpecificallyForTheButton"
                              to="/webplayer/search"
                            >
                              <svg className="CustomSvg" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
                                ></path>
                              </svg>
                            </NavLink>
                          </Button>
                         </NavItem>
                      <NavItem>
                      <div className="SearchingDiv">
                 <div className="SearchingDiv Smallerdiv" >
                    <input type="text"  value={this.state.search} className="SearchingDiv Smallerdiv InputStyle"
                        placeholder="Search for Artists or Songs" 
                            onChange={this.handleinput}/>
                           </div>
                       </div>
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
                                  to="/account/overview"
                                >
                                  Account
                                </NavLink>
                              </DropdownItem>
                              <DropdownItem className="StaticNavChildContainer">
                                {showUpgrade2}
                              </DropdownItem>
                              <DropdownItem className="StaticNavChildContainer">
                                <Button
                                  onClick={() => {
                                    this.handleLogout();
                                  }}
                                  className="StaticNavChild"
                                >
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
            </div>
          );
        }
      }
      return (
        <div>
         {this.props.isSignedIn.isSignedIn === true ? (
            <div className=" DivStyle LibraryPageBody">
              {SignedIn}
              <section className="WrappingSection SearchAfterWritingInBoxContainer">
                {this.renderSuggestion()}

              </section>
            </div>
          ) : (
            <div>{redirect}</div>
          )}
              </div>);
    }
  }
}
export default Search;
