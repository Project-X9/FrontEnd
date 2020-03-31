
import React, { Component } from "react";

import "./Page.css";
import PlayList from './PlayListComponent';
import Albums from './AlbumsComponent';
import Artists from './ArtistsComponent';
import LibraryNavbar from './LibraryNavbar'
import {Switch, Route} from "react-router-dom";


class LibraryPage extends Component {
    constructor(props){
        super(props);
        this.state={
            tempId:''
        };
    }
    
    
    render(){
        return(
            <div>
            <div className="LibraryPageBody">
            <LibraryNavbar />
            <Switch>
                    <Route
                      path="/librarypage/playlists"
                      component={() => (
                        <PlayList
                        />
                      )}                    />
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
        </div>
        );
  }
}

export default LibraryPage;