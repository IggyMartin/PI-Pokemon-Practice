const { Pokemon, Type } = require('../../db.js')
const axios = require('axios')

const apiPokes = async (req, res) => {
    const apiPokemons = []
    const firstPetition = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
    const infoToAnalize = firstPetition.data.results
    for (let i = 0; i < infoToAnalize.length; i++) {
        let pok = await axios.get(infoToAnalize[i].url)
        let infoToSend = {
            id: pok.data.id,
            img: pok.data.sprites.other.home.front_default,
            name: pok.data.name,
            hp: pok.data.stats[0].base_stat,
            attack: pok.data.stats[1].base_stat,
            defense: pok.data.stats[2].base_stat,
            speed: pok.data.stats[5].base_stat,
            height: pok.data.height,
            weight: pok.data.weight,
            types: pok.data.types.map(t => t.type.name)
        }
        apiPokemons.push(infoToSend)
    }
    return apiPokemons
}

const dbPokes = async (req, res) => {
    const dbPokemons = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    return dbPokemons
}

const getAllPokes = async (req, res) => {
    const api = await apiPokes()
    const db = await dbPokes()
    const all = api.concat(db)
    return all
}

module.exports = {getAllPokes}
