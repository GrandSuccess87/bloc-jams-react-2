import React, { Component } from 'react';
import IonIcon from 'react-ionicons';

class PlayerBar extends Component {
  render() {
    return(
      <section className="player-bar">
        player bar goes here
        <section id="button">
          <button id="previous" onClick={this.props.handlePrevclick}>
            //<span className="ion-skip-backward"></span>
            <IonIcon icon="md-skip-backward" />
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next">
            //<span className="ion-skip-forward"></span>
            <IonIcon icon="md-skip-forward"/>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">-:--</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">-:--</div>
        </section>
        <section id="volume-control">
          //<div className="icon ion-volume-low"></div>
          <IonIcon icon="md-volume-low"/>
          <input type="range" className="seek-bar" value="80" />
          //<div className="icon ion-volume-high"></div>
          <IonIcon icon="md-volume-high"/>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
