import { SET_INSTRUCTIONS_EXPANDED } from "../actions/types.js";
import { SET_DIFFICULTY } from "../actions/types.js";


//Game state and panel settings will be stored here.
//We don't need separate reducers for Difficulty setting, or Instructions toggle


//If nothing is set and we have just loaded up.
//null for difficulty means the user hasn't picked anything yet!
const DEFAULT_SETTINGS = {
  instructionsExpanded: false,
  difficulty: null
}

const difficultyReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case SET_INSTRUCTIONS_EXPANDED: //was fired by action dispatch.
      return { ...state, instructionsExpanded: action.instructionsExpanded };
    case SET_DIFFICULTY: //was fired by action dispatch.
        return { ...state, difficulty: action.difficulty };
    default:
      return state;
  }
};

export default difficultyReducer;
