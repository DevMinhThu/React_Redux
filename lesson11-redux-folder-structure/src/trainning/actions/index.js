import * as types from "../constants/ActionTypes";

export const status = () => {
  return {
    type: types.TOGGLE_STATUS,
  };
};

// action có tham số
export const sort = (sort_param) => {
  return {
    type: types.TOGGLE_STATUS,
    sort: sort_param,
  };
};
