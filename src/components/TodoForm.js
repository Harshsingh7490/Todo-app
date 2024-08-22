import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo({
        id: uuidv4(),
        todo: todo.trim(),
        completed: false,
      });
      setTodo('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
      <TextField
        label="New Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
