import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcPuzzle } from "../actions/puzzle";


class Puzzle extends Component {

  clickStart = () => {
    this.props.calcPuzzle();
  }

  clickReset = () => {
    this.clickStart();
  }

  clickSolution = () => {
      console.log("Functionality not programmed in yet...");
  }

  render() {
    const cssString = "grid-item button";

    return (
      <div>
      {
        (this.props.opsArray) ? (
          <div class="grid-container">
            <div class="grid-item begin-border">{this.props.startNumber}</div>
            <div class="grid-item border">{this.props.opsArray[0]}</div>
            <div class="grid-item border">{this.props.opsArray[1]}</div>
            <div class="grid-item border">{this.props.opsArray[2]}</div>
            <div class="grid-item border">{this.props.opsArray[3]}</div>
            <div class="grid-item border">{this.props.opsArray[4]}</div>
            <div class="grid-item border">{this.props.opsArray[5]}</div>
            <div class="grid-item border">{this.props.opsArray[6]}</div>
            <div class="grid-item end-border">{this.props.answer}</div>
          </div>
        ) : (<div></div>)
      }
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
const mapDispToProps = ({calcPuzzle});

const componentConnector = connect(mapStateToProps, mapDispToProps);
export default componentConnector(Puzzle);
