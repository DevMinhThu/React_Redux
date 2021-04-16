import { createStore } from "redux";
import { status, sort } from "./actions/index";
import myReducer from "./reducers/index";

// create store
const store = createStore(myReducer);

console.log("Default state: ", store.getState());
// create action
/* Thực hiện cv thay đổi status */
store.dispatch(status());

console.log("TOGGLE_STATUS: ", store.getState());

/* Thực hiện cv sắp xếp */
store.dispatch(
  sort({
    by: "aaa",
    value: 888,
  })
);
console.log("SORT: ", store.getState());
