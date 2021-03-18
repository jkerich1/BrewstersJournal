import './App.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 
 'react-router-dom';

class App extends Component {
  state = { 
   
 };
  render() { 
    return (
     <NavBar/>
      );
  }
}
 
export default App;
