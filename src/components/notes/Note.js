import React, { Component } from 'react'
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export class Note extends Component {
    render() {
        return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{ 'display': 'flex', 'align-items': 'center', 
                        'justify-content': 'space-between' }}>
                            {this.props.title}
                            <div>
                                <MdEdit
                                style={{ cursor: "pointer", marginRight: "1em" }}
                                />
                                <FaTimes
                                style={{ color: "red", cursor: "pointer" }}
                                />
                            </div>
                        </h5>
                        <p className="card-text">{this.props.description}</p>
                        <p class="card-text"><small class="text-muted">{this.props.timeStamp}</small></p>
                    </div>
                </div>
        )
    }
}

export default Note
