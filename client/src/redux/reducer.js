const initialState = {
    pokemons: [],
    pokeById: []
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
        case "GET_BY_ID":
            let noPokeIdMessage = ""
            if(typeof(action.payload) === 'string') noPokeIdMessage = action.payload
            return {
                ...state,
                pokeById: noPokeIdMessage.length > 0 ? noPokeIdMessage : [...state.pokeById, action.payload]
            }
        case "CLEAN_POKEMONS_ARRAY":
            return {
                ...state,
                pokemons: []
            }
        case "CLEAN_POKE_ID":
            return {
                ...state,
                pokeById: []
            }
        
        default: return state
    }
}