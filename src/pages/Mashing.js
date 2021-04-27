import React, {Component} from "react"
import image from "../brew.jpg"
import "../style.css"
import Button from 'react-bootstrap/Button'

class Mashing extends Component  {
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
        </div>
    )
    }
}

export default Mashing