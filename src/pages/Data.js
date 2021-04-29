import React, { Component } from "react"
import "../style.css"

class Data extends Component {
    render() {
        return (
            <div>
                <h3>Data</h3>
                <p>Who we are and what we do.
                Call to initial state API goes here.
                </p>
                <p>
                    Loaded Recipe is:
                </p>
                <textarea className="result" value={JSON.stringify(JSON.parse(sessionStorage.getItem('recipe')), null, 2)} >

                </textarea>
            </div>
        )
    }
}

export default Data
