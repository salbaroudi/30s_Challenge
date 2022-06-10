import React, { Component } from 'react';
import { connect } from 'react-redux';
import Instructions from "./Instructions";
import Difficulty from "./Difficulty";

class App extends Component {

  render() {
    return (
    <div>
      <h1>~ 30 Second Challenge ~</h1>
      <br />
      <Difficulty />
      <br />
      <Instructions />
    </div>
  );
  }
}

export default App;
