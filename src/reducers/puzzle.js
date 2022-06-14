import { CALC_PUZZLE } from "../actions/types.js";

//If nothing is set and we have just loaded up.
//null for difficulty means the user hasn't picked anything yet!
const DEFAULT_SETTINGS = {
  startNumber:0,
  answer:0,
  opsArray:null
}

const puzzleReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case CALC_PUZZLE: //was fired by action dispatch.
        return { ...state, startNumber:action.startNumber,answer:action.answer,opsArray:action.opsArray};
    default:
      return state;
  }
};

export default puzzleReducer;
