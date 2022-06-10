import React, { Component } from 'react';
import { connect } from 'react-redux';
import {collapseInstructions, expandInstructions} from "../actions/settings";

//but what about the default initialization?
const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions} = props;

  if (instructionsExpanded) {
    return (
      <div class="grid-container">
        <button class="grid-item button" onClick={collapseInstructions}> Toggle Instructions </button>
        <div class="instructions">How to Play:: Select a difficulty level and click the Start Game button.
        You have 30 seconds to enter the final answer. Press the ENTER key to submit the answer.
        </div>
        <div class="instructions"> Good Luck!! </div>
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
const mapState2Props = (state) => ({ instructionsExpanded: state.settings.instructionsExpanded });
const mapDistpatch2Props = ({expandInstructions, collapseInstructions});
export default connect(mapState2Props, mapDistpatch2Props)(Instructions);