var initValue = {
  todoData: [],
};
export const todoReducer = (storeTodo = initValue, action) => {
  switch (action.type) {
    case "ALL_TODO": {
      return {
        ...storeTodo,
        todoData: action.payload,
      };
    }
    default: {
      return storeTodo;
    }
  }
};
