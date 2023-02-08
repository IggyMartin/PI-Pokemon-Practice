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

    getByName = (e) => {
        e.preventDefault()
        this.props.cleanPokesArray()
        this.props.searchByName(this.state.searched)
    }

    render() {
        return (
            <>
                <input type="text" onChange = {this.handleChange}placeholder="Search..."/>
                <button type="submit" onClick={this.getByName}>Search</button>
            </>
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
