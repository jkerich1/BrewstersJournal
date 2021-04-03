import React from "react"
import image from "../brew.jpg"
import "../style.css"

function Home () {
    return (
        <div className ="background" style={{backgroundImage: `url(${image})`}}>
            <h3>Home</h3>
            <p>Home is where the heart is..</p>
            
        </div>
    )
}


export default Home