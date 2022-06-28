import React, { Component } from 'react';
import { connect } from 'react-redux';
import {collapseInstructions, expandInstructions} from "../actions/instructions";

//but what about the default initialization?
const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions} = props;

  if (instructionsExpanded) {
    return (
      <div class="grid-container">
        <button class="grid-item button" onClick={collapseInstructions}> Toggle Instructions </button>
        <div class="instructions">How to Play:: Select a difficulty level and click the START GAME button.
        To restart or reset the game, click the START GAME button again.
        </div>
        <div class="instructions">
        When the game starts, a series of numbers and instructions appear from left to right. Start with the left-most
        number, and apply the operations to reach the final answer.
        </div>
        <div class="instructions">
        When the game starts, the answer box (right hand side) will be in focus. Simply type your answer into the box.

        A player can press the SUBMIT ANSWER button, or ENTER to submit. Green indicates success and red indicates an
        incorrect answer.
        </div>
        <br />
        <div class="instructions"><b>(!!) Note::</b> "Rev. Digits" = Reverse Digits. For example, if our running total is "521",
        the result of this operation would be "125".
        </div>

      </div>
    );
  }

  return (
    <div class="grid-container">
      <button class="grid-item button" onClick={expandInstructions}> Toggle Instructions </button>
    </div>
  );
}
//why state.settings...?
const mapStateToProps = (state) => ({ instructionsExpanded: state.instructions.instructionsExpanded });
const mapDistpatchToProps = ({expandInstructions, collapseInstructions});
export default connect(mapStateToProps, mapDistpatchToProps)(Instructions);
