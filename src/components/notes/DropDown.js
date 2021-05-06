import React, { Component } from 'react'

const options = [
    {id: 1, label: "Blue", bgColor: "primary", textColor:"white" },
    {id: 2, label: "Grey", bgColor: "secondary", textColor:"white"},
    {id: 3, label: "Green", bgColor: "success", textColor:"white"},
    {id: 4, label: "Red", bgColor: "danger", textColor:"white"},
    {id: 5, label: "Gold", bgColor: "warning", textColor:"dark"},
    {id: 6, label: "Turqoise", bgColor: "info", textColor:"white"},
    {id: 7, label: "White", bgColor: "white", textColor:"dark"},
    {id: 8, label: "Black", bgColor: "dark", textColor:"white"},
]

export class DropDown extends Component {
    state = { selectedOption: options[0] }

    render() {
        return (
            <div className="dropdown">
                <label>Select a color:</label>
                <button className={`btn btn-${this.state.selectedOption.bgColor} dropdown-toggle ml-1`}
                type="button" id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                    {this.state.selectedOption.label}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {options.map(option => {
                        return <a key={option.id} href="#" 
                                onClick={() => {this.setState({ selectedOption: option }); this.props.onOptionClicked(option);}}
                                className="dropdown-item">
                                {option.label}</a> 
                    })}
                </div>
            </div>
        )
    }
}

export default DropDown
