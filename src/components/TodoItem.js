import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Delete } from '@mui/icons-material';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const handleToggle = () => {
        updateTodo(todo.id, { completed: !todo.completed });
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <Delete />
                </IconButton>
            }
        >
            <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                onChange={handleToggle}
            />
            <ListItemText
                primary={todo.todo}
                sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
        </ListItem>
    );
};

export default TodoItem;
