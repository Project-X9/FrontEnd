
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
            tempId:''
        };
    }
    
    
    render(){
        return(
            <Row className="backGround_LibraryPage">
              <Col md={12}>
            <div className="LibraryPageBody">
            <LibraryNavbar />
            <Switch>
                    <Route
                      path="/librarypage/playlists"
                      component={() => (
                        <PlayList
                        />
                      )} />
                    <Route
                      path="/librarypage/albums"
                      component={Albums}
                    />    
                      <Route
                      path="/librarypage/artists"
                      component={Artists}
                    />    
                </Switch>
        </div>
        </Col>
        </Row>
        );
  }
}

export default LibraryPage;