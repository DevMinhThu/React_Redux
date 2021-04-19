import { createStore } from "redux";

// create state start
let initialState = {
  status: false,
  sort: {
    by: "name",
    value: 1,
  },
};

// create reducer
/* Nơi phân tích ACTION sẽ làm gì, thay đổi state ntn rồi trả về */
let myReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_STATUS") {
    state.status = !state.status;
    return state;
  }
  if (action.type === "SORT") {
    let { by, value } = action.sort; // {by} duoc hieu la action.sort.byNew
    let { status } = state;

    return {
      status: status, // status cu
      sort: {
        by: by,
        value: value,
      },
    };
  }
  return state;
};

// create store
const store = createStore(myReducer);

console.log("Default state: ", store.getState());
// create action
/* Thực hiện cv thay đổi status */
let action = { type: "TOGGLE_STATUS" };
store.dispatch(action); // luc nay action o tren myReDucer chinh la action nay

console.log("TOGGLE_STATUS handle: ", store.getState());

/* Thực hiện cv sắp xếp */
let actionSort = { type: "SORT", sort: { by: "nameOfAction", value: -1 } };
store.dispatch(actionSort);
console.log("SORT: ", store.getState());
