import React, { Component } from 'react';
import {
  Col, Button, Row, Label, NavLink,
} from 'reactstrap';
import {
  Control, Form, Errors,
} from 'react-redux-form';
import { Link ,Redirect } from 'react-router-dom';
import "./PlayFooter.css";
import { totalTime } from '../../redux/ActionCreators';

function format2Number(num) {
    var str = num + '';
    if (str.length === 1) {
      return '0' + str;
    }
    if (str.length === 0) {
      return '00';
    }
    return str;
  }
  
  function formatTime(s) {
    if (!s && s !== 0) {
      return '00:00';
    }
  
    var total_seconds = Math.floor(s);
    var hours = Math.floor(total_seconds / 3600);
    var minutes = Math.floor(total_seconds / 60) - hours * 60;
    var seconds = total_seconds - minutes * 60 - hours * 3600;
  
    if (hours) {
      return hours + ':' + format2Number(minutes) + ':' + format2Number(seconds);
    }
  
    return format2Number(minutes) + ':' + format2Number(seconds);
  }
  
  function offsetLeft(el) {
    var left = 0;
    while (el && el !== document) {
      left += el.offsetLeft;
      el = el.offsetParent;
    }
    return left;
  }
  class PlayFooter extends Component {
    /**
     * 
     * @param {Object} props 
     * @param props.postFeedback
     * @param props.resetFeedbackForm
     */
    constructor(props) {
      super(props);
      this.state = {
        is_playing: false,
        progress: 0,
        volume:1,
        in_set_progress_mode: false,
        in_set_volume_mode: false,
        songs:["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3","https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
      ,"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3","http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3",
       "http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3",
       "http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3"],
          song_src:null
      };
      this.history = [];
      this.is_progress_dirty = false;
      this.interval_id = setInterval(this.onUpdate.bind(this), 250);
      this.onPlayerNext();
    }

    
    onUpdate() {
      if (this._player) {
        if (!this.is_progress_dirty) {
          this.setState({
            progress: this._player.currentTime / this._player.duration
          });
        }
  
        if (this._player.ended){
          this.onPlayerNext();
  
        }
      }
    }
    togglePlay() {
        if(this.props.song.song.url)
        {
          this.setState({ is_playing: !this.state.is_playing });
        }
    }
    startSetProgress(evt) {
      this.setState({
        in_set_progress_mode: true
      });
      this.setProgress(evt);
    }
    stopSetProgress(evt) {
      this.setState({
        in_set_progress_mode: false
      });
      this.setProgress(evt);
    }
    setProgress(evt) {
      if (this.state.in_set_progress_mode) {
        var progress = (evt.clientX - offsetLeft(this._progress_bar)) / this._progress_bar.clientWidth;
        if(progress>1)
        {
          progress=1;
        }
        else if(progress<0){
          progress=0;
        }
        this.setState({
          progress: progress
        });
        this.is_progress_dirty = true;
      }
    }
    ////////////////////////////// volume
    startSetVolume(evt) {
      this.setState({
        in_set_volume_mode: true
      });
      this.setVolume(evt);
    }
    stopSetVolume(evt) {
      this.setState({
        in_set_volume_mode: false
      });
      this.setVolume(evt);
    }
    setVolume(evt) {
      if (this.state.in_set_volume_mode) {
        var volume = (evt.clientX - offsetLeft(this._volume_bar)) / this._volume_bar.clientWidth;
        if(volume>1)
        {
            volume=1;
        }
        else if(volume<0){
            volume=0;
        }
        this.setState({
          volume: volume
        });
        this._player.volume=Math.abs(volume);
      }
    }
   ///////////////////////// prev and 
    onPlayerNext() {
      if (this.props.song.song.url) {
        this.history.push(this.props.song.song.url);
      }
      var song;
      do {
        song = this.state.songs[Math.floor(Math.random() * this.state.songs.length)];
  
      } while (this.history.length > 0 && this.history[this.history.length - 1] === song);
      this.setState({
        song_src: song
      },()=>{
          this._player.pause();
          this._player.load();
          this._player.play();
      }
      );
  
    }
    onPlayerPrev() {
      this.setState({
        song_src: this.history.pop()
      },()=>{
  
      this._player.pause();
      this._player.load();
      this._player.play(); 
      });
  
  }
  Stop() {
    this.setState({
      progress:0,
      is_playing:false
    },()=>{
    this._player.currentTime=0;
    this._player.pause();
    this._player.pause();

    });

}
    /**
     * Responsible for showing everything on the Sign Up page
     * @returns Components that will be displayed on the page
     */
    render() {
      var currentTime = 0;
      var totalTime = 0;
  
      if (this._player) {
      //   if (this._player.currentSrc !== this.props.src) {
      //     this._player.src = this.props.src;
      //   }
  
        if (this._player.paused && !this._player.ended) {
          if (this.state.is_playing) {
            this._player.play();
          }
        }
        else if (!this.state.is_playing) {
          this._player.pause();
        }
  
        if (this.is_progress_dirty) {
          this.is_progress_dirty = false;
          this._player.currentTime = this._player.duration * this.state.progress;
        }
  
        currentTime = this._player.currentTime;
        totalTime = this._player.duration;
      }
  
  
      return (
  
            <Row>
                <Col>
                  <div className="Root-now-playing-bar">
                      <footer className="now-playing-bar-container">
                          <div className="now-playing-bar" role="complementary">
                              <Row>
                                  <Col  md={3} sm={3} xs={3}>
                                  <div className="now-playing-bar-left">
                                  <div className="now-playing" role="contentinfo" aria-label="Now playing: Euphrosyne by Arlette Leduc">
                                      <div className="imageholder_playFooter">
                                          <a aria-label="Now playing: Euphrosyne by Arlette Leduc" href="" > 
                                              <div className="now-playing__cover-art">
                                                  <div className="cover-art shadow" aria-hidden="true" width= "56px" height= "56px">
                                                      <img  src="https://i.scdn.co/image/ab67616d0000485197cef6d6d204cd04aebc4798" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div className="besideImage ellipsis-one-line">
                                          <div className="LinkBesideImage ellipsis-one-line" dir="auto">
                                              <div className="react-contextmenu-wrapper">
                                                  <span draggable="true">
                                                      <a href="">Euphrosyne</a>
                                                  </span>
                                              </div>
                                          </div>
                                          <div className="ArtistNamePlayFooter ellipsis-one-line" dir="auto">
                                              <span>
                                                  <span className="react-contextmenu-wrapper">
                                                  <span draggable="true">
                                                      <a href="">Arlette Leduc</a>
                                                  </span>
                                              </span>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="control-button-wrapper">
                                          <button className="control-button spoticon-heart-16" title="Save to your Liked Songs">
                                              <i className="fa fa-heart"></i>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                              </Col>
                              <Col md={6} sm={6} xs={6}>
                                      <div className="now-playing-bar__center">
                                      <div className="player-controls" dir="ltr"  aria-label="Player controls">
                                          <div className="player-controls__buttons">
                                              <div className="control-button-wrapper">
                                                  <button onClick={()=>this.onPlayerPrev()} className="control-button"  title="Previous">
                                                      {this.history.length > 0 ? (
                                                          <i  className="fa fa-backward fa-lg"></i>
                                                      ):(
                                                          <i  className="fa fa-backward fa-lg hassouna"></i>
                                                      )}
                                                  </button>
                                              </div>
                                              <div className="control-button-wrapper">
                                                  <button onClick={()=>this.togglePlay()} className="control-button"  title="Play">
                                                      {
                                                          this.state.is_playing === true ? ( <i className="fa fa-pause-circle fa-lg"></i> ):
                                                          ( <i className="fa fa-play-circle fa-lg"></i> )
                                                      }
                                                  </button>
                                              </div>
                                              <div className="control-button-wrapper">
                                                  <button onClick={()=>this.onPlayerNext()} className="control-button "  title="Next">
                                                      <i  class="fa fa-forward fa-lg"></i>
                                                  </button>
                                              </div>
                                              <div className="control-button-wrapper">
                                                  <button onClick={()=>this.Stop()} className="control-button "  title="Next">
                                                      <i  class="fa fa-stop fa-lg"></i>
                                                  </button>
                                              </div>
                                          </div>
                                          <div className="playback-bar">
                                              <div className="playback-bar__progress-time">{formatTime(currentTime)}</div>
                                              <div
                                              onMouseDown={this.startSetProgress.bind(this)}
                                              onMouseMove={this.setProgress.bind(this)}
                                              onMouseLeave={this.stopSetProgress.bind(this)}
                                              onMouseUp={this.stopSetProgress.bind(this)} 
                                              className="progress-bar_hassan">
                                                  <div
                                                  ref={(ref) => this._progress_bar = ref} 
                                                  className="middle-align progress-bar__bg">
                                                      <div className="progress-bar__fg_wrapper" style={{ width: (this.state.progress * 100) + '%' }}>
                                                          <div className="progress-bar__fg"></div>
                                                      </div>
                                                      <button aria-label="Change progress" className="middle-align progress-bar__slider" style={{marginLeft : (this.state.progress * 100) + '%' }} >
                                                      </button>
                                                  </div>
                                              </div>
                                                  <div className="playback-bar__progress-time">{formatTime(totalTime)}</div>
                                          </div>
                                      </div>
                                  </div>
                              </Col>
                              <Col md={3} sm={3} xs={3}>
                                  <div className="now-playing-bar__right">
                                      <div className="now-playing-bar__right__inner">
                                          <div className="ExtraControls">
                                              <div className="volume-bar">
                                                  <button className="control-button volume-bar__icon" aria-label="Mute">
                                                      <i class="fa fa-volume-up"></i>
                                                  </button>
                                                  <div 
                                                   onMouseDown={this.startSetVolume.bind(this)}
                                                   onMouseMove={this.setVolume.bind(this)}
                                                   onMouseLeave={this.stopSetVolume.bind(this)}
                                                   onMouseUp={this.stopSetVolume.bind(this)} 
                                                   className="progress-bar_hassan">
                                                      <div className="middle-align progress-bar__bg" ref={(ref) => this._volume_bar = ref} >
                                                          <div className="progress-bar__fg_wrapper" style={{ width: (this.state.volume * 100) + '%' }}>
                                                              <div className="progress-bar__fg" ></div>
                                                          </div>
                                                          <button aria-label="Change volume" className="middle-align progress-bar__slider" style={{marginLeft : (this.state.volume * 100) + '%' }}></button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </Col>
                          </Row>
                          </div>
                      </footer>
                  </div>
              </Col>
              <audio ref={(ref) => this._player = ref} autoPlay={this.state.is_playing}>
              <source src={this.props.song.song.url}/>
              <source/>
              </audio>
            </Row>
  
      );
    }
  }
  export default PlayFooter