import { CALC_PUZZLE, SOLVE_CLICK } from "../actions/types.js";

//If nothing is set and we have just loaded up.
//null for difficulty means the user hasn't picked anything yet!
//null for solveClick means we just started our game.
const DEFAULT_SETTINGS = {
  startNumber:0,
  answer:0,
  opsArray:null,
  solveClick:null
}

const puzzleReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case CALC_PUZZLE: //was fired by action dispatch.
        return { ...state, startNumber:action.startNumber,
          answer:action.answer,opsArray:action.opsArray,solveClick:action.solveClick}; //reset solveClick on start.
    case SOLVE_CLICK:
      return {...state, solveClick: action.solveClick};
    default:
      return state;
  }
};

export default puzzleReducer;
