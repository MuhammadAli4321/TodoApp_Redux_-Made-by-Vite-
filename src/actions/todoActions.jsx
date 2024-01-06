export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: { id: Date.now(), text },
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: { id },
  });
  