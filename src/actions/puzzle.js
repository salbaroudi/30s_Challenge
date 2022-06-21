import {CALC_PUZZLE, SOLVE_CLICK} from "./types.js";
import * as gp from "./generatepuzzle.js";

//Use this to test the UI statically.
export const calcPuzzleConst = () => {
  //Here we would do the work to calculate our numbers,
  //Importing sieve algorithms from a separate file.
  const startNumber = 25;
  const sOpsArray = ["+15","/8","x10","+25","Rev.Digits","+3","x(1/3)","+5"]
  const answer = 25;

  //Action being dispatched here.
  return {type:CALC_PUZZLE, startNumber:startNumber, answer:answer, opsArray:sOpsArray, solveClick:"Not Pressed"};
}

export const calcPuzzle = (diff) => {
  const { startNumber, answer, opsArray } = gp.calculatePuzzle(diff);
  return {type:CALC_PUZZLE, startNumber:startNumber, answer:answer, opsArray:opsArray,solveClick:"Not Pressed"};
}

export const success = () => {
  return {type:SOLVE_CLICK, solveClick:"success"};
}

export const failure = () => {
  return {type:SOLVE_CLICK, solveClick:"failure"};
}

export const revealAnswer = () => {
  return {type:SOLVE_CLICK, solveClick:"revealAnswer"};
}
