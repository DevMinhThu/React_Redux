import * as Types from "./../constants/ActionTypes";

const initialState = [];

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default itemEditing;
