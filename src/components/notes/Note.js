import React, { Component } from 'react'
import { FaTimes } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditNote from './EditNote';

export class Note extends Component {
    state = { showEditNote: false }

    render() {
        return (
                <div className="card">
                    <div className="card-body">
                        {!this.state.showEditNote ? (
                        <>    
                            <h5 className="card-title" style={{ display: "flex", alignItems : "center", 
                            justifyContent: "space-between" }}>
                                {this.props.note.title}
                                <div>
                                    <MdEdit onClick={() => this.setState({ showEditNote: true })}
                                    style={{ cursor: "pointer", marginRight: "1em" }}
                                    />
                                    <FaTimes onClick={() => this.props.onNoteDeleted(this.props.note.id)}
                                    style={{ color: "red", cursor: "pointer" }}
                                    />
                                </div>
                            </h5>
                            <p className="card-text">{this.props.note.description}</p>
                            <p className="card-text"><small className="text-muted">{this.props.note.timeStamp}</small></p>
                        </>) 
                        : 
                        (<EditNote
                        note={this.props.note}
                        onNoteEdited={this.props.onNoteEdited}
                        onEditDone={() => {this.setState({ showEditNote: false })}}
                        />)}
                    </div>
                </div>
        )
    }
}

export default Note
