import React, { Component } from "react"
import "../style.css"
import Button from 'react-bootstrap/Button'


class Recipe extends Component {
    constructor(props) {
        super(props);
        var r = sessionStorage.getItem('recipe')
        if (r !== null)
            this.state = JSON.parse(r)
        else
            this.state = { Name: "", Category: "", Boiling: "", Mashing: "", Notes: "" }

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
            this.setState(result)
            this.sendData(result)

            var formatted = JSON.stringify(result, null, 2);
            document.getElementById('result').value = formatted;
        }.bind(this)

        fr.readAsText(files.item(0));

    }

    handleOnChange(value) {
        const newState = JSON.parse(value);
        this.setState(newState)
        this.sendData(newState)
    }

    handleOnChangeName(value) {
        const newState = this.state;
        newState.Name = value
        this.setState(newState)
        this.sendData(newState)
    }

    handleOnChangeCat(value) {
        const newState = this.state;
        newState.Category = value
        this.setState(newState)
        this.sendData(newState)
    }

    handleOnChangeBoil(value) {
        const newState = this.state;
        newState.Boiling = value
        this.setState(newState)
        this.sendData(newState)
    }

    handleOnChangeMash(value) {
        const newState = this.state;
        newState.Mashing = value
        this.setState(newState)
        this.sendData(newState)
    }

    handleOnChangeNotes(value) {
        const newState = this.state;
        newState.Notes = value
        this.setState(newState)
        this.sendData(newState)
    }

    render() {
        return (
            <div className="shading">
                <h3>Recipe Upload/Download</h3>
                <p>Upload Recipe JSON</p>
                <input type="file" class="form-control-file" id="selectFiles" /><br />
                <Button
                    className="import"
                    onClick={() => this.import()}
                >
                    Import Recipe File
                </Button>
                <br />
                <textarea class="col-sm-10" rows="8" id="result"
                    value={JSON.stringify(this.state, null, 2)}>

                </textarea> <br></br>
                <a
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                        JSON.stringify(this.state, null, 2)
                    )}`}
                    download="recipe.json"
                >
                    {`Download Json`}
                </a> <br></br>
                <form>
                    <label htmlFor="full">Edit Full Json: </label>
                    <input type="text" class="form-control" id="full"
                        onChange={event => this.handleOnChange(event.target.value)}
                        value={JSON.stringify(this.state, null, 2)}>

                    </input> <br></br> <br></br>
                    <div class="col-sm-10">
                        <label htmlFor="name">Name: </label>
                        <input type="text" class="form-control-sm" id="name"
                            onChange={event => this.handleOnChangeName(event.target.value)}
                            value={this.state.Name}>

                        </input>
                        <label htmlFor="category">Category: </label>
                        <input type="text" class="form-control-sm" id="category"
                            onChange={event => this.handleOnChangeCat(event.target.value)}
                            value={this.state.Category}>

                        </input>
                    </div>
                    <div class="col-sm-10">
                        <label htmlFor="boiling">Boiling: </label>
                        <input type="text" class="form-control" id="boiling"
                            onChange={event => this.handleOnChangeBoil(event.target.value)}
                            value={this.state.Boiling}>

                        </input> </div>
                    <div class="col-sm-10">
                        <label htmlFor="mashing">Mashing: </label>
                        <input type="text" class="form-control" id="mashing"
                            onChange={event => this.handleOnChangeMash(event.target.value)}
                            value={this.state.Mashing}>

                        </input></div>
                    <div class="col-sm-10">
                        <label htmlFor="notes">Notes: </label>
                        <input type="text" class="form-control" id="notes"
                            onChange={event => this.handleOnChangeNotes(event.target.value)}
                            value={this.state.Notes}>
                        </input>
                    </div> <br></br>
                </form>
            </div>
        )
    }
}

export default Recipe