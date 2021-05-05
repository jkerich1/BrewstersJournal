import React, { Component } from 'react'

import Note from './Note'

export class DisplayNotes extends Component {
    render() {
        return (
            <div className="card-columns mt-3">
                {this.props.notes.map(note => {
                    return <Note 
                            key={note.id} 
                            id={note.id} 
                            title={note.title}
                            description={note.description}
                            timeStamp={note.timeStamp}
                            onNoteDeleted={this.props.onNoteDeleted}
                            />

                })}
            </div>
        )
    }
}

export default DisplayNotes

