import React from "react";
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
      </Router>
    </div>
  );
}

export default App;
