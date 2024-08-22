import React, { useEffect } from 'react';
import { List, Typography, Paper } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, fetchTodos, updateTodo, deleteTodo }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Paper sx={{ padding: 2, mt: 4 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Todo List
      </Typography>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
