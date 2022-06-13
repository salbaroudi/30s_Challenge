import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcPuzzle } from "../actions/puzzle";


class Puzzle extends Component {

  clickStart = () => {
    this.props.calcPuzzle();
  }

  clickReset = () => {
    clickStart();
  }

  clickSolution = () => {
      console.log("Functionality not programmed in yet...");
  }

  render() {
    const cssString = "grid-item button";

    return (
      <div>
        <div class="grid-container">
          <div class="grid-item begin-border">25</div>
          <div class="grid-item border">Square It</div>
          <div class="grid-item border">-25</div>
          <div class="grid-item border">/3</div>
          <div class="grid-item border">+55</div>
          <div class="grid-item border">-75</div>
          <div class="grid-item border">+5</div>
          <div class="grid-item border">+15</div>
          <div class="grid-item end-border">ANS</div>
        </div>
        <br />
        <div class="grid-container">
          <button onClick={this.clickStart} class={cssString}> Start Game </button>
          <button onClick={this.clickReset} class={cssString}> Reset Game </button>
          <button onClick={this.clickSolve} class={cssString}> Solve It! </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { startNumber, answer, opsArray } = state.puzzle;
  return { startNumber, answer, opsArray };
}
const mapDisp2Props = ({calcPuzzle});

const componentConnector = connect(mapStateToProps, mapDisp2Props);
export default componentConnector(Puzzle);
