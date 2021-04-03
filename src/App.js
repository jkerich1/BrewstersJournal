
import React from "react";
import NavBar from './components/Navbar';


import { BrowserRouter as Router, Route, Switch }
from 'react-router-dom'
import Home from './pages/Home';
import Boiling from './pages/Boiling';
import Mashing from './pages/Mashing';
import Data from './pages/Data';


function App () {

    return (
      <div>

      <div>

        <NavBar/>
       
      </div>
      <Router>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/Boiling'>
        <Boiling/>
      </Route>

      <Route path='/Mashing'>
        <Mashing/>
      </Route>

      <Route path ='/Data'>
        <Data/>
      </Route>

     </Router>

     </div>
     
      )
}
 
export default App;
