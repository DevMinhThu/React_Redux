import * as types from "../constants/ActionTypes";

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

let randomID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4()
  );
};

// get data tu localStorage
const data = JSON.parse(localStorage.getItem("tasks"));

// data khoi tao
let initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      console.log(action);
      let newTask = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;

// khi xuat tk myReducer ra, ta nhan duoc cac state
