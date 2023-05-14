const countController = require('../controller/countCont')

const router = require('express').Router()

router.get('/', countController)

module.exports = router
