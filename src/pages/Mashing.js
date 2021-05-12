import React, { Component } from "react"
import image from "../brew.jpg"
import "../style.css"
import Button from 'react-bootstrap/Button'

import {Route} from 'react-router-dom'

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
                <Button className="button" onClick={() => window.open('https://811b8f7d466f.ngrok.io/start', "_blank")}>Start</Button>
         
                <Button className="button" onClick={() => window.open('https://811b8f7d466f.ngrok.io/stop', "_blank")}>Stop</Button>
           
            
           
            
            
        </div>
        <div>
        <iframe src="https://iot.app.initialstate.com/embed/#/tiles/bkt_17iu8kolvd30z" className="iframe"></iframe>
        </div>
        <textarea className="result" value={this.state} >

        </textarea>
        </div>
    )
    }
}

export default Mashing