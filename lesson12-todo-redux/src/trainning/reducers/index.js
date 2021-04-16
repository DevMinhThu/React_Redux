import status from "./status";
import sort from "./sort";

// su dung de gop cac reducer lai
import { combineReducers } from "redux";

const myReducer = combineReducers({
  status: status,
  sort: sort,
});

// cach viet 2
// const myReducer = combineReducers({
//   status,
//   sort,
// });

export default myReducer;
