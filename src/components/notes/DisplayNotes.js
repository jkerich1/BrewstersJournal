import React, { Component } from 'react'

import Note from './Note'

export class DisplayNotes extends Component {
    render() {
        return (
            <div className="card-columns mt-3">
                {this.props.notes.map(note => {
                    return <Note 
                            key={note.id} 
                            note={note}
                            onNoteDeleted={this.props.onNoteDeleted}
                            onNoteEdited={this.props.onNoteEdited}
                            />

                })}
            </div>
        )
    }
}

export default DisplayNotes
