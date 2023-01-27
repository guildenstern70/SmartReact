/*
 * Copyright (c) Alessio Saltarin 2019-2023
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
  const title = screen.getByText('Smart React');
  expect(title).toBeInTheDocument();
});
