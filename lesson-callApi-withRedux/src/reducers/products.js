import * as Types from "./../constants/ActionTypes";

const initialState = [];

// products, id chính là state và action.id
const findIndex = (products, id) => {
  // console.log(id);
  let result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

const products = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.payload;
      return [...state];
    case Types.DELETE_PRODUCT:
      // truyền state và id vào findIndex
      // action.id là lấy được value của payload
      console.log(action);
      index = findIndex(state, action.id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.payload);
      return [...state];
    default:
      return [...state];
  }
};

export default products;
