// create state start
let initialState = {
  by: "status_in_sort",
  value: 1,
};

// create reducer
/* Nơi phân tích ACTION sẽ làm gì, thay đổi state ntn rồi trả về */
let myReducer = (state = initialState, action) => {
  if (action.type === "SORT") {
    let { by, value } = action.sort; // {by} duoc hieu la action.sort.byNew

    return { by, value };
  }
  return state;
};

export default myReducer;
