// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
    }
  }
}

handleClick = () => {
    console.log("bitrate clicked",this.state)
    this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

handleResolution = () => {
    console.log("resolution clicked", this.state)
    this.setState ({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }


  render() {
    return (
      <div>
        <button className = 'bitrate' onClick={ this.handleClick }>Bitrate</button>
        <button className = 'resolution' onClick={ this.handleResolution }>Resolution</button>
      </div>
    );
  }

}

export default YouTubeDebugger;
