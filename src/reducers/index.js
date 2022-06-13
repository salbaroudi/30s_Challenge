import { combineReducers } from "redux";
import instructionsReducer from "./instructions.js";
import difficultyReducer from "./difficulty.js";


//Will return a composite reducer with the name RootReducer, for ./src/index.js
export default combineReducers({instructions: instructionsReducer, difficulty: difficultyReducer});
