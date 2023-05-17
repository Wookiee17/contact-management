export const todoAction = (todos, dispatch) => {
  console.log(todos);
  dispatch({
    type: "ALL_TODO",
    payload: todos,
  });
};
