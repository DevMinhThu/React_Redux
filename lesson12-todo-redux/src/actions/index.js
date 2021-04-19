import * as types from "./../constants/ActionTypes";

// la param action trong reducer tasks
export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  console.log("param task in action", task);
  return {
    type: types.ADD_TASK,
    task: task,
  };
};

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};
