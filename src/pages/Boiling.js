import React, { Component } from "react"
import image from "../brew.jpg"
import "../style.css"
import Button from 'react-bootstrap/Button'


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
        
        <div className="shading">
            <h3> Boiling</h3>
            <p>Boiling Data goes here.</p>
            
            <Button className="button" onClick={() => window.open('https://afeb278ac10b.ngrok.io/start', "_blank")}>Start</Button>
         
            <Button className="button" onClick={() => window.open('https://afeb278ac10b.ngrok.io/stop', "_blank")}>Stop</Button>
            

            
            
        </div>
        <div>
            <iframe className="iframe" src="https://iot.app.initialstate.com/embed/#/tiles/bkt_59g8knf65h7l"></iframe>
        </div>
      
        <textarea className="result" value={this.state} >

                </textarea>
        </div>
    )

    }
}


export default Boiling