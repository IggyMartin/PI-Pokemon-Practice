import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllPokes, cleanPokesArray } from '../redux/actions'

export default function ReloadPokes({message}) {
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(cleanPokesArray())
        dispatch(getAllPokes())
    }

    return (
        <>
        <p style={{fontWeight: "bold"}}>{message}</p>
        <p>Pss! I want my pokedex to be searched by real pokemons fans, soo, either you search one by its exact name or you won't get the one you are looking for!</p>
        <button type='submit' onClick={e => handleSubmit(e)}>
            Reload Pokemons
        </button>
        </>
    )
}