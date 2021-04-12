
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

      <Router>

        <NavBar/>

      <div>
      <Route exact path='/' component={Home} />

      <Route path='/Boiling' component={Boiling} />

      <Route path='/Mashing' component={Mashing} />

      <Route path ='/Data' component={Data} />

      </div>

     </Router>

     </div>
     
      )
}
 
export default App;
