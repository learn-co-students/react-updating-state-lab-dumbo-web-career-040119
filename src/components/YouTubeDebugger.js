// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

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

  bitrateHandle = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionHandle = () => {
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

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.bitrateHandle}>BitRate</button>
        <button className="resolution" onClick={this.resolutionHandle}>Resolution</button>
      </div>
    )
  }
}
