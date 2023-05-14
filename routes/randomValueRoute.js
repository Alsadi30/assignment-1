const getRandomValueController = require('../controller/randomValueCont')

const router = require('express').Router()

router.get('/', getRandomValueController)

module.exports = router
