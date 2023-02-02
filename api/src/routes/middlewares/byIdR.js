const { getAllPokes } = require('./getAllPokes.js')

const byId = async (req, res) => {
    try {
        const { id } = req.params
        const allPokes = await getAllPokes()
        const detailedPoke = allPokes.find(pok => pok.id == id)
        if(detailedPoke) {
            return res.status(200).json(detailedPoke)
        } else {
            return res.status(404).send("No pokemon with that ID")
        }
    } catch (error) {
        res.status(400).send(console.log(error))
    }
}

module.exports = { byId }