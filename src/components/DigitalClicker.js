import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  updateState = () => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateState}>{this.state.timesClicked}</button>
      </div>
    );
  }

}

export default DigitalClicker;
