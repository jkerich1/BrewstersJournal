import React, { Component } from 'react'

import DropDown from './DropDown'

export class EditNote extends Component {
    state = { id: this.props.note.id, 
              title: this.props.note.title, 
              description: this.props.note.description, 
              timeStamp: this.props.note.timeStamp,
              bgColor: this.props.note.bgColor,
              textColor: this.props.note.textColor }

    handleOnSaveChangesClicked = e => {
      e.preventDefault();
  
      if (!this.state.title) {
        alert("Title cannot be empty!");
        return;
      }

      this.setState({ timeStamp: new Date().toString() }, 
                    () => {
                            this.props.onNoteEdited(this.state); 
                            this.props.onEditDone()
                          });
    };
  
    render() {
      return (
            <>
                <form onSubmit={this.handleOnSaveChangesClicked}>
                <div className="form-group">
                  <DropDown onOptionClicked={(option) => {this.setState({ bgColor:option.bgColor, textColor: option.textColor })}}/>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input
                    type="text"
                    placeholder="Add title here..."
                    onChange={e => this.setState({ title: e.target.value })}
                    value={this.state.title}
                    className ="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                    rows="10"
                    placeholder="Add description here..."
                    onChange={e => this.setState({ description: e.target.value })}
                    value={this.state.description}
                    className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-dark mr-1">Save Changes</button>
                <button type="button" onClick={this.props.onEditDone} className="btn btn-danger">Cancel</button>
                </form>
            </>  
        );
    }
}

export default EditNote
