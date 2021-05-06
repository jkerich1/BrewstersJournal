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
                    timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)",
                    bgColor:"primary",
                    textColor:"white"
                    },
                    {
                    id: 2,
                    title: "What is Lorem Ipsum?",
                    description: "Lorem Ipsum is simply dummy text of the printing \
                                  and typesetting industry. Lorem Ipsum has been the \
                                  industry's standard dummy text ever since the 1500s, \
                                  when an unknown printer took a galley of type and scrambled \
                                  it to make a type specimen book. It has survived not only five \
                                  centuries, but also the leap into electronic typesetting, \
                                  remaining essentially unchanged.",
                    timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)",
                    bgColor:"secondary",
                    textColor:"white"
                    },
                    {
                    id: 3,
                    title: "Third Note",
                    description: "Hello, this is my third note",
                    timeStamp: "Sat Mar 27 2021 12:44:33 GMT-0500 (Central Daylight Time)",
                    bgColor:"success",
                    textColor:"white"
                    },
                    {
                    id: 4,
                    title: "Fourth Note",
                    description: "",
                    timeStamp: "Sat Mar 23 2021 12:44:33 GMT-0500 (Central Daylight Time)",
                    bgColor:"white",
                    textColor:"dark"
                    },
                    {
                    id: 5,
                    title: "Fifth Note",
                    description: "Hello, this is my third note",
                    timeStamp: "Sat Mar 25 2021 12:44:33 GMT-0500 (Central Daylight Time)",
                    bgColor:"info",
                    textColor:"white"
                    },
                    {
                    id: 6,
                    title: "Sixth Note",
                    description: "Hello, this is my sixth note",
                    timeStamp: "Sat Mar 28 2021 12:44:33 GMT-0500 (Central Daylight Time)",
                    bgColor:"info",
                    textColor:"white"
                    }
                ]
            };

    // Save a note
    handleOnNoteSaved = note => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newNote = { id, ...note };
        this.setState({ notes: [...this.state.notes, newNote] });
    };

    // Delete a note
    handleOnNoteDeleted = (id) => {
        this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
    };

    // Edit a note
    handleOnNoteEdited = (newNote) => {
        this.setState({ notes: this.state.notes.map(note => note.id === newNote.id ? newNote : note)});
    };

    // Determine if form "Create new note" is to be displayed or not
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
                    onNoteDeleted={this.handleOnNoteDeleted}
                    onNoteEdited={this.handleOnNoteEdited}
                />
            </div>
        )
    }
}

export default Notes
