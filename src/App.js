
import React from "react";
import NavBar from './components/Navbar';
import { useAuth0 } from "@auth0/auth0-react";


import { Route, Switch }
from 'react-router-dom'
import Home from './pages/Home';
import Boiling from './pages/Boiling';
import Mashing from './pages/Mashing';
import Data from './pages/Data';
import Loading from './components/Loading';


function App () {
    const { isLoading } = useAuth0();

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div>

      <NavBar/>

      <div>
      <Route exact path='/' component={Home} />

      <Route path='/Boiling' component={Boiling} />

      <Route path='/Mashing' component={Mashing} />

      <Route path ='/Data' component={Data} />

      </div>

     </div>
     
      )
}
 
export default App;
