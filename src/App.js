import React, {Component} from 'react';

import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import AnotherPage from "./pages/AnotherPage";
import Home from "./pages/Home";

class App extends Component
{

    render()
    {

        document.title = "SmartReact";

        return (

            <Router>
                    <Switch>
                        <Route path="/" exact component={LoginForm} />
                        <Route path="/home" component={Home} />
                        <Route path="/anotherpage" component={AnotherPage}/>
                    </Switch>
            </Router>

        );
    }
}

export default App;
