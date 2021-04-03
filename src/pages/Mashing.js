import React from "react"
import image from "../brew.jpg"
import "../style.css"

function Mashing () {
    return (
        <div className ="background"style={{backgroundImage: `url(${image})`}}>
            <h3>Mashing</h3>
            <p>Mashing Data goes here.</p>
        </div>
    )
}

export default Mashing