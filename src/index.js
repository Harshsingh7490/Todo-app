import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Comic Sans MS, cursive, sans-serif',
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
