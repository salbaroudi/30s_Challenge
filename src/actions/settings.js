import {SET_INSTRUCTIONS_EXPANDED} from "./types.js";
import {SET_DIFFICULTY} from "./types.js";


export const expandInstructions = () => {
  return {type:SET_INSTRUCTIONS_EXPANDED, instructionsExpanded:true};
}

export const collapseInstructions = () => {
  return {type:SET_INSTRUCTIONS_EXPANDED, instructionsExpanded:false};
}

export const clickNovice = () => {
  return {type:SET_DIFFICULTY, difficulty:"Novice"};
}

export const clickIntermediate = () => {
  return {type:SET_DIFFICULTY, difficulty:"Intermediate"};
}

export const clickExpert = () => {
  return {type:SET_DIFFICULTY, difficulty:"Expert"};
}
