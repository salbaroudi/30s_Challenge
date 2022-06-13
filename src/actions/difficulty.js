import {SET_DIFFICULTY} from "./types.js";

export const clickNovice = () => {
  return {type:SET_DIFFICULTY, difficulty:"Novice"};
}

export const clickIntermediate = () => {
  return {type:SET_DIFFICULTY, difficulty:"Intermediate"};
}

export const clickExpert = () => {
  return {type:SET_DIFFICULTY, difficulty:"Expert"};
}
