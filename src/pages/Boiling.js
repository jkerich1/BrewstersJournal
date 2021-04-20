import React, { Component } from "react"
import image from "../brew.jpg"
import "../style.css"

class Boiling extends Component {
    constructor() {
        super()
        var r = sessionStorage.getItem('recipe')
        if (r !== null)
            this.state = JSON.parse(r).Boiling

    }

    render() {
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
                <textarea className="result" value={this.state} >

                </textarea>
            </div>
        )
    }
}


export default Boiling