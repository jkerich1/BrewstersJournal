import React, { Component } from "react"
import image from "../brew.jpg"
import "../style.css"

function Boiling() {
     
    return (
        <div>
        <div>
            <h3>Boiling!</h3>
            <p>Boiling info goes here</p>
            <button>Start</button>
            <button>Stop</button>
        </div>
        <div>
            <iframe src="https://iot.app.initialstate.com/embed/#/tiles/bkt_59g8knf65h7l" className="iframe"></iframe>
        </div>
        </div>
    )
    }


export default Boiling