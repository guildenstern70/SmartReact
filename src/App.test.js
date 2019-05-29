/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
