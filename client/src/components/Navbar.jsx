import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import ReloadPokes from './ReloadPokesBtn'

export default function Navbar() {
    return (
        <div style={{backgroundColor: "red"}}>
            <ReloadPokes/>
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