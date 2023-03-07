import React from 'react'
import { useDispatch } from 'react-redux'
import { cleanPokesArray, getAllPokes} from '../redux/actions'

export default function ReloadPokes() {
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(cleanPokesArray())
        dispatch(getAllPokes())
    }

    return (
        <button type='submit' onClick={e => handleSubmit(e)}>
            Reload Pokemons
        </button>
    )
}