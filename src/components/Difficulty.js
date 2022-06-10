import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickNovice, clickIntermediate, clickExpert } from "../actions/settings";

//but what about the default initialization?
const Difficulty = props => {
  const { difficulty, clickNovice, clickIntermediate, clickExpert} = props;

  //Redundant, but simple. Maybe a better way to code? (todo later (!!!))
  if (difficulty === "Novice") {
    return (
      <div class="difficulty">
        <div class="grid-item bigger"> Difficulty:: </div>
        <button onClick={clickNovice} class="grid-item button clicked"> Novice </button>
        <button onClick={clickIntermediate} class="grid-item button"> Intermediate </button>
        <button onClick={clickExpert} class="grid-item button"> Expert</button>
      </div>
    );
  }
  if (difficulty === "Intermediate") {
    return (
      <div class="difficulty">
        <div class="grid-item bigger"> Difficulty:: </div>
        <button onClick={clickNovice} class="grid-item button"> Novice </button>
        <button onClick={clickIntermediate} class="grid-item button clicked"> Intermediate </button>
        <button onClick={clickExpert} class="grid-item button"> Expert</button>
      </div>
    );
  }
  if (difficulty === "Expert") {
    return (
      <div class="difficulty">
        <div class="grid-item bigger"> Difficulty:: </div>
        <button onClick={clickNovice} class="grid-item button"> Novice </button>
        <button onClick={clickIntermediate} class="grid-item button"> Intermediate </button>
        <button onClick={clickExpert} class="grid-item button clicked"> Expert </button>
      </div>
    );
  }
  //else...//when we first start, how do we check a difficulty has been set? How do we warn user?
  return (
    <div class="difficulty">
      <div class="grid-item bigger"> Difficulty:: </div>
      <button onClick={clickNovice} class="grid-item button"> Novice </button>
      <button onClick={clickIntermediate} class="grid-item button"> Intermediate </button>
      <button onClick={clickExpert} class="grid-item button"> Expert </button>
    </div>
  );
}
//How does state.settings work...?
const mapState2Props = (state) => ({ difficulty: state.settings.difficulty });
const mapDistpatch2Props = ({clickNovice, clickIntermediate, clickExpert});
export default connect(mapState2Props, mapDistpatch2Props)(Difficulty);
