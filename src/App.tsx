/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';

const App: React.FC = (): React.ReactElement => {
    document.title = 'SmartReact';

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/home" component={Home} />
                <Route path="/anotherpage" component={AnotherPage} />
            </Switch>
        </Router>
    );
};

export default App;
