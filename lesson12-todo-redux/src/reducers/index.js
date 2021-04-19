import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";

const myReducer = combineReducers({
  tasks_key: tasks, // tasks right la cac state ben tasks.js reducer xuat ra
  isDisplayForm_key: isDisplayForm,
});

export default myReducer;
