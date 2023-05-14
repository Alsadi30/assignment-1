const fakeProfileController = require('../controller/fakeProfileCont')

const router = require('express').Router()

router.get('/', fakeProfileController)

module.exports = router
