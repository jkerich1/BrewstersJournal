import React, { Component } from 'react'

export class Notes extends Component {
    render() {
        return (
            <div>
                <h3>Notes</h3>
                <div class="card-columns">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title that wraps to a new line</h5>
                            <p class="card-text">This is a longer card with supporting text below 
                                as a natural lead-in to additional content. This content is a little
                                bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes
