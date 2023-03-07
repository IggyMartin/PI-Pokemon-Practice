import axios from 'axios'

export function getAllPokes() {
    return async(dispatch) => {
        const allPokes = await axios.get("http://localhost:3001/pokemons")
        dispatch({
            type: "GET_ALL_POKES",
            payload: allPokes.data
        })
    }
}


export function searchByName(name) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/pokemons?name=${name}`)
        .then(response => response.data)
        .then(data => {
            dispatch({
                type: "GET_BY_NAME",
                payload: data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export function cleanPokesArray() {
    return {
        type: "CLEAN_POKEMONS_ARRAY"
    }
}

export function getById(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(response => {
            dispatch({
                type: "GET_BY_ID",
                payload: response.data
            })
        })
    }
}

export function cleanPokeId() {
    return {
        type: "CLEAN_POKE_ID",
    }
}