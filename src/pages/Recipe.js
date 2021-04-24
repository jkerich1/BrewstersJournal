import React, { Component } from "react"
import "../style.css"

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };

        this.sendData = this.sendData.bind(this)
    }

    sendData = (i) => {
        this.props.parentCallback(i);
    };

    import() {
        var files = document.getElementById('selectFiles').files;
        console.log(files);
        if (files.length <= 0) {
            return false;
        }

        var fr = new FileReader();

        fr.onload = function (e) {
            console.log(e);
            var result = JSON.parse(e.target.result);
            this.sendData(result)
            
            var formatted = JSON.stringify(result, null, 2);
            document.getElementById('result').value = formatted;
        }.bind(this)

        fr.readAsText(files.item(0));

    }

    render() {
        return (
            <div>
                <h3>Recipe Upload/Download</h3>
                <p>Upload Recipe JSON</p>
                <input type="file" id="selectFiles" /><br />
                <button
                    className="import"
                    onClick={() => this.import()}
                >
                    Import Recipe File
                </button>
                <br />
                <textarea className = "result" id="result">

                </textarea>
            </div>
        )
    }
}

export default Recipe