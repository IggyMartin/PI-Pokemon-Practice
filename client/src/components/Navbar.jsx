import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <div style={{backgroundColor: "red"}}>
            <SearchBar/>
            <Link to="/create">
                <button>Create</button>
            </Link>
            <Link to="/aboutMe">
                <button>About Me</button>
            </Link>
        </div>
    )
}