import React, { Component } from 'react'

export class CreateNote extends Component {
  state = { title: "", description: "", timeStamp: new Date().toString() }

  handleOnSubmitClicked = e => {
    e.preventDefault();

    if (!this.state.title) {
      alert("Title cannot be empty!");
      return;
    }

    this.setState({ timeStamp: new Date().toString() });

    this.props.onNoteSaved(this.state);

    this.setState({ title: "", description: "" });
  };

  render() {
    return (
        <>
          <button
            className={!this.props.showCreateNote ? "btn btn-primary" : "btn btn-danger"}
            onClick={this.props.onCreateNoteClicked}>
            {!this.props.showCreateNote ? "Create Note" : "Close"}</button>

          {this.props.showCreateNote ? (
            <div className="card" style={{ 'width': '25rem' }}>
                <div className="card-header">Create new note</div>
                <div className="card-body">
                    <form onSubmit={this.handleOnSubmitClicked}>
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
                    <button type="submit" className="btn btn-dark">Save Note</button>
                    </form>
                </div>
            </div>  
          ) : null}
        </>
      );
  }
};

export default CreateNote;