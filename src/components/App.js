import React, { Component } from 'react';
import { connect } from 'react-redux';
import Instructions from "./Instructions";
import Difficulty from "./Difficulty";
import Puzzle from "./Puzzle";

class App extends Component {

  render() {
    return (
    <div>
      <h1> 30 Second Challenge </h1>
      <br />
      <Difficulty />
      <br />
      <br />
      <Puzzle />
      <br />
      <br />
      <Instructions />
    </div>
  );
  }
}

export default App;
