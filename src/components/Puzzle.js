import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcPuzzleConst, calcPuzzle, solveClicked } from "../actions/puzzle";


class Puzzle extends Component {

  clickStart = () => {
    if (!this.props.difficulty) {
      alert("Please select a difficulty setting, before you begin.");
    }
    else {
      this.props.calcPuzzleConst();
    }
  }

  clickReset = () => {
    this.clickStart();
  }

  clickSolve = () => {
      this.props.solveClicked();
  }

  render() {
    const cssString = "grid-item button";
    let ansCss = "grid-item end-border"
    let ansTxt = "   ";
    if (this.props.solveClick) {
      ansCss = "grid-item end-border eb-fail";
      ansTxt = this.props.answer;
    }

    //write the solveClicked Logic here, no need for nested ternary's

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
            <div class="grid-item border">{this.props.opsArray[7]}</div>
            <div class={ansCss}>{ansTxt}</div>
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

/*
const mapStateToProps = state => {
  const { startNumber, answer, opsArray, difficulty } = state.puzzle;
  return { startNumber, answer, opsArray };
}
*/
const mapStateToProps = (state) =>
({startNumber:state.puzzle.startNumber,
  answer:state.puzzle.answer,
  opsArray: state.puzzle.opsArray,
  solveClick: state.puzzle.solveClick,
  difficulty: state.difficulty.difficulty //little bit ugly, but it works.
});
const mapDispToProps = ({calcPuzzleConst, calcPuzzle, solveClicked});

const componentConnector = connect(mapStateToProps, mapDispToProps);
export default componentConnector(Puzzle);
