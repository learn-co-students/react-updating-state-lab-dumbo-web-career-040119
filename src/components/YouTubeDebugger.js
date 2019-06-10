import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: this.state.settings.video.resolution
        }
      }
    });
  }

  changeResolution = () => {
    this.setState({
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeBitrate} className='bitrate'>Bitrate</button>
        <button onClick={this.changeResolution} className='resolution'>Resolution</button>
      </div>
    );
  }

}

export default YouTubeDebugger;
