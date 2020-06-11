import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "./NavbarComponent";
import Footer from "./FooterComponent";
import "./Home.css";

import "./logged.css"

class LoggedHome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let TopSongs="";
        /**@return: returns the homepage component consisting of a navbar component, main part and a footer component. */
        return (
            <div className="Home homeLog">
                <NavbarHome isSignedIn={this.props.isSignedIn}
                    data_be={this.props.data_be}
                    handleLogout_BE={this.props.handleLogout_BE} />
                {this.props.data_be.data_be.premium===false&&(<div className="firstJT">
                    <div className="JT1Text">
                        <h1>Get 3 months of Premium for <br />EGP 49.99</h1>
                        <h2>Join Premium for endless ad-free music - even offline.</h2>
                    </div>
                    <div className="JT1Buttons">
                        <Link to="/premium">
                            <button model="submit" className="getSpotifyBtn">
                                get it now
                             </button>
                        </Link>
                    </div>
                    <p>Offer not available to users who canceled Premium after Apr 14, 2020. Offer ends Jun 30, 2020.</p>
                </div>)}
                <div className="secondJT">
                    <h1>Looking for music?</h1>
                    <h4>Start listening to the best new releases.</h4>
                    <Link to="/webplayer">
                        <button model="submit" className="getSpotifyBtn">
                            launch web player
                        </button>
                    </Link>
                    <div className="songCards">
                    {TopSongs = this.props.fullsongs.fullSongs.map((song) => {
                        return(
                            <div className="songCard">
                                <Link to="/webplayer">
                                 <img src={song.imageUrl} width="350" height="350" />
                                <h3 className="imgText">{song
                               .name}</h3>
                                </Link>
                            </div>
                    )})
                }
                    </div>
                </div>


                <Footer className="homeFooter" />
            </div>

        );
    }
} export default LoggedHome;