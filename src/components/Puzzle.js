import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { calcPuzzleConst, calcPuzzle, success, failure, revealAnswer } from "../actions/puzzle";


class Puzzle extends Component {

  clickStart = () => {
    if (!this.props.difficulty) {
      alert("Please select a difficulty setting, before you begin.");
    }
    else {
      this.props.calcPuzzle(this.props.difficulty);
    }
  }

  submitAnswer = () => {
    let inputVal = document.getElementById("fid").value;
    if (inputVal == this.props.answer) { //Box not empty, and value equals answer.
      this.props.success();
    }
    else {
      this.props.failure();
    }
  }

  revealAnswer = () => {
      this.props.revealAnswer();
  }

  handleKeyPress = event => {
    if (event.key === "Enter") { this.submitAnswer();}
  }

  //If puzzle loaded, we must always focus on the input field.
  //Saves user from having to click with mouse twice on hard skill levels (every second counts).
  componentDidUpdate() {
    if (this.props.opsArray) { //if null, we reset. Only occurs when we start new game
      document.getElementById("fid").focus(); //a hack, but it works.
    }
    if (this.props.solveClick == "Not Pressed") {
      document.getElementById("fid").value = ""; //clear it after update.
    }
  }

  render() {
    //Default - solveClick is just null.
    const cssString = "grid-item button";
    var ansCss = "grid-item end-border";
    var inputCss = "inputbox";
    //modify CSS and answer, if not null, accordingly:

    if (this.props.solveClick == "success") {
      ansCss = "grid-item end-border eb-success";
      inputCss = "inputbox inputgreen";
      //Just leave correct answer in the box.
    }
    else if (this.props.solveClick == "failure") {
      ansCss = "grid-item end-border eb-fail";
      inputCss = "inputbox inputred";
      //Just leave their wrong answer in the box
    }
    else if (this.props.solveClick == "revealAnswer") {
      ansCss = "grid-item end-border eb-fail";
      inputCss = "inputbox inputred";
      document.getElementById("fid").value = this.props.answer;
    }

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
            <div class={ansCss}><input id="fid" class={inputCss} type="text" onKeyPress={this.handleKeyPress} /></div>
          </div>
        ) : (<div></div>)
      }
        <br />
        <div class="grid-container">
          <button onClick={this.clickStart} class={cssString}> Start Game </button>
          <button onClick={this.submitAnswer} class={cssString}> Submit Answer </button>
          <button onClick={this.revealAnswer} class={cssString}> Reveal Answer </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
({startNumber:state.puzzle.startNumber,
  answer:state.puzzle.answer,
  opsArray: state.puzzle.opsArray,
  solveClick: state.puzzle.solveClick,
  difficulty: state.difficulty.difficulty
});
const mapDispToProps = ({calcPuzzleConst, calcPuzzle, success, failure, revealAnswer});

const componentConnector = connect(mapStateToProps, mapDispToProps);
export default componentConnector(Puzzle);
