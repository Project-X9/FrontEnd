
import React, { Component } from "react";

import "./Page.css";
import PlayList from './PlayListComponent';
import Albums from './AlbumsComponent';
import Artists from './ArtistsComponent';
import LibraryNavbar from './LibraryNavbar'
import {Switch, Route,Redirect} from "react-router-dom";
import { 
  Button, Row, Col,} from 'reactstrap'; 


class LibraryPage extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId:'',
            isModalOpen:false
        };
    }
    
    render(){
      let redirected = null;
      if (this.props.id.id === "") {
        redirected = <Redirect to="/webplayer/home"></Redirect>
      }
        return(
          <div className="container-fluid m-0 p-0">
            {redirected}
            <Row>
              <Col md={12}>
            <div className="LibraryPageBody">
            <LibraryNavbar 
            data={this.props.data}
            id={this.props.id}
            handleLogoutId={this.props.handleLogoutId}/>
            <Switch>
                    <Route
                      path="/webplayer/librarypage/playlists"
                      component={() => (
                        <PlayList
                        data={this.props.data}
                        id={this.props.id}
                        playLists={this.props.playLists}
                        data_be={this.props.data_be}
                        />
                      )} />
                   <Route
                      path="/webplayer/librarypage/albums"
                      component={() => (
                        <Albums
                        data={this.props.data}
                        id={this.props.id}
                        album={this.props.album}
                        data_be={this.props.data_be}
                        />
                      )} />
                    <Route
                      path="/webplayer/librarypage/artists"
                      component={() => (
                        <Artists
                        data={this.props.data}
                        id={this.props.id}
                        artist={this.props.artist}
                        data_be={this.props.data_be}
                        />
                      )} />
                </Switch>
        </div>
        </Col>
        </Row>
        </div>
        );
  }
}

export default LibraryPage;