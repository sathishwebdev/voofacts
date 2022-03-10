import React from 'react'
import './App.css';
import Routeconfig from './routeconfig';
import {BrowserRouter as Router} from 'react-router-dom';
import NavPage from './nav';
import * as mui from '@mui/material'

function App() {
  return (

  <Router>
  <NavPage />
  <Routeconfig />
  </Router>
 
  );
}

export default App;
