import {CALC_PUZZLE, SOLVE_CLICK} from "./types.js";


//Use this to test the UI statically.
export const calcPuzzleConst = () => {
  //Here we would do the work to calculate our numbers,
  //Importing sieve algorithms from a separate file.
  const startNumber = 25;
  const sOpsArray = ["+15","/8","x10","+25","Rev.Digits","+3","x(1/3)","+5"]
  const answer = 25;

  //Action being dispatched here.
  return {type:CALC_PUZZLE, startNumber:startNumber, answer:answer, opsArray:sOpsArray};
}

export const calcPuzzle = () => {
  return 0;
}

export const solveClicked = () => {
  return {type:SOLVE_CLICK, solveClick:true};
}
