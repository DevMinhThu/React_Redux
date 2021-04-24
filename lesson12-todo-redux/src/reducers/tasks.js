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

// tim vi tri item muon update
const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

// get data tu localStorage
const data = JSON.parse(localStorage.getItem("tasks"));

// data khoi tao
let initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
  // console.log(state);
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      console.log("action of add_task", action);
      let newTask = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newTask); // push newTask vua add vao state hien tai
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.UPDATE_STATUS_TASK:
      index = findIndex(state, action.id);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.DELETE_TASK:
      index = findIndex(state, action.id);
      state.splice(index, 1); // delete theo index, va delete 1 phan tu
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducer;

// khi xuat tk myReducer ra, ta nhan duoc cac state
