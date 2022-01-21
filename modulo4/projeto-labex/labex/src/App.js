import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from './route/Router'

export function App(props) {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
