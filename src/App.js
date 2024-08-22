import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Typography } from '@mui/material';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './redux/actions';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom align="center">
                Todo App
            </Typography>
            <TodoForm addTodo={(todo) => dispatch(addTodo(todo))} />
            <List>
                <h2>Your Todo List</h2>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={(id, updatedFields) => dispatch(updateTodo(id, updatedFields))}
                        deleteTodo={(id) => dispatch(deleteTodo(id))}
                    />
                ))}
            </List>
        </Container>
    );
};

export default App;
