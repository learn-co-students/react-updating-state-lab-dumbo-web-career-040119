import React, { Component } from 'react';

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  increaseClick = () => {
    let newClicks = this.state.timesClicked + 1
    this.setState({
      timesClicked: newClicks
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseClick}>{this.state.timesClicked}</button>
      </div>
    );
  }

}

export default DigitalClicker;
