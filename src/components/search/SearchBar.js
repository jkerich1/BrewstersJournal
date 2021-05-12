import React, { Component } from 'react'
import { BsSearch } from "react-icons/bs"

import './SearchBar.css'

export class SearchBar extends Component {
    render() {
        return (
            <>
                <form className="form-inline my-2 my-lg-3 search-form">
                    <BsSearch style={{ position:'absolute', top:'11px', left:'15px'}} />
                    <input className="form-control mr-sm-2 search-input" 
                    type="search" placeholder="Search by title..." 
                    aria-label="Search"
                    onChange={this.props.onSearchTermChanged} />
                </form>
            </>
        )
    }
}

export default SearchBar
