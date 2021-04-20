import React from "react"
import "../style.css"

function Navbar () {

  return (
 
    <div className="topnav">
      <a className= "active" href="/">Home</a>
      <a href = "Boiling" >Boiling</a>
      <a href = "Mashing" >Mashing</a>
      <a href = "Data" > Data</a>
      <a href = "Recipe" > Recipe</a>
    </div>
    
    
  )
}

export default Navbar