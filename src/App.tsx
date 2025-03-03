/*
 * Copyright (c) Alessio Saltarin 2019-2025
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Index from './pages/Index';
import Other from './pages/Other';
import Navigation from "./pages/Navigation";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Index />} />
          <Route path="other" element={<Other />} />
        </Route>
    </Routes>
  );
}

export default App;
