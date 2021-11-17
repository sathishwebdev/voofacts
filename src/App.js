import React from 'react'
import './App.css';
import Routeconfig from './routeconfig';
import {BrowserRouter as Router} from 'react-router-dom';
import NavPage from './nav';
import paper from '@mui/material/Paper'

function App() {
  return (
  <paper sx={{backgroundColor:"black"}}>
  <Router>
  <NavPage />
  <Routeconfig />
  </Router>
  </paper>
  );
}

export default App;
