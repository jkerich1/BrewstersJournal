import React, { Component } from "react"
import image from "../brew.jpg"
import "../style.css"
import Button from 'react-bootstrap/Button'

class Mashing extends Component  {
  constructor() {
        super()
        var r = sessionStorage.getItem('recipe')
        if (r !== null)
            this.state = JSON.parse(r).Mashing
        
    }
    render(){
    return (
        <div>
        <div className="shading">
            <h3>Mashing</h3>
            <p>Mashing Data goes here.</p>
            <Button className="button">Start</Button>
            <Button className="button">Stop</Button>
            
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