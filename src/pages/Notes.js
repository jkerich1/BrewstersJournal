import React, { Component } from 'react'

import CreateNote from '../components/notes/CreateNote'
import DisplayNotes from '../components/notes/DisplayNotes'

export class Notes extends Component {
    state = { 
            showCreateNote: false, 
            notes: 
                [
                    {
                    id: 1,
                    title: "First Note",
                    description: "Hello, this is my first note",
                    timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)"
                    },
                    {
                    id: 2,
                    title: "Second Note",
                    description: "Hello, this is my second note",
                    timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)"
                    },
                    {
                    id: 3,
                    title: "Third Note",
                    description: "Hello, this is my third note",
                    timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)"
                    }
                ]
            };

    // Save a note
    handleOnNoteSaved = note => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newNote = { id, ...note };
        this.setState({ notes: [...this.state.notes, newNote] });
    };

    // Determine if form to add new note is to be displayed or not
    handleOnCreateNoteClicked = () => {
        this.setState({ showCreateNote: !this.state.showCreateNote })
    }

    render() {
        return (
            <div className="container mt-2">
                <CreateNote
                    onCreateNoteClicked={this.handleOnCreateNoteClicked}
                    onNoteSaved={this.handleOnNoteSaved}
                    showCreateNote={this.state.showCreateNote}
                />
                
                <DisplayNotes 
                    notes={this.state.notes}
                />
            </div>
        )
    }
}

export default Notes
