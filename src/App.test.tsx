/*
 * Copyright (c) Alessio Saltarin 2019-2025
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const title = screen.getByText('Smart React');
    expect(title).toBeInTheDocument();
  });
});