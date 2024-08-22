import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/todos');
    dispatch({ type: FETCH_TODOS, payload: response.data.todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (id, updatedFields) => ({
  type: UPDATE_TODO,
  payload: { id, updatedFields },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
