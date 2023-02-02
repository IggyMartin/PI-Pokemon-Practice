const axios = require('axios')
const { Type } = require('../../db.js')

const getTypes = async (req, res) => {
    try {
        const alreadyInDb = await Type.findAll()
        if(alreadyInDb.length === 0) {
            const petition = await axios.get('https://pokeapi.co/api/v2/type')
            const info = petition.data.results
            const types = info.map(type => {
                return {
                    name: type.name
                }
            })
            await Type.bulkCreate(types)
            const typesInDb = await Type.findAll()
            return res.status(200).json(typesInDb)
        } else {
            return res.status(200).json(alreadyInDb)
        }
    } catch (error) {
        return res.status(400).send(console.log(error))
    }
}

module.exports = { getTypes }