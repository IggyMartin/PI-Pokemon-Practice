const { getAllPokes } = require('./getAllPokes.js')

const allOrByName = async (req, res) => {
    try {
        const { name } = req.query
        const allPokes = await getAllPokes()
        if(name) {
            const searchedPoke = allPokes.filter(pok => pok.name.toLowerCase() === name.toLowerCase())
            if(searchedPoke.length === 0) {
                return res.status(404).send("No pokemons with that exact name")
            } else {
                return res.status(200).json(searchedPoke)
            }
        }
        return res.status(200).json(allPokes) 
    } catch (error) {
        return res.status(400).send(console.log(error))
    }
}

module.exports = { allOrByName }