import React, { Component } from 'react';
import Light from './light';

class App extends Component {
  render() {
    return (
      <div id="lightBulbWrapper">
        <Light />
        <Light />
        <Light />
        <Light bulbOn={true}/>
      </div>
    );
  }
}

export default App;
