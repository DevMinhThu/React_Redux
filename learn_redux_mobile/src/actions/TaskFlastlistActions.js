export const finishTask = index => {
  return {
    type: 'FINISH',
    atIndex: index,
  };
};

export const deleteTask = index => {
  return {
    type: 'DELETE',
    atIndex: index,
  };
};
