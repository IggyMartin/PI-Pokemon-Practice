import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cleanPokeId, cleanPokesArray, getById } from '../redux/actions'

const Detail = (props) => {
    let pokeToRender = []
    const dispatch = useDispatch()
    const id = props.match.params.id
    const poke = useSelector(state => state.pokeById)
    const allPokes = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getById(id))
        return (() => {
            if(allPokes.length === 1) {
                dispatch(cleanPokesArray())
            }
            dispatch(cleanPokeId())
        })
    }, [dispatch, id, allPokes])


    if(Array.isArray(poke)) {
        pokeToRender = poke
    }
    /* let pokeTypes = ""
    if(poke.types) {
        pokeTypes = poke.types.join(", ")
    } */
    
    return (
        <div>
            {pokeToRender.length ? (
                <div>
                    <Link to="/home">
                        <span>Home</span>
                    </Link>
                    <h2>{poke[0].name}</h2>
                    <img src={poke[0].img} alt={poke[0].img}/>
                    <div>
                        <span>Fighting Stats:</span>
                        <ul>
                            <li>Health: {poke[0].hp}</li>
                            <li>Attack: {poke[0].attack}</li>
                            <li>Defense: {poke[0].defense}</li>
                            <li>Speed: {poke[0].speed}</li>
                        </ul>
                        <span>General Stats:</span>
                        <ul>
                            <li>Height: {poke[0].height}</li>
                            <li>Weight: {poke[0].weight}</li>
                            <li>Types: {poke[0].types}</li>
                        </ul>
                    </div>
                </div>
                ) : typeof(poke) === 'string' ? {poke} : <p>Loading...</p>
            }
        </div>
    )
}

export default Detail