import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import LoginForm from './LoginForm/LoginForm';
import './App.css';
import MainTodo from './TodoList/MainTodo';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path='/'
                        exact
                    >
                        <LoginForm />
                    </Route>
                    <Route
                        path='/maintodo'
                    >
                        <MainTodo />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
