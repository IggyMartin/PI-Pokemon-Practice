import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <>
                <input type="text" placeholder="Search..."/>
                <button type="submit">Search</button>
            </>
        )
    }
}
