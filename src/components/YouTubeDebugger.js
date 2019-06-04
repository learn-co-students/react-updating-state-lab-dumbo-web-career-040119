// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

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

    onBitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12 
            })
        })
    }

    onResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: {
                    resolution: '720p' 
                }
            })
        })
    }
    
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.onBitrate}></button>
                <button className='resolution' onClick={this.onResolution}></button>
            </div>
        )
    }
}
