
import React, { Component } from "react"
import NavBar from './components/Navbar';


import { BrowserRouter as Router, Route, Switch }
  from 'react-router-dom'
import Home from './pages/Home';
import Boiling from './pages/Boiling';
import Mashing from './pages/Mashing';
import Data from './pages/Data';
import Recipe from './pages/Recipe';
import Notes from './pages/Notes';


class App extends Component {
  constructor() {
    super();
  }

  callbackFunction = (recipeLoad) => {
    // this.setState({recipeLoaded: recipeLoad})
    // console.log(this.state)
    sessionStorage.setItem('recipe', JSON.stringify(recipeLoad))
  }


  render() {
    return (
      <div>

        <div>
          <NavBar />
        </div>

        <Router>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/Boiling'>
            <Boiling />
          </Route>

          <Route path='/Mashing'>
            <Mashing />
          </Route>

          <Route path='/Data'>
            <Data />
          </Route>

          <Route path='/Recipe'>
            <Recipe parentCallback={this.callbackFunction} />
          </Route>

          <Route path='/Notes'>
            <Notes />
          </Route>
        </Router>

      </div>

    )
  }
}

export default App;
