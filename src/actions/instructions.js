import {SET_INSTRUCTIONS_EXPANDED} from "./types.js";

export const expandInstructions = () => {
  return {type:SET_INSTRUCTIONS_EXPANDED, instructionsExpanded:true};
}

export const collapseInstructions = () => {
  return {type:SET_INSTRUCTIONS_EXPANDED, instructionsExpanded:false};
}
