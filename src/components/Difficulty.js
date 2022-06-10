import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickNovice, clickIntermediate, clickExpert } from "../actions/settings";

const Difficulty = props => {
  const { difficulty, clickNovice, clickIntermediate, clickExpert} = props;

  //First set default values
  let cssNovice = "grid-item button"; let cssIntermediate = "grid-item button";
  let cssExpert = "grid-item button";

  if (difficulty === "Novice") { cssNovice = "grid-item button clicked"; }
  if (difficulty === "Intermediate") { cssIntermediate = "grid-item button clicked"; }
  if (difficulty === "Expert") { cssExpert="grid-item button clicked"; }

  return (
    <div class="difficulty">
      <div class="grid-item bigger"> Difficulty:: </div>
      <button onClick={clickNovice} class={cssNovice}> Novice </button>
      <button onClick={clickIntermediate} class={cssIntermediate}> Intermediate </button>
      <button onClick={clickExpert} class={cssExpert}> Expert </button>
    </div>
  );

}

//How does state.settings work...?
const mapState2Props = (state) => ({ difficulty: state.settings.difficulty });
const mapDistpatch2Props = ({clickNovice, clickIntermediate, clickExpert});
export default connect(mapState2Props, mapDistpatch2Props)(Difficulty);
