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
                                {this.props.title}
                                <div>
                                    <MdEdit onClick={() => this.setState({ showEditNote: true })}
                                    style={{ cursor: "pointer", marginRight: "1em" }}
                                    />
                                    <FaTimes onClick={() => this.props.onNoteDeleted(this.props.id)}
                                    style={{ color: "red", cursor: "pointer" }}
                                    />
                                </div>
                            </h5>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text"><small className="text-muted">{this.props.timeStamp}</small></p>
                        </>) 
                        : 
                        (<EditNote
                        id={this.props.id} 
                        title={this.props.title}
                        description={this.props.description}
                        timeStamp={this.props.timeStamp}
                        onNoteEdited={this.props.onNoteEdited}
                        onEditDone={() => {this.setState({ showEditNote: false })}}
                        />)}
                    </div>
                </div>
        )
    }
}

export default Note
