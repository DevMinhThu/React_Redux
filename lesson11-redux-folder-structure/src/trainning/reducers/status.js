// create state start
let initialState = false;

// create reducer
/* Nơi phân tích ACTION sẽ làm gì, thay đổi state ntn rồi trả về */
let myReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_STATUS") {
    state = !state;
    return state;
  }
  return state;
};

export default myReducer;
