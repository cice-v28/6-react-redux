import { createStore, combineReducers, compose } from "redux";
import { prop1 } from "./reducer";
import { prop2 } from "./otroReducer";

const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    user1: prop1,
    user2: prop2
  }),
  composeTools()
);
