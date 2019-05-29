/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
