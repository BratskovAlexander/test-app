import { combineReducers } from "redux";
import { strategyReducer } from "./strategyReducer";

export const rootReducer = combineReducers({
  strategy: strategyReducer,
});
