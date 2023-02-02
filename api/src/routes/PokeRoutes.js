const { Router } = require('express')
const router = Router()
const { allOrByQuery } = require('./middlewares/allOrByQueryR.js')
const { byId } = require('./middlewares/byIdR.js')

router.get('/', allOrByQuery)
router.get('/:id', byId)

module.exports = router



