import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = () => {
    console.log(this.state)
    this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  changeResolution = () => {
    console.log(this.state)
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
    return(
      <div>
        <button className='bitrate' onClick={ this.handleClick }>Bitrate</button>

        <button className='resolution' onClick={ this.changeResolution }>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
