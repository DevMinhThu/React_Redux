import { combineReducers } from "redux";
import tasks from "./tasks";

const myReducer = combineReducers({
  tasks_key: tasks, // tasks right la cac state ben tasks.js reducer xuat ra
});

export default myReducer;
