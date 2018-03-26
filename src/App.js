import React, {Component} from 'react';
import MagicBox from './components/MagicBox';
import Header from './components/Header';

import './App.css';
import StatefulBox from "./components/StatefulBox";

class App extends Component {

    render() {

        document.title = "SmartReact";

        return (

            <div className="App">

                <Header title="SmartReact" />
                <MagicBox text="Ciao ciao"/>
                <StatefulBox />

            </div>


        );
    }
}

export default App;
