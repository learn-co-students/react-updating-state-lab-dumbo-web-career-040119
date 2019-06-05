// Code YouTubeDebugger Component Here
import React from 'react'

class DigitalClicker extends React.Component {
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
  
 this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  
  
  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.handleChangeBitrate}>Change Bitrate</button>
        <button className='resolution' onClick={this.handleChangeResolution}>Change Resolution</button>
      </div>
      )
  }
  
}