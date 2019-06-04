import React, { Component } from 'react';

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  clicked = () => {


    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() {
    return (

      <button onClick={this.clicked}>
        {this.state.timesClicked}
      </button>

    );
  }

}

export default DigitalClicker;
