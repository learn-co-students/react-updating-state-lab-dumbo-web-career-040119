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

  handleBirate = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleRes = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>

      <button className="bitrate" onClick={this.handleBirate}>Bitrate</button>
      <button className="resolution" onClick={this.handleRes}>Resolution</button>

      </div>
    );
  }

}

export default YouTubeDebugger;
