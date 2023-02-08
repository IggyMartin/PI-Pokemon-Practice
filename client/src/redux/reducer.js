const initialState = {
    pokemons: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "GET_ALL_POKES":
            return {
                ...state,
                pokemons: action.payload
            }
        case "GET_BY_NAME":
            let NoPokeFoundMessage = ""
            if(typeof(action.payload) === 'string') NoPokeFoundMessage = action.payload
            return {
                ...state,
                pokemons: NoPokeFoundMessage.length > 0 ? NoPokeFoundMessage : action.payload
            }
        case "CLEAN_POKEMONS_ARRAY":
            return {
                ...state,
                pokemons: []
            }
        default: return state
    }
}