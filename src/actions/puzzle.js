import {CALC_PUZZLE} from "./types.js";

export const calcPuzzle = () => {
  //Here we would do the work to calculate our numbers,
  //Importing sieve algorithms from a separate file.
  const startNumber = Math.round(Math.random()*100);
  const opsArray = (new Array(7).fill(0)).map(value => Math.round(Math.random()*10));
  const answer = startNumber + opsArray.reduce((a, b) => a + b, 0);
  
  const sOpsArray = opsArray.map(value => "+" + value);

  return {type:CALC_PUZZLE, startNumber:startNumber, answer:answer, opsArray:sOpsArray};
}
