import React, { Component } from "react"
import image from "../brew.jpg"
import "../style.css"

class Mashing extends Component {
    constructor() {
        super()
        var r = sessionStorage.getItem('recipe')
        if (r !== null)
            this.state = JSON.parse(r).Mashing
        
    }

    render() {
        return (
            <div>
                <div >
                    <h3>Mashing</h3>
                    <p>Mashing Data goes here.</p>
                    <button>Start</button>
                    <button >Stop</button>

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

export default Mashing