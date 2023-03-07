import React from 'react'
import { connect } from 'react-redux'
import { searchByName, cleanPokesArray } from '../redux/actions'

class SearchBar extends React.Component { 

    constructor(props) {
        super(props)
        this.state = {
            searched: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            searched: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.searched === "") {
            alert("Search by exact name")
        } else {
            this.props.cleanPokesArray()
            this.props.searchByName(this.state.searched)
            this.setState({
                searched: ""
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searched} onChange = {this.handleChange} placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        searchByName: () => dispatch(searchByName())
        cleanPokesArray: () => dispatch(cleanPokesArray())
    }
} */

export default connect(null, {searchByName, cleanPokesArray})(SearchBar)
