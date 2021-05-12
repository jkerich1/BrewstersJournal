import React, { Component } from 'react'

import Note from './Note'
import SearchBar from '../search/SearchBar';

export class DisplayNotes extends Component {
    state = { filteredNotes: [] };

    componentDidMount() {
        this.setState({ filteredNotes: this.props.notes });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ filteredNotes: nextProps.notes })
    }

    handleOnSearchTermChanged = (event) => {
        // This will keep track of the original list of notes
        // obtained from the parent
        let currentNotes = [];
        // This will keep track of the new list of notes to
        // be displayed after applying the filter
        let newNotes = [];

        // If search term is not empty
        if(event.target.value !== "") {
            currentNotes = this.props.notes;

            // User .filter() to determine which notes to
            // filter out from the display. First, both the
            // note title and search term are changed to lowercase,
            // (to make it easier for the user to search). After the
            // filter is applied newNotes will contain all notes
            // whose title match some or all of the search term
            newNotes = currentNotes.filter(note => {
                const lcNoteTitle = note.title.toLowerCase();
                const lcSearchTerm = event.target.value.toLowerCase();
                return lcNoteTitle.includes(lcSearchTerm);
            })
        }
        else {
            // If search term is empty, our new list of notes
            // and the original supplied by the parent is the same. 
            newNotes = this.props.notes;
        }

        // Change the state of filtered notes (which will be displayed
        // to the user) according to our rules defined in the filter
        this.setState({ filteredNotes: newNotes });
    }

    render() {
        return (
            <>
                <SearchBar onSearchTermChanged={this.handleOnSearchTermChanged} />
                
                <div className="card-columns mt-3">
                    {this.state.filteredNotes.map(note => {
                        return <Note 
                                key={note.id} 
                                note={note}
                                onNoteDeleted={this.props.onNoteDeleted}
                                onNoteEdited={this.props.onNoteEdited}
                                />

                    })}
                </div>
            </>
        )
    }
}

export default DisplayNotes

