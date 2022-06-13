import { SET_INSTRUCTIONS_EXPANDED } from "../actions/types.js";

//If nothing is set and we have just loaded up.
//null for difficulty means the user hasn't picked anything yet!
const DEFAULT_SETTINGS = {
  instructionsExpanded: false,
}

const instructionsReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case SET_INSTRUCTIONS_EXPANDED: //was fired by action dispatch.
      return { ...state, instructionsExpanded: action.instructionsExpanded };
    default:
      return state;
  }
};

export default instructionsReducer;
