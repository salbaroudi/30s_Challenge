import {CALC_PUZZLE} from "./types.js";

export const calcPuzzle = () => {
  //Here we would do the work to calculate our numbers,
  //Importing sieve algorithms from a separate file.
  return {type:CALC_PUZZLE, startNumber:25, answer:60, opsArray:["+5","+5","+5","+5","+5","+5","+5"]};
}
