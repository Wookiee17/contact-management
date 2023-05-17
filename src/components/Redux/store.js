import { legacy_createStore } from "redux";
import { todoReducer } from "./Reducers/Reducer";
export const store = legacy_createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
