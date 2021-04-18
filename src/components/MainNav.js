import React from "react"
import { Link } from "react-router-dom"

import "../style.css"

function MainNav () {

  return (
 
    <div>
      <Link className= "active" to="/">Home</Link>
      <Link to = "Boiling" >Boiling</Link>
      <Link to = "Mashing" >Mashing</Link>
      <Link to = "Data" > Data</Link>
    </div>
    
    
  )
}

export default MainNav