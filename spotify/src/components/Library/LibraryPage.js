
import React, { Component } from "react";

import "./Page.css";
import PlayList from './PlayListComponent';
import Albums from './AlbumsComponent';
import Artists from './ArtistsComponent';
import LibraryNavbar from './LibraryNavbar'
import {Switch, Route} from "react-router-dom";
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
        return(
          <div className="container">
            <Row>
              <Col md={12}>
            <div className="LibraryPageBody">
            <LibraryNavbar />
            <Switch>
                    <Route
                      path="/webplayer/librarypage/playlists"
                      component={() => (
                        <PlayList
                        />
                      )} />
                    <Route
                      path="/webplayer/librarypage/albums"
                      component={Albums}
                    />    
                      <Route
                      path="/webplayer/librarypage/artists"
                      component={Artists}
                    />    
                </Switch>
        </div>
        </Col>
        </Row>
        </div>
        );
  }
}

export default LibraryPage;