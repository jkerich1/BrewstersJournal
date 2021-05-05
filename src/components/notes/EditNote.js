import React, { Component } from 'react'

export class EditNote extends Component {
    state = { id: this.props.id, title: this.props.title, description: this.props.description, timeStamp: this.props.timeStamp }

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
