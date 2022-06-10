import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { ?,?,? } from "../actions/settings";

const Puzzle = props => {
  //const { ???? } = props;

  return (
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
  );

}

//How does state.settings work...?
//const mapState2Props = (state) => ({ });
//const mapDistpatch2Props = ({clickNovice, clickIntermediate, clickExpert});
//export default connect(mapState2Props, mapDistpatch2Props)(Difficulty);
export default Puzzle;
