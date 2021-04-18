import React from "react"

import "../style.css"
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

function Navbar () {

  return (
 
    <div className="topnav">
      <MainNav />
      <AuthNav />
    </div>
    
    
  )
}

export default Navbar