import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { getAllPokes } from '../redux/actions'
import Card from './Card'
import ReloadPokes from './ReloadPokesBtn'

export default function Home() {
    let pokesToRender = []
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokes())
    }, [dispatch])

    const pokemons = useSelector(state => state.pokemons)
    if(Array.isArray(pokemons)) pokesToRender = pokemons
    
    return (
        <>
            <Navbar/>
            {
                pokesToRender.length ? (
                    pokesToRender.map(poke => {
                        return (
                            <Card id={poke.id}
                                  name={poke.name}
                                  img={poke.img}
                                  types={poke.types}/>
                        )
                    })
                ) : (
                    typeof(pokemons) === 'string' ? (
                    <ReloadPokes message={pokemons}/>
                    ) : <p>Loading...</p>
                )
            }
        </>
    )
}