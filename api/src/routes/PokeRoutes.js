const { Router } = require('express')
const router = Router()
const { allOrByName } = require('./middlewares/allOrByNameR.js')
const { byId } = require('./middlewares/byIdR.js')
const { getTypes } = require('./middlewares/getTypesR')

router.get('/', allOrByName)
router.get('/types', getTypes)
router.get('/:id', byId)

module.exports = router



