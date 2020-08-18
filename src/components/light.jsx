import React, { Component } from 'react';

class Light extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
    this.state = { isOn: this.props.bulbOn };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.isOn) {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className="lightBulb" onClick={this.toggleActive}>
          <img src="assets/images/lightOn.png" alt="" />
        </div>
      );
    // eslint-disable-next-line no-else-return
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className="lightBulb" onClick={this.toggleActive}>
          <img src="assets/images/light.png" alt="" />
        </div>
      );
    }
  }
}

export default Light;
