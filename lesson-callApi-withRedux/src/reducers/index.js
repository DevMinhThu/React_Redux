import { combineReducers } from "redux";
import itemEditing from "./itemEditing";
import products from "./products";

// co the hieu la appReducers la tai nguyen state dua vao store
// store hộp chứa, còn appReducers tổng hợp các state của app va đưa vào hộp store
const appReducers = combineReducers({
  products_key: products,
  itemEditing: itemEditing
});

export default appReducers;
