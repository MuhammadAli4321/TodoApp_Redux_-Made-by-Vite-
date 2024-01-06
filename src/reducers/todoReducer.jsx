// reducers/todoReducer.js
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, text: action.payload.text }];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todoReducer;


