import React from "react"
import image from "../brew.jpg"
import "../style.css"

function Boiling () {
    return (
        <div className = "background" style={{backgroundImage: `url(${image})`}}>
            <h3>Boiling!</h3>
            <p>Boiling info goes here</p>
        </div>
    )
}

export default Boiling