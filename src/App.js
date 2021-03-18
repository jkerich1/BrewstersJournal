import './App.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';

class App extends Component {
  state = { 
   
 };
  render() { 
    console.log("App - Rendered");
    return (
     <NavBar/>
      );
  }
}
 
export default App;
