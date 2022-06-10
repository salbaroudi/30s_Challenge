import { combineReducers } from "redux";
import settingsReducer from "./settings.js";
import difficultyReducer from "./settings.js";


//Will return a composite reducer with the name RootReducer, for ./src/index.js
export default combineReducers({settings: settingsReducer, difficulty: difficultyReducer});
