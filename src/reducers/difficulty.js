import { SET_DIFFICULTY } from "../actions/types.js";

//If nothing is set and we have just loaded up.
//null for difficulty means the user hasn't picked anything yet!
const DEFAULT_SETTINGS = {
  difficulty: null
}

const difficultyReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case SET_DIFFICULTY: //was fired by action dispatch.
        return { ...state, difficulty: action.difficulty };
    default:
      return state;
  }
};

export default difficultyReducer;
