import React from "react"
import "../style.css"
import 'bootstrap/dist/css/bootstrap.min.css'



function Navbar () {


  return (

    <nav className = "navbar navbar-expand-md bg-info navbar-dark">
      <a href="/" className="navbar-brand">Brewsters</a>
        <div className="container">
          <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="navbar-collapse collapse" id="mainNav">
          <div className="navbar-nav">
            <a className= "nav-item nav-link" href="/">Home<span className="sr-only">(current)</span></a>
            <a className ="nav-item nav-link" href = "Boiling" >Boiling</a>
            <a className ="nav-item nav-link" href = "Mashing" >Mashing</a>
            <a className ="nav-item nav-link" href = "Data" > Data</a>
          </div> 
      </div>
     </div>
    </nav>
  
  )
}

export default Navbar